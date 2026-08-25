const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const HOST = process.env.HOST || (process.env.PORT ? '0.0.0.0' : '127.0.0.1');
const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;
const DATABASE_FILE = path.join(ROOT, 'taskmanager-data.json');
const MAX_BODY_SIZE = 3 * 1024 * 1024;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

function emptyDatabase() {
  return {
    version: 1,
    updatedAt: null,
    state: { tasks: [], notes: [], events: [], people: [], teams: [] },
    accounts: [{ id: 1, login: 'admin', password: 'admin', role: 'admin', personId: '' }]
  };
}
function isObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
function normalizeDatabase(value) {
  const source = isObject(value) ? value : {};
  const state = isObject(source.state) ? source.state : {};
  return {
    version: 1,
    updatedAt: typeof source.updatedAt === 'string' ? source.updatedAt : null,
    state: {
      tasks: Array.isArray(state.tasks) ? state.tasks : [],
      notes: Array.isArray(state.notes) ? state.notes : [],
      events: Array.isArray(state.events) ? state.events : [],
      people: Array.isArray(state.people) ? state.people : [],
      teams: Array.isArray(state.teams) ? state.teams : []
    },
    accounts: Array.isArray(source.accounts) ? source.accounts : []
  };
}
function readDatabase() {
  if (!fs.existsSync(DATABASE_FILE)) return { exists: false, data: emptyDatabase() };
  try {
    return { exists: true, data: normalizeDatabase(JSON.parse(fs.readFileSync(DATABASE_FILE, 'utf8'))) };
  } catch (error) {
    console.error('Cannot read database:', error.message);
    return { exists: true, data: emptyDatabase() };
  }
}
function writeDatabase(payload) {
  const data = normalizeDatabase(payload);
  data.updatedAt = new Date().toISOString();
  const temporaryFile = DATABASE_FILE + '.tmp';
  fs.writeFileSync(temporaryFile, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(temporaryFile, DATABASE_FILE);
  return data;
}
function sendJson(response, status, data) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Private-Network': 'true' });
  response.end(JSON.stringify(data));
}
function serveFile(requestPath, response) {
  const safePath = requestPath === '/' ? '/index.html' : requestPath;
  const target = path.resolve(ROOT, '.' + safePath);
  if (!target.startsWith(ROOT + path.sep) || !fs.existsSync(target) || fs.statSync(target).isDirectory()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }
  response.writeHead(200, { 'Content-Type': MIME_TYPES[path.extname(target).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(target).pipe(response);
}

const server = http.createServer(function (request, response) {
  const url = new URL(request.url, 'http://' + HOST + ':' + PORT);
  if (url.pathname === '/api/data' && request.method === 'OPTIONS') {
    response.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, PUT, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Private-Network': 'true' });
    response.end();
    return;
  }
  if (url.pathname === '/api/data' && request.method === 'GET') {
    const database = readDatabase();
    sendJson(response, 200, { exists: database.exists, state: database.data.state, accounts: database.data.accounts, updatedAt: database.data.updatedAt });
    return;
  }
  if (url.pathname === '/api/data' && request.method === 'PUT') {
    let body = '';
    request.setEncoding('utf8');
    request.on('data', function (chunk) {
      body += chunk;
      if (Buffer.byteLength(body, 'utf8') > MAX_BODY_SIZE) request.destroy();
    });
    request.on('end', function () {
      try {
        const saved = writeDatabase(JSON.parse(body));
        sendJson(response, 200, { ok: true, updatedAt: saved.updatedAt });
      } catch {
        sendJson(response, 400, { ok: false, error: 'Invalid data' });
      }
    });
    request.on('error', function () { sendJson(response, 400, { ok: false, error: 'Invalid request' }); });
    return;
  }
  if (url.pathname === '/api/health') {
    sendJson(response, 200, { ok: true });
    return;
  }
  if (request.method === 'GET' || request.method === 'HEAD') {
    serveFile(decodeURIComponent(url.pathname), response);
    return;
  }
  sendJson(response, 405, { error: 'Method not allowed' });
});

server.listen(PORT, HOST, function () {
  console.log('Task manager is running at http://' + HOST + ':' + PORT);
  console.log('Data is saved to ' + DATABASE_FILE);
});
