const STORAGE_KEY = 'personal-trello-board-v1';
const LANGUAGE_KEY = 'personal-trello-language-v1';
const ACCOUNTS_KEY = 'personal-trello-accounts-v1';
const SESSION_KEY = 'personal-trello-session-v1';
const SUPABASE_URL = 'https://nwannsutuahqvoptnlro.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Ny1CR7Kj7M4GEmJ_oTcEIA_Gjvn2FM_';
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
const translations = {
  uk: {
    locale: 'uk-UA', pageTitle: 'Моя дошка', brand: 'моя дошка', board: 'Дошка', calendar: 'Календар', afterMeeting: 'Нотатки',
    personalPlan: 'ОСОБИСТИЙ ПЛАН', myTasks: 'Мої завдання', boardHint: 'Додавай картки та перетягуй їх між колонками.', taskPlaceholder: 'Нове завдання — наприклад, оплатити рахунок', dataSaved: 'Збережено', dataSaving: 'Збереження…', dataBrowser: 'Збережено в браузері', dataUnavailable: 'Немає з’єднання з базою',
    todo: 'Треба зробити', doing: 'У процесі', done: 'Готово', responsible: 'Відповідальний', violet: 'Фіолетовий', blue: 'Синій', green: 'Зелений', orange: 'Помаранчевий', pink: 'Рожевий',
    taskDescriptionPlaceholder: 'Опис завдання: що саме потрібно зробити?', addTask: 'Додати завдання', show: 'ПОКАЗАТИ', allTasks: 'Усі завдання', noResponsible: 'Без відповідального',
    myMeetings: 'МОЇ ЗУСТРІЧІ', calendarHint: 'Додавай зустрічі з датою і часом — вони одразу з’являться в календарі.', meetingTitle: 'Назва зустрічі', meetingNotesPlaceholder: 'Нотатки до зустрічі (необов’язково)', addMeeting: 'Додати зустріч', systemTime: 'Системний час', people: 'Учасники', peopleDirectory: 'БАЗА УЧАСНИКІВ', peopleHint: 'Зберігай контакти команди й швидко знаходь їх за ім’ям, поштою або роллю.', personNamePlaceholder: 'Ім’я та прізвище', emailPlaceholder: 'Пошта', rolePlaceholder: 'Роль або посада', phonePlaceholder: 'Телефон', addPerson: 'Додати учасника', savePerson: 'Зберегти учасника', peopleSearchPlaceholder: 'Пошук за ім’ям, поштою або роллю', noPeople: 'База учасників поки порожня. Додай перший контакт.', editPerson: 'Редагувати', deletePerson: 'Видалити', personOne: 'учасник', personFew: 'учасники', personMany: 'учасників', admin: 'Адмін', adminArea: 'АДМІН-ПАНЕЛЬ', teamManagement: 'Керування командами', teamManagementHint: 'Створюй команди та додавай до них учасників із бази.', teamNamePlaceholder: 'Назва команди', addTeam: 'Створити команду', deleteTeam: 'Видалити', addMember: 'Додати учасника', selectPerson: 'Обрати учасника', noTeams: 'Команд поки немає. Створи першу команду.', noTeamMembers: 'У цій команді поки немає учасників.', teamOne: 'команда', teamFew: 'команди', teamMany: 'команд', welcome: 'Моя дошка', loginHint: 'Увійдіть у свій простір.', login: 'Логін', password: 'Пароль', repeatPassword: 'Повторіть пароль', loginPlaceholder: 'Логін', passwordPlaceholder: 'Щонайменше 4 символи', createAdmin: 'Створити адміністратора', signIn: 'Увійти', signOut: 'Вийти', accessControl: 'КЕРУВАННЯ ДОСТУПОМ', accounts: 'Акаунти', addAccount: 'Створити акаунт', noLinkedPerson: 'Без привʼязки до учасника', member: 'Учасник', administrator: 'Адміністратор', invalidCredentials: 'Неправильний логін або пароль.', passwordMismatch: 'Паролі не збігаються.', loginTaken: 'Такий логін уже існує.', accountOne: 'акаунт', accountFew: 'акаунти', accountMany: 'акаунтів',
    personalNotes: 'ОСОБИСТІ НОТАТКИ', notesHint: 'Зберігай головне одразу після дзвінка або зустрічі.', meetingTitlePlaceholder: 'Наприклад, розмова з клієнтом', whatImportant: 'Що важливо запам’ятати', noteTitle: 'Назва нотатки', newNote: 'Нова нотатка', notePlaceholder: 'Рішення, ідеї, наступні кроки — пиши як зручно', saveNote: 'Зберегти нотатку',
    taskCard: 'КАРТКА ЗАВДАННЯ', edit: 'Редагування', close: 'Закрити', taskName: 'Назва завдання', description: 'Опис', taskDescPlaceholder: 'Що саме потрібно зробити?', column: 'Колонка', cardColor: 'Колір картки', priority: 'Пріоритет', highPriority: 'Високий', mediumPriority: 'Середній', lowPriority: 'Низький', allPriorities: 'Усі пріоритети', notAssigned: 'Не призначено', cancel: 'Скасувати', saveChanges: 'Зберегти зміни', delete: 'Видалити',
    meetingCard: 'ЗУСТРІЧ', meetingDetails: 'Деталі зустрічі', meetingNotes: 'Нотатки зустрічі', dateTime: 'Дата й час', startTime: 'Початок', endTime: 'Завершення', participants: 'Учасники', participantsPlaceholder: 'Знайти за ім’ям або поштою', noParticipantsFound: 'Нікого не знайдено. Додай контакт у вкладці «Учасники».', today: 'Сьогодні', newMeeting: 'Нова зустріч', eventNotesPlaceholder: 'Пиши все важливе: рішення, ідеї, домовленості, наступні кроки.', meetingHint: 'Після збереження нотатка одразу з’явиться у вкладці «Нотатки».', saveNotes: 'Зберегти зустріч',
    taskOne: 'завдання', taskFew: 'завдання', taskMany: 'завдань', noteOne: 'нотатка', noteFew: 'нотатки', noteMany: 'нотаток', eventOne: 'зустріч', eventFew: 'зустрічі', eventMany: 'зустрічей', of: 'з', from: 'Від', to: 'До', period: 'Період', allTime: 'Увесь час', last7Days: '7 днів', thisMonth: 'Місяць', customPeriod: 'Свій', createdDate: 'За датою створення', completedDate: 'За датою виконання', emptyColumn: 'Поки порожньо', noNotes: 'Нотаток поки немає. Збережи першу після зустрічі.', createTask: 'Створити завдання', newTask: 'Нове завдання', taskSearchPlaceholder: 'Пошук за назвою або описом', allColumns: 'Усі статуси', allColors: 'Усі кольори', clearFilters: 'Скинути', dropTaskHere: 'Відпустіть, щоб перенести сюди', summary: 'Зведення', workOverview: 'ЗВЕДЕННЯ РОБОТИ', summaryHeading: 'Хто що зробив', summaryHint: 'Дивись прогрес команди та список виконаних завдань.', byPerson: 'За учасниками', doneTasks: 'Виконані завдання', person: 'Учасник', total: 'Усього', completedList: 'Що вже зроблено', noCompletedTasks: 'Виконаних завдань поки немає.', moveTask: 'Перемістити завдання', deleteTask: 'Видалити завдання', deleteNote: 'Видалити нотатку', weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']
  },
  en: {
    locale: 'en-GB', pageTitle: 'My board', brand: 'my board', board: 'Board', calendar: 'Calendar', afterMeeting: 'Notes',
    personalPlan: 'PERSONAL PLAN', myTasks: 'My tasks', boardHint: 'Add cards and drag them between columns.', taskPlaceholder: 'New task — for example, pay the bill', dataSaved: 'Saved', dataSaving: 'Saving…', dataBrowser: 'Saved in browser', dataUnavailable: 'Database unavailable',
    todo: 'To do', doing: 'In progress', done: 'Done', responsible: 'Assignee', violet: 'Violet', blue: 'Blue', green: 'Green', orange: 'Orange', pink: 'Pink',
    taskDescriptionPlaceholder: 'Task description: what needs to be done?', addTask: 'Add task', show: 'SHOW', allTasks: 'All tasks', noResponsible: 'No assignee',
    myMeetings: 'MY MEETINGS', calendarHint: 'Add meetings with date and time — they will appear in the calendar right away.', meetingTitle: 'Meeting title', meetingNotesPlaceholder: 'Meeting notes (optional)', addMeeting: 'Add meeting', systemTime: 'System time', people: 'People', peopleDirectory: 'PEOPLE DIRECTORY', peopleHint: 'Store team contacts and find them quickly by name, email, or role.', personNamePlaceholder: 'Full name', emailPlaceholder: 'Email', rolePlaceholder: 'Role or job title', phonePlaceholder: 'Phone', addPerson: 'Add person', savePerson: 'Save person', peopleSearchPlaceholder: 'Search by name, email, or role', noPeople: 'The people directory is empty. Add your first contact.', editPerson: 'Edit', deletePerson: 'Delete', personOne: 'person', personFew: 'people', personMany: 'people', admin: 'Admin', adminArea: 'ADMIN AREA', teamManagement: 'Team management', teamManagementHint: 'Create teams and add people from the directory.', teamNamePlaceholder: 'Team name', addTeam: 'Create team', deleteTeam: 'Delete', addMember: 'Add person', selectPerson: 'Choose a person', noTeams: 'There are no teams yet. Create the first one.', noTeamMembers: 'There are no people in this team yet.', teamOne: 'team', teamFew: 'teams', teamMany: 'teams', welcome: 'My board', loginHint: 'Sign in to your workspace.', login: 'Login', password: 'Password', repeatPassword: 'Repeat password', loginPlaceholder: 'Login', passwordPlaceholder: 'At least 4 characters', createAdmin: 'Create administrator', signIn: 'Sign in', signOut: 'Sign out', accessControl: 'ACCESS CONTROL', accounts: 'Accounts', addAccount: 'Create account', noLinkedPerson: 'No linked person', member: 'Member', administrator: 'Administrator', invalidCredentials: 'Incorrect login or password.', passwordMismatch: 'Passwords do not match.', loginTaken: 'This login already exists.', accountOne: 'account', accountFew: 'accounts', accountMany: 'accounts',
    personalNotes: 'PERSONAL NOTES', notesHint: 'Save the key points right after a call or meeting.', meetingTitlePlaceholder: 'For example, client call', whatImportant: 'What is important to remember', noteTitle: 'Note title', newNote: 'New note', notePlaceholder: 'Decisions, ideas, next steps — write however you like', saveNote: 'Save note',
    taskCard: 'TASK CARD', edit: 'Edit', close: 'Close', taskName: 'Task title', description: 'Description', taskDescPlaceholder: 'What exactly needs to be done?', column: 'Column', cardColor: 'Card color', priority: 'Priority', highPriority: 'High', mediumPriority: 'Medium', lowPriority: 'Low', allPriorities: 'All priorities', notAssigned: 'Not assigned', cancel: 'Cancel', saveChanges: 'Save changes', delete: 'Delete',
    meetingCard: 'MEETING', meetingDetails: 'Meeting details', meetingNotes: 'Meeting notes', dateTime: 'Date and time', startTime: 'Starts', endTime: 'Ends', participants: 'Participants', participantsPlaceholder: 'Find by name or email', noParticipantsFound: 'No one found. Add a contact in the People tab.', today: 'Today', newMeeting: 'New meeting', eventNotesPlaceholder: 'Write down everything important: decisions, ideas, agreements, and next steps.', meetingHint: 'After saving, the note will appear in the “Notes” tab.', saveNotes: 'Save meeting',
    taskOne: 'task', taskFew: 'tasks', taskMany: 'tasks', noteOne: 'note', noteFew: 'notes', noteMany: 'notes', eventOne: 'meeting', eventFew: 'meetings', eventMany: 'meetings', of: 'of', from: 'From', to: 'To', period: 'Period', allTime: 'All time', last7Days: '7 days', thisMonth: 'This month', customPeriod: 'Custom', createdDate: 'Created date', completedDate: 'Completed date', emptyColumn: 'Nothing here yet', noNotes: 'No notes yet. Save your first one after a meeting.', createTask: 'Create task', newTask: 'New task', taskSearchPlaceholder: 'Search by title or description', allColumns: 'All statuses', allColors: 'All colors', clearFilters: 'Clear', dropTaskHere: 'Release to move here', summary: 'Summary', workOverview: 'WORK SUMMARY', summaryHeading: 'Who did what', summaryHint: 'See team progress and completed tasks.', byPerson: 'By person', doneTasks: 'Completed tasks', person: 'Person', total: 'Total', completedList: 'What is already done', noCompletedTasks: 'No completed tasks yet.', moveTask: 'Move task', deleteTask: 'Delete task', deleteNote: 'Delete note', weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
};
Object.assign(translations.uk, {
  login: 'Логін', loginPlaceholder: 'Наприклад, danylo', passwordPlaceholder: 'Щонайменше 8 символів', createAdmin: 'Створити акаунт', register: 'Реєстрація', registerHint: 'Створіть свій акаунт.'
});
Object.assign(translations.en, {
  login: 'Login', loginPlaceholder: 'For example, danylo', passwordPlaceholder: 'At least 8 characters', createAdmin: 'Create account', register: 'Register', registerHint: 'Create your account.'
});
const columns = [
  { id: 'todo', titleKey: 'todo' },
  { id: 'doing', titleKey: 'doing' },
  { id: 'done', titleKey: 'done' }
];
const authScreen = document.getElementById('auth-screen');
const appShell = document.getElementById('app-shell');
const setupForm = document.getElementById('setup-form');
const loginForm = document.getElementById('login-form');
const authDescription = document.getElementById('auth-description');
const authMessage = document.getElementById('auth-message');
const accountForm = document.getElementById('account-form');
const accountsList = document.getElementById('accounts-list');
const peopleForm = document.getElementById('people-form');
const teamForm = document.getElementById('team-form');
const board = document.getElementById('board');
const noteList = document.getElementById('note-list');
const peopleList = document.getElementById('people-list');
const peopleSearch = document.getElementById('people-search');
const teamsList = document.getElementById('teams-list');
const responsibleFilter = document.getElementById('responsible-filter');
const taskSearch = document.getElementById('task-search');
const statusFilter = document.getElementById('status-filter');
const priorityFilter = document.getElementById('priority-filter');
const clearFilters = document.getElementById('clear-filters');
const taskDateFrom = document.getElementById('task-date-from');
const taskDateTo = document.getElementById('task-date-to');
const taskCustomRange = document.getElementById('task-custom-range');
const taskEditor = document.getElementById('task-editor');
const taskDetail = document.getElementById('task-detail');
const noteEditor = document.getElementById('note-editor');
const noteDetail = document.getElementById('note-detail');
const eventEditor = document.getElementById('event-editor');
const eventDetail = document.getElementById('event-detail');
const miniCalendarGrid = document.getElementById('mini-calendar-grid');
const weekHeader = document.getElementById('week-header');
const timeAxis = document.getElementById('time-axis');
const weekGrid = document.getElementById('week-grid');
const participantSearch = document.getElementById('participant-search');
const participantTags = document.getElementById('participant-tags');
const participantSuggestions = document.getElementById('participant-suggestions');
const summaryStats = document.getElementById('summary-stats');
const summaryByPerson = document.getElementById('summary-by-person');
const completedTasks = document.getElementById('completed-tasks');
const summaryDateMode = document.getElementById('summary-date-mode');
const summaryDateFrom = document.getElementById('summary-date-from');
const summaryDateTo = document.getElementById('summary-date-to');
const summaryCustomRange = document.getElementById('summary-custom-range');
const languageSwitch = document.getElementById('language-switch');
const saveStatus = document.getElementById('save-status');
let dragId = null;
let openTaskId = null;
let openEventId = null;
let openNoteId = null;
let taskDatePreset = 'all';
let summaryDatePreset = 'all';
let peopleEditId = null;
let selectedParticipantIds = [];
let language = localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'uk';
let state = normalizeState(loadState());
let accounts = [];
let currentUser = null;
let saveStatusKey = 'dataBrowser';
let databaseSaveTimer = null;
let calendarCursor = startOfWeek(new Date());
let authMode = 'login';

function t(key) {
  return translations[language][key] || key;
}
function updateSystemClock() {
  document.getElementById('system-clock').textContent = new Intl.DateTimeFormat(t('locale'), { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(new Date());
}
function applyLanguage() {
  document.documentElement.lang = language;
  document.title = t('pageTitle');
  languageSwitch.value = language;
  document.querySelectorAll('[data-i18n]').forEach(function (element) { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (element) { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach(function (element) { element.setAttribute('aria-label', t(element.dataset.i18nAria)); });
  document.getElementById('event-editor-title').textContent = t('meetingDetails');
  updateTaskEditorUi();
  updateNoteEditorUi();
  updateSystemClock();
  updateSaveStatus();
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { tasks: [], notes: [], events: [], people: [], teams: [] };
  } catch {
    return { tasks: [], notes: [], events: [], people: [], teams: [] };
  }
}
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  scheduleDatabaseSave();
}
function loadAccounts() {
  try {
    const saved = localStorage.getItem(ACCOUNTS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}
function saveAccounts() {
  // Accounts are held in Supabase Auth. Passwords are never stored in the browser.
}
function normalizeState(saved) {
  const source = saved && typeof saved === 'object' ? saved : {};
  return {
    tasks: Array.isArray(source.tasks) ? source.tasks : [],
    notes: Array.isArray(source.notes) ? source.notes : [],
    events: Array.isArray(source.events) ? source.events : [],
    people: (Array.isArray(source.people) ? source.people : []).map(function (person) {
      return { id: person.id, name: person.name || '', email: person.email || '', role: person.role || '' };
    }),
    teams: Array.isArray(source.teams) ? source.teams : []
  };
}
function normalizeAccounts(saved) {
  return (Array.isArray(saved) ? saved : []).filter(function (account) {
    return account && account.id && account.login;
  }).map(function (account) {
    return { id: account.id, login: account.login, password: account.password || '', role: account.role === 'admin' ? 'admin' : 'member', personId: account.personId || '' };
  });
}
function updateSaveStatus() {
  if (!saveStatus) return;
  saveStatus.textContent = t(saveStatusKey);
  saveStatus.dataset.state = saveStatusKey;
}
function setSaveStatus(key) {
  saveStatusKey = key;
  updateSaveStatus();
}
function hasStoredContent() {
  return Boolean(accounts.length || state.tasks.length || state.notes.length || state.events.length || state.people.length || state.teams.length);
}
async function saveDatabaseNow() {
  if (!supabaseClient || !currentUser) {
    setSaveStatus('dataUnavailable');
    return;
  }
  setSaveStatus('dataSaving');
  try {
    const response = await supabaseClient.from('workspace_state').update({ state: state }).eq('id', 'main');
    if (response.error) throw response.error;
    setSaveStatus('dataSaved');
  } catch {
    setSaveStatus('dataUnavailable');
  }
}
function scheduleDatabaseSave() {
  if (!supabaseClient || !currentUser) {
    setSaveStatus('dataUnavailable');
    return;
  }
  clearTimeout(databaseSaveTimer);
  setSaveStatus('dataSaving');
  databaseSaveTimer = setTimeout(function () { saveDatabaseNow(); }, 250);
}
async function hydrateDatabase() {
  if (!supabaseClient) return false;
  setSaveStatus('dataSaving');
  try {
    const response = await supabaseClient.from('workspace_state').select('state').eq('id', 'main').single();
    if (response.error) throw response.error;
    state = normalizeState(response.data.state);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    setSaveStatus('dataSaved');
    return true;
  } catch {
    setSaveStatus('dataUnavailable');
    return false;
  }
}
async function refreshAccounts() {
  if (!supabaseClient) return [];
  const response = await supabaseClient.from('profiles').select('id, email, display_name, role, created_at').order('created_at');
  if (response.error) return [];
  accounts = response.data.map(function (profile) {
    return { id: profile.id, login: profile.display_name || profile.email.split('@')[0], email: profile.email, role: profile.role, personId: '' };
  });
  return accounts;
}
function accountForUser(user) {
  const account = accounts.find(function (item) { return item.id === user.id; });
  return account || { id: user.id, login: user.user_metadata && user.user_metadata.display_name || user.email.split('@')[0], email: user.email, role: 'member', personId: '' };
}
function internalEmailForLogin(login) {
  return login.trim().toLocaleLowerCase() + '@taskmanager.local';
}
function isAdmin() {
  return Boolean(currentUser && currentUser.role === 'admin');
}
function showAuth() {
  appShell.hidden = true;
  authScreen.hidden = false;
  authMessage.textContent = '';
  setAuthMode('login');
}
function setAuthMode(mode) {
  authMode = mode === 'register' ? 'register' : 'login';
  const registering = authMode === 'register';
  setupForm.hidden = !registering;
  loginForm.hidden = registering;
  authMessage.textContent = '';
  authDescription.textContent = t(registering ? 'registerHint' : 'loginHint');
  document.querySelectorAll('[data-auth-mode]').forEach(function (button) { button.classList.toggle('active', button.dataset.authMode === authMode); });
  const form = registering ? setupForm : loginForm;
  setTimeout(function () { form.elements.login.focus(); }, 0);
}
function startSession(account) {
  currentUser = account;
  authScreen.hidden = true;
  appShell.hidden = false;
  updateAccessUi();
  render();
}
function updateAccessUi() {
  document.getElementById('current-user').textContent = currentUser ? currentUser.login : '';
  document.getElementById('admin-tab').hidden = !isAdmin();
  if (!isAdmin() && !document.getElementById('admin-screen').hidden) showTab('board');
}
async function initializeAuth() {
  if (!supabaseClient) {
    showAuth();
    authMessage.textContent = 'Не вдалося підключитися до сервісу входу.';
    return;
  }
  const sessionResponse = await supabaseClient.auth.getSession();
  const user = sessionResponse.data.session && sessionResponse.data.session.user;
  if (!user) {
    showAuth();
    return;
  }
  await refreshAccounts();
  startSession(accountForUser(user));
  await hydrateDatabase();
  render();
}
function escapeHtml(value) {
  const element = document.createElement('span');
  element.textContent = value;
  return element.innerHTML;
}
function dateLabel(iso) {
  return new Intl.DateTimeFormat(t('locale'), { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }).format(new Date(iso));
}
function options(current) {
  return columns.map(function (column) {
    return '<option value="' + column.id + '"' + (column.id === current ? ' selected' : '') + '>' + t(column.titleKey) + '</option>';
  }).join('');
}
function taskPriority(task) {
  if (['high', 'medium', 'low'].includes(task.priority)) return task.priority;
  const legacy = { pink: 'high', orange: 'high', violet: 'medium', blue: 'low', green: 'low' };
  return legacy[task.color] || 'medium';
}
function priorityRank(task) {
  return { high: 0, medium: 1, low: 2 }[taskPriority(task)];
}
function taskMarkup(task) {
  const priority = taskPriority(task);
  const description = task.description ? '<p class="task-description">' + escapeHtml(task.description) + '</p>' : '';
  const assignee = task.responsible ? '<span class="assignee">' + escapeHtml(task.responsible) + '</span>' : '<span class="assignee empty">' + t('notAssigned') + '</span>';
  return '<article class="task-card priority-' + priority + '" draggable="true" data-task="' + task.id + '"><h3>' + escapeHtml(task.title) + '</h3>' + description + '<div class="card-meta">' + assignee + '</div><footer class="task-footer"><select class="move-select" data-move="' + task.id + '" aria-label="' + t('moveTask') + '">' + options(task.column) + '</select><button class="delete" data-delete-task="' + task.id + '" aria-label="' + t('deleteTask') + '">×</button></footer></article>';
}
function localDateValue(iso) {
  if (!iso || Number.isNaN(new Date(iso).getTime())) return '';
  return eventDateInputValue(new Date(iso)).slice(0, 10);
}
function isDateInRange(iso, from, to) {
  if (!from && !to) return true;
  const value = localDateValue(iso);
  return Boolean(value) && (!from || value >= from) && (!to || value <= to);
}
function setDatePreset(scope, preset) {
  const isTask = scope === 'task';
  const from = isTask ? taskDateFrom : summaryDateFrom;
  const to = isTask ? taskDateTo : summaryDateTo;
  const customRange = isTask ? taskCustomRange : summaryCustomRange;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (preset === 'all') {
    from.value = '';
    to.value = '';
  } else if (preset === 'today') {
    from.value = dateKey(today);
    to.value = dateKey(today);
  } else if (preset === 'week') {
    const start = new Date(today);
    start.setDate(start.getDate() - 6);
    from.value = dateKey(start);
    to.value = dateKey(today);
  } else if (preset === 'month') {
    const start = new Date(today.getFullYear(), today.getMonth(), 1);
    from.value = dateKey(start);
    to.value = dateKey(today);
  }
  if (isTask) taskDatePreset = preset; else summaryDatePreset = preset;
  customRange.hidden = preset !== 'custom';
  document.querySelectorAll('[data-' + scope + '-period]').forEach(function (button) {
    button.classList.toggle('active', button.dataset[scope + 'Period'] === preset);
  });
  if (isTask) renderBoard(); else renderSummary();
}
function renderBoard() {
  const responsible = responsibleFilter.value;
  const status = statusFilter.value;
  const priority = priorityFilter.value;
  const search = taskSearch.value.trim().toLocaleLowerCase();
  const from = taskDateFrom.value;
  const to = taskDateTo.value;
  const filteredTasks = state.tasks.filter(function (task) {
    const matchesResponsible = !responsible || (responsible === '__none__' ? !task.responsible : task.responsible === responsible);
    const matchesStatus = !status || task.column === status;
    const matchesPriority = !priority || taskPriority(task) === priority;
    const searchable = (task.title + ' ' + (task.description || '') + ' ' + (task.responsible || '')).toLocaleLowerCase();
    return matchesResponsible && matchesStatus && matchesPriority && isDateInRange(task.createdAt, from, to) && (!search || searchable.includes(search));
  });
  board.innerHTML = columns.map(function (column) {
    const cards = filteredTasks.filter(function (task) { return task.column === column.id; }).sort(function (a, b) { return priorityRank(a) - priorityRank(b) || new Date(b.createdAt || 0) - new Date(a.createdAt || 0); });
    const inner = cards.length ? cards.map(taskMarkup).join('') : '<div class="empty-column">' + t('emptyColumn') + '</div>';
    return '<section class="column" data-column="' + column.id + '"><header class="column-head"><h2>' + t(column.titleKey) + ' <span>' + cards.length + '</span></h2><button type="button" data-add-to="' + column.id + '" aria-label="' + t('addTask') + '">＋</button></header><div class="drop-hint">⇣ ' + t('dropTaskHere') + '</div><div class="column-cards" data-dropzone="' + column.id + '">' + inner + '</div></section>';
  }).join('');
  const shown = filteredTasks.length;
  const hasFilters = responsible || status || priority || search || from || to;
  document.getElementById('task-count').textContent = hasFilters ? shown + ' ' + t('of') + ' ' + state.tasks.length : state.tasks.length + plural(state.tasks.length, t('taskOne'), t('taskFew'), t('taskMany'));
  bindDragAndDrop();
}
function renderResponsibleFilter() {
  const previous = responsibleFilter.value;
  const people = Array.from(new Set(state.tasks.map(function (task) { return task.responsible; }).filter(Boolean))).sort();
  responsibleFilter.innerHTML = '<option value="">' + t('allTasks') + '</option><option value="__none__">' + t('noResponsible') + '</option>' + people.map(function (person) { return '<option value="' + escapeHtml(person) + '">' + escapeHtml(person) + '</option>'; }).join('');
  if (people.includes(previous) || previous === '__none__') responsibleFilter.value = previous;
}
function renderNotes() {
  document.getElementById('meeting-count').textContent = state.notes.length;
  document.getElementById('notes-count').textContent = state.notes.length + plural(state.notes.length, t('noteOne'), t('noteFew'), t('noteMany'));
  if (!state.notes.length) {
    noteList.innerHTML = '<div class="empty"><span>✦</span>' + t('noNotes') + '</div>';
    return;
  }
  noteList.innerHTML = state.notes.map(function (note) {
    return '<article class="note" data-note="' + note.id + '"><header><div><h3>' + escapeHtml(note.title) + '</h3><time>' + dateLabel(note.createdAt) + '</time></div><button class="delete" data-delete-note="' + note.id + '" aria-label="' + t('deleteNote') + '">×</button></header><p>' + escapeHtml(note.text) + '</p><footer class="note-actions"><button class="create-task" data-create-task-from-note="' + note.id + '">＋ ' + t('createTask') + '</button></footer></article>';
  }).join('');
}
function contactMatches(person, query) {
  return [person.name, person.email, person.role].filter(Boolean).join(' ').toLocaleLowerCase().includes(query);
}
function personInitials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (part) { return part[0]; }).join('').toUpperCase();
}
function renderPeople() {
  const query = peopleSearch.value.trim().toLocaleLowerCase();
  const visiblePeople = state.people.filter(function (person) { return !query || contactMatches(person, query); });
  document.getElementById('people-count').textContent = state.people.length;
  document.getElementById('people-total').textContent = state.people.length + plural(state.people.length, t('personOne'), t('personFew'), t('personMany'));
  document.querySelector('#save-person span').textContent = t(peopleEditId ? 'savePerson' : 'addPerson');
  document.getElementById('cancel-person-edit').hidden = !peopleEditId;
  if (!visiblePeople.length) {
    peopleList.innerHTML = '<div class="empty"><span>♙</span>' + (state.people.length ? t('noParticipantsFound') : t('noPeople')) + '</div>';
  } else {
    peopleList.innerHTML = visiblePeople.map(function (person) {
      const role = person.role ? '<span class="person-role">' + escapeHtml(person.role) + '</span>' : '';
      return '<article class="person-card"><header><span class="person-avatar">' + escapeHtml(personInitials(person.name)) + '</span><div><h3>' + escapeHtml(person.name) + '</h3>' + role + '</div></header><div class="person-data"><span><b>@</b>' + escapeHtml(person.email) + '</span></div><footer class="person-actions"><button type="button" data-edit-person="' + person.id + '">' + t('editPerson') + '</button><button type="button" class="delete-person" data-delete-person="' + person.id + '">' + t('deletePerson') + '</button></footer></article>';
    }).join('');
  }
  document.getElementById('responsible-list').innerHTML = state.people.map(function (person) { return '<option value="' + escapeHtml(person.name) + '"></option>'; }).join('');
}
function renderTeams() {
  document.getElementById('teams-total').textContent = state.teams.length + plural(state.teams.length, t('teamOne'), t('teamFew'), t('teamMany'));
  if (!state.teams.length) {
    teamsList.innerHTML = '<div class="empty"><span>♧</span>' + t('noTeams') + '</div>';
    return;
  }
  teamsList.innerHTML = state.teams.map(function (team) {
    const memberIds = Array.isArray(team.memberIds) ? team.memberIds.map(Number) : [];
    const members = memberIds.map(function (id) { return state.people.find(function (person) { return person.id === id; }); }).filter(Boolean);
    const available = state.people.filter(function (person) { return !memberIds.includes(person.id); });
    const memberList = members.length ? '<div class="team-members">' + members.map(function (person) { return '<div class="team-member"><span>' + escapeHtml(person.name) + '</span><button type="button" data-remove-team-member="' + team.id + '" data-person="' + person.id + '" aria-label="' + t('delete') + '">×</button></div>'; }).join('') + '</div>' : '<p class="no-team-members">' + t('noTeamMembers') + '</p>';
    const addMember = available.length ? '<div class="team-add-member"><select data-team-picker="' + team.id + '"><option value="">' + t('selectPerson') + '</option>' + available.map(function (person) { return '<option value="' + person.id + '">' + escapeHtml(person.name) + '</option>'; }).join('') + '</select><button type="button" data-add-team-member="' + team.id + '">＋ ' + t('addMember') + '</button></div>' : '';
    return '<article class="team-card"><header><div><h2>' + escapeHtml(team.name) + '</h2><span>' + members.length + plural(members.length, t('personOne'), t('personFew'), t('personMany')) + '</span></div><button type="button" class="delete-team" data-delete-team="' + team.id + '">' + t('deleteTeam') + '</button></header>' + memberList + addMember + '</article>';
  }).join('');
}
function renderAccounts() {
  if (!accounts.length) {
    accountsList.innerHTML = '<div class="accounts-empty">' + t('emptyColumn') + '</div>';
    return;
  }
  accountsList.innerHTML = accounts.map(function (account) {
    const roleKey = account.role === 'admin' ? 'administrator' : 'member';
    return '<article class="account-row"><div><strong>' + escapeHtml(account.login) + '</strong><span>' + t(roleKey) + '</span></div><div><span class="role-badge ' + (account.role === 'admin' ? '' : 'member') + '">' + t(roleKey) + '</span></div></article>';
  }).join('');
}
function selectedPeople() {
  return selectedParticipantIds.map(function (id) { return state.people.find(function (person) { return person.id === id; }); }).filter(Boolean);
}
function renderParticipantPicker() {
  const query = participantSearch.value.trim().toLocaleLowerCase();
  const matches = state.people.filter(function (person) { return !selectedParticipantIds.includes(person.id) && (!query || contactMatches(person, query)); }).slice(0, 7);
  participantTags.innerHTML = selectedPeople().map(function (person) { return '<span class="participant-tag">' + escapeHtml(person.name) + '<button type="button" data-remove-participant="' + person.id + '" aria-label="' + t('delete') + '">×</button></span>'; }).join('');
  eventEditor.elements.participantIds.value = selectedParticipantIds.join(',');
  participantSuggestions.innerHTML = matches.length ? matches.map(function (person) {
    const details = [person.email, person.role].filter(Boolean).join(' · ');
    return '<button type="button" class="participant-suggestion" data-add-participant="' + person.id + '"><strong>' + escapeHtml(person.name) + '</strong><span>' + escapeHtml(details) + '</span></button>';
  }).join('') : '<div class="participant-suggestion"><span>' + t('noParticipantsFound') + '</span></div>';
  participantSuggestions.hidden = !document.activeElement || document.activeElement !== participantSearch;
}
function setSelectedParticipants(ids) {
  selectedParticipantIds = Array.from(new Set((ids || []).map(Number))).filter(function (id) { return state.people.some(function (person) { return person.id === id; }); });
  renderParticipantPicker();
}
function dateKey(date) {
  return date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');
}
function eventDateInputValue(date) {
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}
function startOfWeek(date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  return start;
}
function dateFromKey(key) {
  const parts = key.split('-').map(Number);
  return new Date(parts[0], parts[1] - 1, parts[2]);
}
function dateInputFor(day, hour) {
  const date = new Date(day);
  date.setHours(hour, 0, 0, 0);
  return eventDateInputValue(date);
}
function meetingEnd(event) {
  const start = new Date(event.date);
  const savedEnd = event.end ? new Date(event.end) : null;
  if (savedEnd && !Number.isNaN(savedEnd.getTime()) && savedEnd > start) return savedEnd;
  return new Date(start.getTime() + 60 * 60000);
}
function participantsFor(event) {
  if (Array.isArray(event.participantIds)) {
    const selected = event.participantIds.map(function (id) { return state.people.find(function (person) { return person.id === Number(id); }); }).filter(Boolean).map(function (person) { return person.name; });
    if (selected.length) return selected;
  }
  if (Array.isArray(event.participants)) return event.participants.filter(Boolean);
  if (typeof event.participants === 'string') return event.participants.split(',').map(function (name) { return name.trim(); }).filter(Boolean);
  return [];
}
function renderMiniCalendar() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const firstDay = new Date(year, month, 1);
  const offset = (firstDay.getDay() + 6) % 7;
  const cellCount = offset + new Date(year, month + 1, 0).getDate() > 35 ? 42 : 35;
  const today = dateKey(new Date());
  const weekStart = dateKey(calendarCursor);
  const weekEnd = dateKey(new Date(calendarCursor.getFullYear(), calendarCursor.getMonth(), calendarCursor.getDate() + 6));
  document.getElementById('mini-calendar-title').textContent = new Intl.DateTimeFormat(t('locale'), { month: 'long', year: 'numeric' }).format(firstDay);
  document.getElementById('calendar-weekdays').innerHTML = t('weekdays').map(function (name) { return '<span>' + name + '</span>'; }).join('');
  miniCalendarGrid.innerHTML = Array.from({ length: cellCount }, function (_, index) {
    const day = new Date(year, month, index - offset + 1);
    const key = dateKey(day);
    const classes = [day.getMonth() !== month ? 'muted' : '', key === today ? 'today' : '', key >= weekStart && key <= weekEnd ? 'in-week' : '', state.events.some(function (event) { return event.date.slice(0, 10) === key; }) ? 'has-event' : ''].filter(Boolean).join(' ');
    return '<button type="button" class="mini-day ' + classes + '" data-jump-date="' + key + '">' + day.getDate() + '</button>';
  }).join('');
}
function renderCalendar() {
  const days = Array.from({ length: 7 }, function (_, index) {
    return new Date(calendarCursor.getFullYear(), calendarCursor.getMonth(), calendarCursor.getDate() + index);
  });
  const today = dateKey(new Date());
  const titleFormat = new Intl.DateTimeFormat(t('locale'), { day: 'numeric', month: 'short', year: 'numeric' });
  const weekdayFormat = new Intl.DateTimeFormat(t('locale'), { weekday: 'short' });
  document.getElementById('calendar-title').textContent = titleFormat.format(days[0]) + ' – ' + titleFormat.format(days[6]);
  document.getElementById('event-count').textContent = state.events.length;
  document.getElementById('calendar-total').textContent = state.events.length + plural(state.events.length, t('eventOne'), t('eventFew'), t('eventMany'));
  renderMiniCalendar();
  weekHeader.innerHTML = '<div class="week-time-corner"></div>' + days.map(function (day) {
    const key = dateKey(day);
    return '<button type="button" class="week-day-head' + (key === today ? ' today' : '') + '" data-new-event-day="' + key + '"><span class="weekday-name">' + weekdayFormat.format(day) + '</span><span class="date-number">' + day.getDate() + '</span></button>';
  }).join('');
  timeAxis.innerHTML = Array.from({ length: 14 }, function (_, index) {
    return '<div class="time-label">' + String(index + 7).padStart(2, '0') + ':00</div>';
  }).join('');
  weekGrid.innerHTML = days.map(function (day) {
    const key = dateKey(day);
    const slots = Array.from({ length: 14 }, function (_, index) {
      return '<button type="button" class="week-slot" data-new-event-time="' + dateInputFor(day, index + 7) + '"></button>';
    }).join('');
    const events = state.events.filter(function (event) { return event.date && event.date.slice(0, 10) === key; }).map(function (event) {
      const start = new Date(event.date);
      const end = meetingEnd(event);
      const startMinutes = start.getHours() * 60 + start.getMinutes();
      const top = Math.max(0, (startMinutes - 7 * 60) * 0.9);
      const duration = Math.max(30, (end.getTime() - start.getTime()) / 60000);
      const height = Math.max(35, Math.min(750 - top, duration * 0.9 - 4));
      const people = participantsFor(event);
      const peopleLine = people.length ? '<span>👥 ' + escapeHtml(people.slice(0, 2).join(', ')) + (people.length > 2 ? ' +' + (people.length - 2) : '') + '</span>' : '<span>' + event.date.slice(11, 16) + ' – ' + eventDateInputValue(end).slice(11, 16) + '</span>';
      return '<button type="button" class="week-event" data-open-event="' + event.id + '" style="top:' + top + 'px;height:' + height + 'px" title="' + escapeHtml(event.title) + '"><strong>' + escapeHtml(event.date.slice(11, 16)) + ' · ' + escapeHtml(event.title) + '</strong>' + peopleLine + '</button>';
    }).join('');
    return '<div class="week-day-column">' + slots + events + '</div>';
  }).join('');
}
function renderSummary() {
  const totals = { todo: 0, doing: 0, done: 0 };
  const mode = summaryDateMode.value;
  const from = summaryDateFrom.value;
  const to = summaryDateTo.value;
  const reportTasks = state.tasks.filter(function (task) {
    const reportDate = mode === 'completed' ? (task.completedAt || (task.column === 'done' ? task.createdAt : '')) : task.createdAt;
    if (mode === 'completed' && !reportDate) return false;
    return isDateInRange(reportDate, from, to);
  });
  reportTasks.forEach(function (task) { if (totals[task.column] !== undefined) totals[task.column] += 1; });
  document.getElementById('summary-total').textContent = reportTasks.length + plural(reportTasks.length, t('taskOne'), t('taskFew'), t('taskMany'));
  summaryStats.innerHTML = [
    { key: 'total', value: reportTasks.length, label: t('total') },
    { key: 'todo', value: totals.todo, label: t('todo') },
    { key: 'doing', value: totals.doing, label: t('doing') },
    { key: 'done', value: totals.done, label: t('done') }
  ].map(function (item) { return '<article class="summary-stat ' + item.key + '"><b>' + item.value + '</b><span>' + item.label + '</span></article>'; }).join('');
  const people = new Map();
  reportTasks.forEach(function (task) {
    const name = task.responsible || t('notAssigned');
    if (!people.has(name)) people.set(name, { name: name, todo: 0, doing: 0, done: 0 });
    people.get(name)[task.column] += 1;
  });
  const rows = Array.from(people.values()).sort(function (a, b) { return (b.done + b.doing + b.todo) - (a.done + a.doing + a.todo) || a.name.localeCompare(b.name, t('locale')); });
  summaryByPerson.innerHTML = rows.length ? rows.map(function (person) {
    const total = person.todo + person.doing + person.done;
    return '<tr><td><span class="summary-person"><i>' + escapeHtml(personInitials(person.name)) + '</i>' + escapeHtml(person.name) + '</span></td><td>' + person.todo + '</td><td>' + person.doing + '</td><td>' + person.done + '</td><td><b>' + total + '</b></td></tr>';
  }).join('') : '<tr><td colspan="5" class="summary-empty">' + t('emptyColumn') + '</td></tr>';
  const doneTasks = reportTasks.filter(function (task) { return task.column === 'done'; }).sort(function (a, b) { return new Date(b.completedAt || b.createdAt || 0) - new Date(a.completedAt || a.createdAt || 0); });
  completedTasks.innerHTML = doneTasks.length ? '<div class="completed-list">' + doneTasks.map(function (task) {
    return '<div class="completed-task"><strong>✓ ' + escapeHtml(task.title) + '</strong><span>' + escapeHtml(task.responsible || t('notAssigned')) + '</span></div>';
  }).join('') + '</div>' : '<div class="summary-empty">' + t('noCompletedTasks') + '</div>';
}
function plural(number, one, few, many) {
  const last = number % 10;
  const lastTwo = number % 100;
  if (last === 1 && lastTwo !== 11) return ' ' + one;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return ' ' + few;
  return ' ' + many;
}
function render() {
  renderResponsibleFilter();
  renderBoard();
  renderNotes();
  renderPeople();
  renderTeams();
  renderAccounts();
  renderCalendar();
  renderSummary();
}
function moveTask(id, column) {
  state.tasks = state.tasks.map(function (task) {
    if (task.id !== Number(id)) return task;
    const completedAt = column === 'done' && task.column !== 'done' ? new Date().toISOString() : (column === 'done' ? task.completedAt : null);
    return Object.assign({}, task, { column: column, completedAt: completedAt });
  });
  saveState();
  render();
}
function bindDragAndDrop() {
  function clearTargets() {
    document.querySelectorAll('.column').forEach(function (column) { column.classList.remove('is-drag-target'); });
  }
  document.querySelectorAll('.task-card').forEach(function (card) {
    card.addEventListener('dragstart', function (event) {
      dragId = Number(card.dataset.task);
      card.classList.add('dragging');
      document.body.classList.add('is-dragging-task');
      event.dataTransfer.effectAllowed = 'move';
    });
    card.addEventListener('dragend', function () {
      dragId = null;
      card.classList.remove('dragging');
      document.body.classList.remove('is-dragging-task');
      clearTargets();
    });
  });
  document.querySelectorAll('.column').forEach(function (column) {
    column.addEventListener('dragenter', function (event) {
      event.preventDefault();
      clearTargets();
      column.classList.add('is-drag-target');
    });
    column.addEventListener('dragover', function (event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      if (!column.classList.contains('is-drag-target')) {
        clearTargets();
        column.classList.add('is-drag-target');
      }
    });
    column.addEventListener('dragleave', function (event) {
      if (!column.contains(event.relatedTarget)) column.classList.remove('is-drag-target');
    });
    column.addEventListener('drop', function (event) {
      event.preventDefault();
      const targetColumn = column.dataset.column;
      clearTargets();
      if (dragId) moveTask(dragId, targetColumn);
    });
  });
}
function showTab(tab) {
  if (tab === 'admin' && !isAdmin()) return;
  document.getElementById('board-screen').hidden = tab !== 'board';
  document.getElementById('calendar-screen').hidden = tab !== 'calendar';
  document.getElementById('people-screen').hidden = tab !== 'people';
  document.getElementById('admin-screen').hidden = tab !== 'admin';
  document.getElementById('summary-screen').hidden = tab !== 'summary';
  document.getElementById('meetings-screen').hidden = tab !== 'meetings';
  document.querySelectorAll('.tab').forEach(function (button) { button.classList.toggle('active', button.dataset.tab === tab); });
}
function syncMeetingNote(event) {
  const text = (event.notes || '').trim();
  const existing = state.notes.find(function (note) { return note.eventId === event.id; });
  if (!text) {
    if (existing) state.notes = state.notes.filter(function (note) { return note.eventId !== event.id; });
    return;
  }
  if (existing) {
    existing.title = event.title;
    existing.text = text;
    existing.createdAt = event.date;
  } else {
    state.notes.unshift({ id: Date.now(), eventId: event.id, title: event.title, text: text, createdAt: event.date });
  }
}
function openTask(id) {
  const task = state.tasks.find(function (item) { return item.id === Number(id); });
  if (!task) return;
  openTaskId = task.id;
  taskEditor.elements.title.value = task.title || '';
  taskEditor.elements.description.value = task.description || '';
  taskEditor.elements.responsible.value = task.responsible || '';
  taskEditor.elements.column.value = task.column || 'todo';
  taskEditor.elements.priority.value = taskPriority(task);
  updateTaskEditorUi();
  taskDetail.hidden = false;
  taskEditor.elements.title.focus();
}
function openNewTask(column) {
  openTaskId = null;
  taskEditor.reset();
  taskEditor.elements.column.value = column || 'todo';
  taskEditor.elements.priority.value = 'medium';
  updateTaskEditorUi();
  taskDetail.hidden = false;
  taskEditor.elements.title.focus();
}
function updateTaskEditorUi() {
  const creating = !openTaskId;
  document.getElementById('task-editor-title').textContent = creating ? t('newTask') : t('edit');
  document.getElementById('save-task-detail').textContent = creating ? t('createTask') : t('saveChanges');
  document.getElementById('delete-open-task').hidden = creating;
}
function closeTaskDetail() {
  openTaskId = null;
  taskDetail.hidden = true;
}
function openNewNote() {
  openNoteId = null;
  noteEditor.reset();
  updateNoteEditorUi();
  noteDetail.hidden = false;
  noteEditor.elements.title.focus();
}
function openNote(id) {
  const note = state.notes.find(function (item) { return item.id === Number(id); });
  if (!note) return;
  openNoteId = note.id;
  noteEditor.elements.title.value = note.title || '';
  noteEditor.elements.text.value = note.text || '';
  updateNoteEditorUi();
  noteDetail.hidden = false;
  noteEditor.elements.title.focus();
}
function updateNoteEditorUi() {
  document.getElementById('note-editor-title').textContent = openNoteId ? t('edit') : t('newNote');
  document.getElementById('save-note-detail').textContent = t('saveNote');
  document.getElementById('delete-open-note').hidden = !openNoteId;
}
function closeNoteDetail() {
  openNoteId = null;
  noteDetail.hidden = true;
}
function nextMeetingTime() {
  const date = new Date();
  date.setSeconds(0, 0);
  date.setMinutes(Math.ceil(date.getMinutes() / 30) * 30);
  return eventDateInputValue(date);
}
function openNewEvent(startValue) {
  const start = startValue ? new Date(startValue) : new Date(nextMeetingTime());
  const end = new Date(start.getTime() + 60 * 60000);
  openEventId = null;
  eventEditor.reset();
  eventEditor.elements.date.value = eventDateInputValue(start);
  eventEditor.elements.end.value = eventDateInputValue(end);
  participantSearch.value = '';
  setSelectedParticipants([]);
  document.getElementById('delete-open-event').hidden = true;
  eventDetail.hidden = false;
  eventEditor.elements.title.focus();
}
function openEvent(id) {
  const event = state.events.find(function (item) { return item.id === Number(id); });
  if (!event) return;
  openEventId = event.id;
  eventEditor.elements.title.value = event.title || '';
  eventEditor.elements.date.value = event.date || eventDateInputValue(new Date());
  eventEditor.elements.end.value = eventDateInputValue(meetingEnd(event));
  participantSearch.value = '';
  const matchingIds = Array.isArray(event.participantIds) ? event.participantIds : participantsFor(event).map(function (name) {
    const person = state.people.find(function (item) { return item.name.toLocaleLowerCase() === name.toLocaleLowerCase(); });
    return person ? person.id : null;
  }).filter(Boolean);
  setSelectedParticipants(matchingIds);
  eventEditor.elements.notes.value = event.notes || '';
  document.getElementById('delete-open-event').hidden = false;
  eventDetail.hidden = false;
  eventEditor.elements.title.focus();
}
function closeEventDetail() {
  openEventId = null;
  eventDetail.hidden = true;
}
document.querySelectorAll('.close-detail, .cancel-detail').forEach(function (button) {
  button.addEventListener('click', closeTaskDetail);
});
document.querySelectorAll('.close-event-detail, .cancel-event-detail').forEach(function (button) {
  button.addEventListener('click', closeEventDetail);
});
document.querySelectorAll('.close-note-detail, .cancel-note-detail').forEach(function (button) {
  button.addEventListener('click', closeNoteDetail);
});
setupForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  const form = new FormData(setupForm);
  const login = form.get('login').trim();
  const password = form.get('password');
  if (password !== form.get('repeat')) {
    authMessage.textContent = t('passwordMismatch');
    return;
  }
  if (!supabaseClient) return;
  authMessage.textContent = '';
  const response = await supabaseClient.auth.signUp({ email: internalEmailForLogin(login), password: password, options: { data: { display_name: login } } });
  if (response.error) {
    authMessage.textContent = response.error.message;
    return;
  }
  if (!response.data.session) {
    authMessage.textContent = 'Акаунт створено. Тепер увійдіть за логіном і паролем.';
    setupForm.reset();
    setAuthMode('login');
    return;
  }
  await refreshAccounts();
  startSession(accountForUser(response.data.user));
  await hydrateDatabase();
  render();
});
loginForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  const form = new FormData(loginForm);
  if (!supabaseClient) return;
  authMessage.textContent = '';
  const response = await supabaseClient.auth.signInWithPassword({ email: internalEmailForLogin(form.get('login')), password: form.get('password') });
  if (response.error || !response.data.user) {
    authMessage.textContent = response.error ? response.error.message : t('invalidCredentials');
    return;
  }
  await refreshAccounts();
  startSession(accountForUser(response.data.user));
  await hydrateDatabase();
  render();
});
noteEditor.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = new FormData(noteEditor);
  const details = { title: form.get('title').trim(), text: form.get('text').trim() };
  if (openNoteId) {
    const current = state.notes.find(function (note) { return note.id === openNoteId; });
    state.notes = state.notes.map(function (note) { return note.id === openNoteId ? Object.assign({}, note, details) : note; });
    if (current && current.eventId) {
      state.events = state.events.map(function (meeting) { return meeting.id === current.eventId ? Object.assign({}, meeting, { title: details.title, notes: details.text }) : meeting; });
    }
  } else {
    state.notes.unshift(Object.assign({ id: Date.now(), createdAt: new Date().toISOString() }, details));
  }
  saveState();
  closeNoteDetail();
  render();
});
peopleForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = new FormData(peopleForm);
  const person = { name: form.get('name').trim(), email: form.get('email').trim(), role: form.get('role').trim() };
  if (peopleEditId) {
    state.people = state.people.map(function (item) { return item.id === peopleEditId ? Object.assign({ id: item.id }, person) : item; });
  } else {
    state.people.unshift(Object.assign({ id: Date.now() }, person));
  }
  peopleEditId = null;
  peopleForm.reset();
  saveState();
  render();
  peopleForm.elements.name.focus();
});
teamForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = new FormData(teamForm).get('name').trim();
  state.teams.unshift({ id: Date.now(), name: name, memberIds: [] });
  teamForm.reset();
  saveState();
  renderTeams();
  teamForm.elements.name.focus();
});
accountForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  if (!isAdmin() || !supabaseClient) return;
  const form = new FormData(accountForm);
  const login = form.get('login').trim();
  const previousSession = (await supabaseClient.auth.getSession()).data.session;
  const response = await supabaseClient.auth.signUp({ email: internalEmailForLogin(login), password: form.get('password'), options: { data: { display_name: login } } });
  if (response.error || !response.data.user) {
    accountForm.elements.login.setCustomValidity(response.error ? response.error.message : t('loginTaken'));
    accountForm.elements.login.reportValidity();
    accountForm.elements.login.setCustomValidity('');
    return;
  }
  if (previousSession) await supabaseClient.auth.setSession({ access_token: previousSession.access_token, refresh_token: previousSession.refresh_token });
  const roleResponse = await supabaseClient.from('profiles').update({ role: form.get('role') }).eq('id', response.data.user.id);
  if (roleResponse.error) {
    accountForm.elements.login.setCustomValidity(roleResponse.error.message);
    accountForm.elements.login.reportValidity();
    accountForm.elements.login.setCustomValidity('');
    return;
  }
  accountForm.reset();
  await refreshAccounts();
  renderAccounts();
});
taskEditor.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = new FormData(taskEditor);
  const details = { title: form.get('title').trim(), description: form.get('description').trim(), responsible: form.get('responsible').trim(), column: form.get('column'), priority: form.get('priority') };
  if (openTaskId) {
    state.tasks = state.tasks.map(function (task) {
      if (task.id !== openTaskId) return task;
      const completedAt = details.column === 'done' && task.column !== 'done' ? new Date().toISOString() : (details.column === 'done' ? task.completedAt : null);
      return Object.assign({}, task, details, { completedAt: completedAt });
    });
  } else {
    state.tasks.unshift(Object.assign({ id: Date.now(), createdAt: new Date().toISOString(), completedAt: details.column === 'done' ? new Date().toISOString() : null }, details));
  }
  saveState();
  closeTaskDetail();
  render();
});
eventEditor.addEventListener('submit', function (event) {
  event.preventDefault();
  const form = new FormData(eventEditor);
  const start = form.get('date');
  let end = form.get('end');
  if (new Date(end) <= new Date(start)) end = eventDateInputValue(new Date(new Date(start).getTime() + 60 * 60000));
  const details = { title: form.get('title').trim(), date: start, end: end, participantIds: selectedParticipantIds.slice(), notes: form.get('notes').trim() };
  let changedEvent;
  if (openEventId) {
    state.events = state.events.map(function (item) {
      if (item.id !== openEventId) return item;
      changedEvent = Object.assign({}, item, details);
      return changedEvent;
    });
  } else {
    changedEvent = Object.assign({ id: Date.now() }, details);
    state.events.unshift(changedEvent);
  }
  syncMeetingNote(changedEvent);
  saveState();
  closeEventDetail();
  render();
  if (changedEvent.notes) showTab('meetings');
});
document.addEventListener('click', async function (event) {
  const card = event.target.closest('.task-card');
  if (card && !event.target.closest('button, select')) {
    openTask(card.dataset.task);
    return;
  }
  const noteCard = event.target.closest('.note');
  if (noteCard && !event.target.closest('button')) {
    openNote(noteCard.dataset.note);
    return;
  }
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.authMode) {
    setAuthMode(button.dataset.authMode);
    return;
  }
  if (button.dataset.tab) showTab(button.dataset.tab);
  if (button.id === 'logout-button') {
    if (supabaseClient) await supabaseClient.auth.signOut();
    currentUser = null;
    showAuth();
    return;
  }
  if (button.dataset.editPerson) {
    const person = state.people.find(function (item) { return item.id === Number(button.dataset.editPerson); });
    if (!person) return;
    peopleEditId = person.id;
    peopleForm.elements.name.value = person.name || '';
    peopleForm.elements.email.value = person.email || '';
    peopleForm.elements.role.value = person.role || '';
    renderPeople();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  if (button.dataset.deletePerson) {
    const id = Number(button.dataset.deletePerson);
    state.people = state.people.filter(function (person) { return person.id !== id; });
    state.teams = state.teams.map(function (team) { return Object.assign({}, team, { memberIds: (team.memberIds || []).filter(function (memberId) { return Number(memberId) !== id; }) }); });
    state.events = state.events.map(function (meeting) { return Object.assign({}, meeting, { participantIds: (meeting.participantIds || []).filter(function (personId) { return Number(personId) !== id; }) }); });
    selectedParticipantIds = selectedParticipantIds.filter(function (personId) { return personId !== id; });
    saveState();
    render();
    renderParticipantPicker();
    return;
  }
  if (button.dataset.deleteTeam) {
    state.teams = state.teams.filter(function (team) { return team.id !== Number(button.dataset.deleteTeam); });
    saveState();
    renderTeams();
    return;
  }
  if (button.dataset.addTeamMember) {
    const teamId = Number(button.dataset.addTeamMember);
    const picker = document.querySelector('[data-team-picker="' + teamId + '"]');
    const personId = picker ? Number(picker.value) : 0;
    if (!personId) return;
    state.teams = state.teams.map(function (team) {
      return team.id === teamId ? Object.assign({}, team, { memberIds: Array.from(new Set((team.memberIds || []).map(Number).concat(personId))) }) : team;
    });
    saveState();
    renderTeams();
    return;
  }
  if (button.dataset.removeTeamMember) {
    const teamId = Number(button.dataset.removeTeamMember);
    const personId = Number(button.dataset.person);
    state.teams = state.teams.map(function (team) {
      return team.id === teamId ? Object.assign({}, team, { memberIds: (team.memberIds || []).filter(function (id) { return Number(id) !== personId; }) }) : team;
    });
    saveState();
    renderTeams();
    return;
  }
  if (button.dataset.addParticipant) {
    selectedParticipantIds.push(Number(button.dataset.addParticipant));
    participantSearch.value = '';
    setSelectedParticipants(selectedParticipantIds);
    participantSearch.focus();
    return;
  }
  if (button.dataset.removeParticipant) {
    setSelectedParticipants(selectedParticipantIds.filter(function (id) { return id !== Number(button.dataset.removeParticipant); }));
    return;
  }
  if (button.id === 'cancel-person-edit') {
    peopleEditId = null;
    peopleForm.reset();
    renderPeople();
    return;
  }
  if (button.id === 'new-task') { openNewTask(); return; }
  if (button.id === 'new-note') { openNewNote(); return; }
  if (button.dataset.addTo) { openNewTask(button.dataset.addTo); return; }
  if (button.dataset.taskPeriod) { setDatePreset('task', button.dataset.taskPeriod); return; }
  if (button.dataset.summaryPeriod) { setDatePreset('summary', button.dataset.summaryPeriod); return; }
  if (button.id === 'clear-filters') {
    taskSearch.value = '';
    statusFilter.value = '';
    responsibleFilter.value = '';
    priorityFilter.value = '';
    setDatePreset('task', 'all');
    return;
  }
  if (button.id === 'clear-summary-filters') {
    summaryDateMode.value = 'created';
    setDatePreset('summary', 'all');
    return;
  }
  if (button.dataset.openEvent) openEvent(button.dataset.openEvent);
  if (button.dataset.deleteTask) { state.tasks = state.tasks.filter(function (task) { return task.id !== Number(button.dataset.deleteTask); }); saveState(); render(); }
  if (button.dataset.deleteNote) {
    const note = state.notes.find(function (item) { return item.id === Number(button.dataset.deleteNote); });
    state.notes = state.notes.filter(function (item) { return item.id !== Number(button.dataset.deleteNote); });
    if (note && note.eventId) state.events = state.events.map(function (meeting) { return meeting.id === note.eventId ? Object.assign({}, meeting, { notes: '' }) : meeting; });
    saveState();
    render();
  }
  if (button.dataset.createTaskFromNote) {
    const note = state.notes.find(function (item) { return item.id === Number(button.dataset.createTaskFromNote); });
    if (note) {
      state.tasks.unshift({ id: Date.now(), title: note.title, description: note.text, responsible: '', priority: 'medium', column: 'todo', createdAt: new Date().toISOString() });
      state.notes = state.notes.filter(function (item) { return item.id !== note.id; });
      if (note.eventId) state.events = state.events.map(function (meeting) { return meeting.id === note.eventId ? Object.assign({}, meeting, { notes: '' }) : meeting; });
      saveState();
      render();
      showTab('board');
    }
  }
  if (button.id === 'new-meeting') openNewEvent();
  if (button.dataset.newEventTime) openNewEvent(button.dataset.newEventTime);
  if (button.dataset.newEventDay) openNewEvent(dateInputFor(dateFromKey(button.dataset.newEventDay), 9));
  if (button.dataset.jumpDate) { calendarCursor = startOfWeek(dateFromKey(button.dataset.jumpDate)); renderCalendar(); }
  if (button.id === 'previous-week') { calendarCursor.setDate(calendarCursor.getDate() - 7); renderCalendar(); }
  if (button.id === 'next-week') { calendarCursor.setDate(calendarCursor.getDate() + 7); renderCalendar(); }
  if (button.id === 'today-button') { calendarCursor = startOfWeek(new Date()); renderCalendar(); }
  if (button.classList.contains('close-detail') || button.classList.contains('cancel-detail')) closeTaskDetail();
  if (button.id === 'delete-open-task' && openTaskId) {
    state.tasks = state.tasks.filter(function (task) { return task.id !== openTaskId; });
    saveState();
    closeTaskDetail();
    render();
  }
  if (button.id === 'delete-open-event' && openEventId) {
    state.events = state.events.filter(function (meeting) { return meeting.id !== openEventId; });
    state.notes = state.notes.filter(function (note) { return note.eventId !== openEventId; });
    saveState();
    closeEventDetail();
    render();
  }
  if (button.id === 'delete-open-note' && openNoteId) {
    const note = state.notes.find(function (item) { return item.id === openNoteId; });
    state.notes = state.notes.filter(function (item) { return item.id !== openNoteId; });
    if (note && note.eventId) state.events = state.events.map(function (meeting) { return meeting.id === note.eventId ? Object.assign({}, meeting, { notes: '' }) : meeting; });
    saveState();
    closeNoteDetail();
    render();
  }
});
document.addEventListener('change', function (event) {
  if (event.target.dataset.move) moveTask(event.target.dataset.move, event.target.value);
});
languageSwitch.addEventListener('change', function () {
  language = languageSwitch.value === 'en' ? 'en' : 'uk';
  localStorage.setItem(LANGUAGE_KEY, language);
  applyLanguage();
  render();
});
responsibleFilter.addEventListener('change', renderBoard);
statusFilter.addEventListener('change', renderBoard);
priorityFilter.addEventListener('change', renderBoard);
taskSearch.addEventListener('input', renderBoard);
taskDateFrom.addEventListener('change', function () { setDatePreset('task', 'custom'); });
taskDateTo.addEventListener('change', function () { setDatePreset('task', 'custom'); });
summaryDateMode.addEventListener('change', renderSummary);
summaryDateFrom.addEventListener('change', function () { setDatePreset('summary', 'custom'); });
summaryDateTo.addEventListener('change', function () { setDatePreset('summary', 'custom'); });
peopleSearch.addEventListener('input', renderPeople);
participantSearch.addEventListener('focus', renderParticipantPicker);
participantSearch.addEventListener('input', renderParticipantPicker);
participantSearch.addEventListener('blur', function () {
  setTimeout(function () { participantSuggestions.hidden = true; }, 120);
});
taskDetail.addEventListener('click', function (event) { if (event.target === taskDetail) closeTaskDetail(); });
eventDetail.addEventListener('click', function (event) { if (event.target === eventDetail) closeEventDetail(); });
noteDetail.addEventListener('click', function (event) { if (event.target === noteDetail) closeNoteDetail(); });
document.addEventListener('keydown', function (event) { if (event.key === 'Escape') { if (!taskDetail.hidden) closeTaskDetail(); if (!eventDetail.hidden) closeEventDetail(); if (!noteDetail.hidden) closeNoteDetail(); } });
applyLanguage();
setInterval(updateSystemClock, 1000);
initializeAuth();
