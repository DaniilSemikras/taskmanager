const STORAGE_KEY = 'personal-trello-board-v1';
const LANGUAGE_KEY = 'personal-trello-language-v1';
const ACCOUNTS_KEY = 'personal-trello-accounts-v1';
const SESSION_KEY = 'personal-trello-session-v1';
const ACTIVE_TAB_KEY = 'personal-trello-active-tab-v1';
const SUPABASE_URL = 'https://nwannsutuahqvoptnlro.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Ny1CR7Kj7M4GEmJ_oTcEIA_Gjvn2FM_';
const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY) : null;
const translations = {
  uk: {
    locale: 'uk-UA', pageTitle: 'Моя дошка', brand: 'моя дошка', board: 'Дошка', calendar: 'Календар', afterMeeting: 'Нотатки',
    personalPlan: 'ОСОБИСТИЙ ПЛАН', myTasks: 'Мої завдання', boardHint: 'Додавай картки та перетягуй їх між колонками.', taskPlaceholder: 'Нове завдання — наприклад, оплатити рахунок', dataSaved: 'Збережено', dataSaving: 'Збереження…', dataBrowser: 'Збережено в браузері', dataUnavailable: 'Немає з’єднання з базою',
    todo: 'Треба зробити', doing: 'У процесі', done: 'Готово', responsible: 'Відповідальний', responsibles: 'Відповідальні', onlyMyTasks: 'Тільки мої', notifications: 'Сповіщення', markAllRead: 'Прочитати все', noNotifications: 'Нових сповіщень поки немає.', notificationMention: 'Вас відмітили у завданні', notificationStatus: 'Змінено статус завдання', violet: 'Фіолетовий', blue: 'Синій', green: 'Зелений', orange: 'Помаранчевий', pink: 'Рожевий',
    taskDescriptionPlaceholder: 'Опис завдання: що саме потрібно зробити?', addTask: 'Додати завдання', show: 'ПОКАЗАТИ', allTasks: 'Усі завдання', noResponsible: 'Без відповідального',
    myMeetings: 'МОЇ ЗУСТРІЧІ', calendarHint: 'Додавай зустрічі з датою і часом — вони одразу з’являться в календарі.', meetingTitle: 'Назва зустрічі', meetingNotesPlaceholder: 'Нотатки до зустрічі (необов’язково)', addMeeting: 'Додати зустріч', systemTime: 'Системний час', people: 'Учасники', peopleDirectory: 'БАЗА УЧАСНИКІВ', peopleHint: 'Зберігай контакти команди й швидко знаходь їх за ім’ям, поштою або роллю.', personNamePlaceholder: 'Ім’я та прізвище', emailPlaceholder: 'Пошта', rolePlaceholder: 'Роль або посада', phonePlaceholder: 'Телефон', addPerson: 'Додати учасника', savePerson: 'Зберегти учасника', peopleSearchPlaceholder: 'Пошук за ім’ям, поштою або роллю', noPeople: 'База учасників поки порожня. Додай перший контакт.', editPerson: 'Редагувати', deletePerson: 'Видалити', personOne: 'учасник', personFew: 'учасники', personMany: 'учасників', admin: 'Адмін', adminArea: 'АДМІН-ПАНЕЛЬ', teamManagement: 'Керування командами', teamManagementHint: 'Створюй команди та додавай до них учасників із бази.', teamNamePlaceholder: 'Назва команди', addTeam: 'Створити команду', deleteTeam: 'Видалити', addMember: 'Додати учасника', selectPerson: 'Обрати учасника', noTeams: 'Команд поки немає. Створи першу команду.', noTeamMembers: 'У цій команді поки немає учасників.', teamOne: 'команда', teamFew: 'команди', teamMany: 'команд', welcome: 'Моя дошка', loginHint: 'Увійдіть у свій простір.', login: 'Логін', password: 'Пароль', repeatPassword: 'Повторіть пароль', loginPlaceholder: 'Логін', passwordPlaceholder: 'Щонайменше 4 символи', createAdmin: 'Створити адміністратора', signIn: 'Увійти', signOut: 'Вийти', accessControl: 'КЕРУВАННЯ ДОСТУПОМ', accounts: 'Акаунти', addAccount: 'Створити акаунт', noLinkedPerson: 'Без привʼязки до учасника', member: 'Учасник', administrator: 'Адміністратор', invalidCredentials: 'Неправильний логін або пароль.', passwordMismatch: 'Паролі не збігаються.', loginTaken: 'Такий логін уже існує.', accountOne: 'акаунт', accountFew: 'акаунти', accountMany: 'акаунтів',
    personalNotes: 'ОСОБИСТІ НОТАТКИ', notesHint: 'Зберігай головне одразу після дзвінка або зустрічі.', meetingTitlePlaceholder: 'Наприклад, розмова з клієнтом', whatImportant: 'Що важливо запам’ятати', noteTitle: 'Назва нотатки', newNote: 'Нова нотатка', notePlaceholder: 'Рішення, ідеї, наступні кроки — пиши як зручно', saveNote: 'Зберегти нотатку',
    taskCard: 'КАРТКА ЗАВДАННЯ', edit: 'Редагування', close: 'Закрити', taskName: 'Назва завдання', description: 'Опис', taskDescPlaceholder: 'Що саме потрібно зробити?', deadline: 'Дедлайн', mentionPeople: 'Введіть @, щоб відмітити учасника', noMentionMatches: 'У команді нікого не знайдено', column: 'Колонка', cardColor: 'Колір картки', priority: 'Пріоритет', highPriority: 'Високий', mediumPriority: 'Середній', lowPriority: 'Низький', allPriorities: 'Усі пріоритети', notAssigned: 'Не призначено', cancel: 'Скасувати', saveChanges: 'Зберегти зміни', delete: 'Видалити',
    meetingCard: 'ЗУСТРІЧ', meetingDetails: 'Деталі зустрічі', meetingNotes: 'Нотатки зустрічі', dateTime: 'Дата й час', startTime: 'Початок', endTime: 'Завершення', participants: 'Учасники', participantsPlaceholder: 'Знайти за ім’ям або поштою', noParticipantsFound: 'Нікого не знайдено. Додай контакт у вкладці «Учасники».', today: 'Сьогодні', newMeeting: 'Нова зустріч', eventNotesPlaceholder: 'Пиши все важливе: рішення, ідеї, домовленості, наступні кроки.', meetingHint: 'Після завершення зустрічі для неї з’явиться місце у вкладці «Нотатки».', meetingNotePending: 'Зустріч завершена. Натисніть, щоб додати підсумки.', completeMeeting: 'Завершити зустріч', saveNotes: 'Зберегти зустріч',
    taskOne: 'завдання', taskFew: 'завдання', taskMany: 'завдань', noteOne: 'нотатка', noteFew: 'нотатки', noteMany: 'нотаток', eventOne: 'зустріч', eventFew: 'зустрічі', eventMany: 'зустрічей', of: 'з', from: 'Від', to: 'До', period: 'Період', allTime: 'Увесь час', last7Days: '7 днів', thisMonth: 'Місяць', customPeriod: 'Свій', createdDate: 'За датою створення', completedDate: 'За датою виконання', emptyColumn: 'Поки порожньо', noNotes: 'Нотаток поки немає. Збережи першу після зустрічі.', createTask: 'Створити завдання', newTask: 'Нове завдання', taskSearchPlaceholder: 'Пошук за назвою або описом', allColumns: 'Усі статуси', allColors: 'Усі кольори', clearFilters: 'Скинути', dropTaskHere: 'Відпустіть, щоб перенести сюди', summary: 'Зведення', workOverview: 'ЗВЕДЕННЯ РОБОТИ', summaryHeading: 'Хто що зробив', summaryHint: 'Дивись прогрес команди та список виконаних завдань.', byPerson: 'За учасниками', doneTasks: 'Виконані завдання', person: 'Учасник', total: 'Усього', completedList: 'Що вже зроблено', noCompletedTasks: 'Виконаних завдань поки немає.', moveTask: 'Перемістити завдання', deleteTask: 'Видалити завдання', deleteNote: 'Видалити нотатку', weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']
  },
  en: {
    locale: 'en-GB', pageTitle: 'My board', brand: 'my board', board: 'Board', calendar: 'Calendar', afterMeeting: 'Notes',
    personalPlan: 'PERSONAL PLAN', myTasks: 'My tasks', boardHint: 'Add cards and drag them between columns.', taskPlaceholder: 'New task — for example, pay the bill', dataSaved: 'Saved', dataSaving: 'Saving…', dataBrowser: 'Saved in browser', dataUnavailable: 'Database unavailable',
    todo: 'To do', doing: 'In progress', done: 'Done', responsible: 'Assignee', responsibles: 'Assignees', onlyMyTasks: 'Only mine', notifications: 'Notifications', markAllRead: 'Mark all as read', noNotifications: 'No new notifications yet.', notificationMention: 'You were mentioned in a task', notificationStatus: 'Task status was changed', violet: 'Violet', blue: 'Blue', green: 'Green', orange: 'Orange', pink: 'Pink',
    taskDescriptionPlaceholder: 'Task description: what needs to be done?', addTask: 'Add task', show: 'SHOW', allTasks: 'All tasks', noResponsible: 'No assignee',
    myMeetings: 'MY MEETINGS', calendarHint: 'Add meetings with date and time — they will appear in the calendar right away.', meetingTitle: 'Meeting title', meetingNotesPlaceholder: 'Meeting notes (optional)', addMeeting: 'Add meeting', systemTime: 'System time', people: 'People', peopleDirectory: 'PEOPLE DIRECTORY', peopleHint: 'Store team contacts and find them quickly by name, email, or role.', personNamePlaceholder: 'Full name', emailPlaceholder: 'Email', rolePlaceholder: 'Role or job title', phonePlaceholder: 'Phone', addPerson: 'Add person', savePerson: 'Save person', peopleSearchPlaceholder: 'Search by name, email, or role', noPeople: 'The people directory is empty. Add your first contact.', editPerson: 'Edit', deletePerson: 'Delete', personOne: 'person', personFew: 'people', personMany: 'people', admin: 'Admin', adminArea: 'ADMIN AREA', teamManagement: 'Team management', teamManagementHint: 'Create teams and add people from the directory.', teamNamePlaceholder: 'Team name', addTeam: 'Create team', deleteTeam: 'Delete', addMember: 'Add person', selectPerson: 'Choose a person', noTeams: 'There are no teams yet. Create the first one.', noTeamMembers: 'There are no people in this team yet.', teamOne: 'team', teamFew: 'teams', teamMany: 'teams', welcome: 'My board', loginHint: 'Sign in to your workspace.', login: 'Login', password: 'Password', repeatPassword: 'Repeat password', loginPlaceholder: 'Login', passwordPlaceholder: 'At least 4 characters', createAdmin: 'Create administrator', signIn: 'Sign in', signOut: 'Sign out', accessControl: 'ACCESS CONTROL', accounts: 'Accounts', addAccount: 'Create account', noLinkedPerson: 'No linked person', member: 'Member', administrator: 'Administrator', invalidCredentials: 'Incorrect login or password.', passwordMismatch: 'Passwords do not match.', loginTaken: 'This login already exists.', accountOne: 'account', accountFew: 'accounts', accountMany: 'accounts',
    personalNotes: 'PERSONAL NOTES', notesHint: 'Save the key points right after a call or meeting.', meetingTitlePlaceholder: 'For example, client call', whatImportant: 'What is important to remember', noteTitle: 'Note title', newNote: 'New note', notePlaceholder: 'Decisions, ideas, next steps — write however you like', saveNote: 'Save note',
    taskCard: 'TASK CARD', edit: 'Edit', close: 'Close', taskName: 'Task title', description: 'Description', taskDescPlaceholder: 'What exactly needs to be done?', deadline: 'Due date', mentionPeople: 'Type @ to mention a team member', noMentionMatches: 'No team members found', column: 'Column', cardColor: 'Card color', priority: 'Priority', highPriority: 'High', mediumPriority: 'Medium', lowPriority: 'Low', allPriorities: 'All priorities', notAssigned: 'Not assigned', cancel: 'Cancel', saveChanges: 'Save changes', delete: 'Delete',
    meetingCard: 'MEETING', meetingDetails: 'Meeting details', meetingNotes: 'Meeting notes', dateTime: 'Date and time', startTime: 'Starts', endTime: 'Ends', participants: 'Participants', participantsPlaceholder: 'Find by name or email', noParticipantsFound: 'No one found. Add a contact in the People tab.', today: 'Today', newMeeting: 'New meeting', eventNotesPlaceholder: 'Write down everything important: decisions, ideas, agreements, and next steps.', meetingHint: 'Once the meeting is completed, a note space will appear in the “Notes” tab.', meetingNotePending: 'Meeting completed. Tap to add the summary.', completeMeeting: 'Complete meeting', saveNotes: 'Save meeting',
    taskOne: 'task', taskFew: 'tasks', taskMany: 'tasks', noteOne: 'note', noteFew: 'notes', noteMany: 'notes', eventOne: 'meeting', eventFew: 'meetings', eventMany: 'meetings', of: 'of', from: 'From', to: 'To', period: 'Period', allTime: 'All time', last7Days: '7 days', thisMonth: 'This month', customPeriod: 'Custom', createdDate: 'Created date', completedDate: 'Completed date', emptyColumn: 'Nothing here yet', noNotes: 'No notes yet. Save your first one after a meeting.', createTask: 'Create task', newTask: 'New task', taskSearchPlaceholder: 'Search by title or description', allColumns: 'All statuses', allColors: 'All colors', clearFilters: 'Clear', dropTaskHere: 'Release to move here', summary: 'Summary', workOverview: 'WORK SUMMARY', summaryHeading: 'Who did what', summaryHint: 'See team progress and completed tasks.', byPerson: 'By person', doneTasks: 'Completed tasks', person: 'Person', total: 'Total', completedList: 'What is already done', noCompletedTasks: 'No completed tasks yet.', moveTask: 'Move task', deleteTask: 'Delete task', deleteNote: 'Delete note', weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }
};
Object.assign(translations.uk, {
  login: 'Логін', loginPlaceholder: 'Наприклад, user123', passwordPlaceholder: 'Щонайменше 8 символів', createAdmin: 'Створити акаунт', register: 'Реєстрація', registerHint: 'Створіть свій акаунт.', noMeetingsDay: 'На цей день зустрічей немає.'
});
Object.assign(translations.en, {
  login: 'Login', loginPlaceholder: 'For example, user123', passwordPlaceholder: 'At least 8 characters', createAdmin: 'Create account', register: 'Register', registerHint: 'Create your account.', noMeetingsDay: 'There are no meetings on this day.'
});
Object.assign(translations.uk, {
  team: 'Команда', noTeam: 'Без команди', accountRole: 'Роль', accountAccessHint: 'Призначай роль та команду користувача.', saveAccess: 'Зберегти доступ', teamCalendar: 'Календар команди', meetingTeamHint: 'Учасники команди бачать цю зустріч у календарі.', accessSaved: 'Доступ оновлено', noCalendarTeam: 'Щоб створювати зустрічі, попросіть адміністратора призначити вам команду.'
});
Object.assign(translations.en, {
  team: 'Team', noTeam: 'No team', accountRole: 'Role', accountAccessHint: 'Assign a role and team to a user.', saveAccess: 'Save access', teamCalendar: 'Team calendar', meetingTeamHint: 'Everyone on this team can see the meeting in their calendar.', accessSaved: 'Access updated', noCalendarTeam: 'Ask an administrator to assign you to a team before creating meetings.'
});
Object.assign(translations.uk, {
  myTeam: 'Моя команда', teamViewHint: 'Тут лише учасники вашої команди та їхні контакти.', teamMembers: 'учасники команди', noTeamAssigned: 'Команду ще не призначено', noTeamAssignedHint: 'Попросіть адміністратора додати вас до команди.'
});
Object.assign(translations.en, {
  myTeam: 'My team', teamViewHint: 'Only your team members and their contacts are shown here.', teamMembers: 'team members', noTeamAssigned: 'No team assigned yet', noTeamAssignedHint: 'Ask an administrator to add you to a team.'
});
Object.assign(translations.uk, {
  analyticsProgress: 'Прогрес', completionRate: 'Виконано', activeTasks: 'У роботі', highPriorityTasks: 'Високий пріоритет', statusDistribution: 'Розподіл за статусами', taskActivity: 'Активність за 7 днів', createdTasks: 'Створено', closedTasks: 'Завершено', analyticsHint: 'Дані оновлюються разом із фільтром періоду.', unassignedTasks: 'Нерозподілені завдання'
});
Object.assign(translations.en, {
  analyticsProgress: 'Progress', completionRate: 'Completed', activeTasks: 'In progress', highPriorityTasks: 'High priority', statusDistribution: 'Status distribution', taskActivity: 'Activity over 7 days', createdTasks: 'Created', closedTasks: 'Completed', analyticsHint: 'Charts update with the selected date filter.', unassignedTasks: 'Unassigned tasks'
});
const columns = [
  { id: 'todo', titleKey: 'unassignedTasks' },
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
const peopleTab = document.getElementById('people-tab');
const teamTab = document.getElementById('team-tab');
const myTeamName = document.getElementById('my-team-name');
const myTeamHint = document.getElementById('my-team-hint');
const myTeamTotal = document.getElementById('my-team-total');
const myTeamMembers = document.getElementById('my-team-members');
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
const taskMentionSuggestions = document.getElementById('task-mention-suggestions');
const taskResponsibleOptions = document.getElementById('task-responsible-options');
const notificationButton = document.getElementById('notification-button');
const notificationsPanel = document.getElementById('notifications-panel');
const notificationsList = document.getElementById('notifications-list');
const notificationCount = document.getElementById('notification-count');
const noteEditor = document.getElementById('note-editor');
const noteDetail = document.getElementById('note-detail');
const eventEditor = document.getElementById('event-editor');
const eventDetail = document.getElementById('event-detail');
const miniCalendarGrid = document.getElementById('mini-calendar-grid');
const weekHeader = document.getElementById('week-header');
const timeAxis = document.getElementById('time-axis');
const weekGrid = document.getElementById('week-grid');
const mobileTeamsCalendar = document.getElementById('mobile-teams-calendar');
const participantSearch = document.getElementById('participant-search');
const participantTags = document.getElementById('participant-tags');
const participantSuggestions = document.getElementById('participant-suggestions');
const meetingTeam = document.getElementById('meeting-team');
const summaryStats = document.getElementById('summary-stats');
const summaryByPerson = document.getElementById('summary-by-person');
const completedTasks = document.getElementById('completed-tasks');
const summaryCompletionChart = document.getElementById('summary-completion-chart');
const summaryCompletionLabel = document.getElementById('summary-completion-label');
const summaryCompletionLegend = document.getElementById('summary-completion-legend');
const summaryStatusChart = document.getElementById('summary-status-chart');
const summaryActivityChart = document.getElementById('summary-activity-chart');
const summaryDateMode = document.getElementById('summary-date-mode');
const summaryDateFrom = document.getElementById('summary-date-from');
const summaryDateTo = document.getElementById('summary-date-to');
const summaryCustomRange = document.getElementById('summary-custom-range');
const languageSwitch = document.getElementById('language-switch');
const saveStatus = document.getElementById('save-status');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const appbarMenu = document.getElementById('appbar-menu');
let dragId = null;
let openTaskId = null;
let openEventId = null;
let openNoteId = null;
let onlyMyTasks = false;
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
let databaseWriteQueue = Promise.resolve();
let saveToastTimer = null;
let saveNotificationsEnabled = false;
let archiveCheckTimer = null;
let meetingEndTimer = null;
let calendarCursor = startOfWeek(new Date());
let selectedCalendarDay = dateKey(new Date());
let calendarEvents = [];
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
function saveState(immediately) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (immediately) {
    clearTimeout(databaseSaveTimer);
    return queueDatabaseSave();
  }
  scheduleDatabaseSave();
  return Promise.resolve();
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
  const deletedEventIds = Array.from(new Set((Array.isArray(source.deletedEventIds) ? source.deletedEventIds : []).map(String).filter(Boolean)));
  return {
    tasks: (Array.isArray(source.tasks) ? source.tasks : []).map(function (task) {
      const responsibles = normalizeResponsibleNames(Array.isArray(task.responsibles) && task.responsibles.length ? task.responsibles : task.responsible);
      return Object.assign({}, task, { completedAt: task.completedAt || null, archivedAt: task.archivedAt || null, dueDate: typeof task.dueDate === 'string' ? task.dueDate : '', responsibles: responsibles, responsible: responsibles[0] || '', mentions: Array.from(new Set((Array.isArray(task.mentions) ? task.mentions : []).map(String).map(function (name) { return name.trim(); }).filter(Boolean))) });
    }),
    notes: (Array.isArray(source.notes) ? source.notes : []).filter(function (note) { return !note.eventId || !deletedEventIds.includes(String(note.eventId)); }),
    events: (Array.isArray(source.events) ? source.events : []).filter(function (event) { return !deletedEventIds.includes(String(event.id)); }),
    completedMeetingIds: Array.from(new Set((Array.isArray(source.completedMeetingIds) ? source.completedMeetingIds : []).map(String).filter(Boolean))),
    notifications: (Array.isArray(source.notifications) ? source.notifications : []).filter(function (notification) { return notification && notification.id && notification.recipientId; }).map(function (notification) {
      return { id: String(notification.id), recipientId: String(notification.recipientId), type: notification.type === 'mention' ? 'mention' : 'status', taskId: Number(notification.taskId) || 0, taskTitle: String(notification.taskTitle || ''), fromUser: String(notification.fromUser || ''), createdAt: notification.createdAt || new Date().toISOString(), read: Boolean(notification.read) };
    }).slice(0, 160),
    deletedEventIds: deletedEventIds,
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
function showSaveToast(key) {
  if (!saveStatus) return;
  clearTimeout(saveToastTimer);
  saveStatus.classList.remove('toast-visible');
  requestAnimationFrame(function () { saveStatus.classList.add('toast-visible'); });
  const duration = key === 'dataUnavailable' ? 6500 : (key === 'dataSaving' ? 3000 : 3600);
  saveToastTimer = setTimeout(function () { saveStatus.classList.remove('toast-visible'); }, duration);
}
function enableSaveNotifications() {
  saveNotificationsEnabled = true;
  if (saveStatusKey === 'dataUnavailable') showSaveToast(saveStatusKey);
}
function setSaveStatus(key) {
  const changed = saveStatusKey !== key;
  saveStatusKey = key;
  updateSaveStatus();
  if (saveNotificationsEnabled && (changed || key === 'dataSaving' || key === 'dataSaved' || key === 'accessSaved')) showSaveToast(key);
}
function hasStoredContent() {
  return Boolean(accounts.length || state.tasks.length || state.notes.length || state.notifications.length || calendarEvents.length || state.people.length || state.teams.length);
}
async function saveDatabaseNow(snapshot) {
  if (!supabaseClient || !currentUser) {
    setSaveStatus('dataUnavailable');
    return;
  }
  setSaveStatus('dataSaving');
  try {
    const response = await supabaseClient.from('workspace_state').update({ state: snapshot }).eq('id', 'main');
    if (response.error) throw response.error;
    setSaveStatus('dataSaved');
    return true;
  } catch {
    setSaveStatus('dataUnavailable');
    return false;
  }
}
function queueDatabaseSave() {
  if (!supabaseClient || !currentUser) {
    setSaveStatus('dataUnavailable');
    return Promise.resolve();
  }
  const snapshot = JSON.parse(JSON.stringify(state));
  databaseWriteQueue = databaseWriteQueue.catch(function () {}).then(function () { return saveDatabaseNow(snapshot); });
  return databaseWriteQueue;
}
function scheduleDatabaseSave() {
  if (!supabaseClient || !currentUser) {
    setSaveStatus('dataUnavailable');
    return;
  }
  clearTimeout(databaseSaveTimer);
  setSaveStatus('dataSaving');
  databaseSaveTimer = setTimeout(function () { queueDatabaseSave(); }, 250);
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
  const response = await supabaseClient.from('profiles').select('id, email, display_name, role, team_id, person_id, created_at').order('created_at');
  if (response.error) return [];
  accounts = response.data.map(function (profile) {
    return { id: profile.id, login: profile.display_name || profile.email.split('@')[0], email: profile.email, role: profile.role, teamId: profile.team_id || '', personId: profile.person_id || '' };
  });
  return accounts;
}
function accountForUser(user) {
  const account = accounts.find(function (item) { return item.id === user.id; });
  return account || { id: user.id, login: user.user_metadata && user.user_metadata.display_name || user.email.split('@')[0], email: user.email, role: 'member', teamId: '', personId: '' };
}
function internalEmailForLogin(login) {
  return login.trim().toLocaleLowerCase() + '@taskmanager.local';
}
function isAdmin() {
  return Boolean(currentUser && currentUser.role === 'admin');
}
function currentTeamId() {
  return currentUser && currentUser.teamId ? String(currentUser.teamId) : '';
}
function canCreateMeetings() {
  return isAdmin() || Boolean(currentTeamId());
}
function canEditCalendarEvent(event) {
  return Boolean(event && (isAdmin() || (currentTeamId() && String(event.teamId || '') === currentTeamId())));
}
function teamForId(id) {
  return state.teams.find(function (team) { return String(team.id) === String(id || ''); });
}
function teamMembersFor(teamId) {
  const team = teamForId(teamId);
  if (!team) return [];
  const members = new Map();
  function addMember(person, key) {
    const name = String(person && (person.name || person.login || person.email) || '').trim();
    if (!name || members.has(key)) return;
    members.set(key, { id: person.id, key: key, name: name, email: person.email || '', role: person.role || '' });
  }
  (Array.isArray(team.memberIds) ? team.memberIds : []).map(Number).forEach(function (personId) {
    const person = state.people.find(function (item) { return Number(item.id) === personId; });
    if (person) addMember(person, 'person:' + person.id);
  });
  accounts.filter(function (account) { return String(account.teamId || '') === String(team.id); }).forEach(function (account) {
    const person = state.people.find(function (item) { return String(item.id) === String(account.personId || ''); });
    if (person) {
      addMember(person, 'person:' + person.id);
      return;
    }
    addMember({ id: account.id, name: account.login, email: account.email, role: account.role === 'admin' ? t('administrator') : t('member') }, 'account:' + account.id);
  });
  return Array.from(members.values()).sort(function (a, b) { return a.name.localeCompare(b.name, t('locale')); });
}
function taskResponsibleMembers() {
  const teamIds = isAdmin() ? state.teams.map(function (team) { return team.id; }) : [currentTeamId()];
  const members = new Map();
  teamIds.filter(Boolean).forEach(function (teamId) {
    teamMembersFor(teamId).forEach(function (member) { members.set(member.key, member); });
  });
  return Array.from(members.values()).sort(function (a, b) { return a.name.localeCompare(b.name, t('locale')); });
}
function normalizeResponsibleNames(value) {
  return Array.from(new Set((Array.isArray(value) ? value : [value]).filter(function (name) { return name !== undefined && name !== null; }).map(String).map(function (name) { return name.trim(); }).filter(Boolean)));
}
function taskResponsibleNames(task) {
  return normalizeResponsibleNames(Array.isArray(task && task.responsibles) && task.responsibles.length ? task.responsibles : task && task.responsible);
}
function currentUserResponsibleNames() {
  if (!currentUser) return [];
  const linkedPerson = state.people.find(function (person) { return String(person.id) === String(currentUser.personId || ''); });
  return normalizeResponsibleNames([linkedPerson && linkedPerson.name, currentUser.login]);
}
function accountIdsForResponsibleNames(names) {
  const targetNames = normalizeResponsibleNames(names).map(function (name) { return name.toLocaleLowerCase(); });
  if (!targetNames.length) return [];
  return accounts.filter(function (account) {
    const linkedPerson = state.people.find(function (person) { return String(person.id) === String(account.personId || ''); });
    return targetNames.includes(String(account.login || '').toLocaleLowerCase()) || Boolean(linkedPerson && targetNames.includes(String(linkedPerson.name || '').toLocaleLowerCase()));
  }).map(function (account) { return String(account.id); });
}
function addTaskNotifications(type, task, recipientNames) {
  if (!currentUser || !task) return;
  const recipients = Array.from(new Set(accountIdsForResponsibleNames(recipientNames))).filter(function (id) { return id !== String(currentUser.id); });
  if (!recipients.length) return;
  const createdAt = new Date().toISOString();
  const additions = recipients.map(function (recipientId, index) {
    return { id: String(Date.now()) + '-' + type + '-' + index + '-' + recipientId, recipientId: recipientId, type: type === 'mention' ? 'mention' : 'status', taskId: Number(task.id) || 0, taskTitle: task.title || '', fromUser: currentUser.login || '', createdAt: createdAt, read: false };
  });
  state.notifications = additions.concat(state.notifications || []).slice(0, 160);
}
function currentUserNotifications() {
  if (!currentUser) return [];
  return (state.notifications || []).filter(function (notification) { return notification.recipientId === String(currentUser.id); }).sort(function (a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });
}
function renderNotifications() {
  if (!notificationsList || !notificationCount) return;
  const notifications = currentUserNotifications();
  const unread = notifications.filter(function (notification) { return !notification.read; }).length;
  notificationCount.hidden = unread === 0;
  notificationCount.textContent = unread > 99 ? '99+' : String(unread);
  const markReadButton = document.getElementById('mark-notifications-read');
  if (markReadButton) markReadButton.hidden = unread === 0;
  notificationsList.innerHTML = notifications.length ? notifications.slice(0, 30).map(function (notification) {
    const title = t(notification.type === 'mention' ? 'notificationMention' : 'notificationStatus');
    const author = notification.fromUser ? '<small>' + escapeHtml(notification.fromUser) + ' · ' + escapeHtml(dateLabel(notification.createdAt)) + '</small>' : '<small>' + escapeHtml(dateLabel(notification.createdAt)) + '</small>';
    return '<article class="notification-item ' + (notification.read ? 'read' : 'unread') + '"><strong>' + escapeHtml(title) + '</strong><p>' + escapeHtml(notification.taskTitle) + '</p>' + author + '</article>';
  }).join('') : '<p class="notifications-empty">' + t('noNotifications') + '</p>';
}
function setNotificationsOpen(open) {
  if (!notificationsPanel || !notificationButton) return;
  notificationsPanel.hidden = !open;
  notificationButton.setAttribute('aria-expanded', String(Boolean(open)));
}
function markCurrentNotificationsRead() {
  if (!currentUser) return;
  const recipientId = String(currentUser.id);
  state.notifications = (state.notifications || []).map(function (notification) {
    return notification.recipientId === recipientId ? Object.assign({}, notification, { read: true }) : notification;
  });
  saveState();
  renderNotifications();
}
function renderTaskResponsibleOptions(selectedNames) {
  if (!taskResponsibleOptions) return;
  const selected = normalizeResponsibleNames(selectedNames);
  const people = taskResponsibleMembers();
  const names = Array.from(new Set(people.map(function (person) { return person.name; }).concat(selected)));
  taskResponsibleOptions.innerHTML = names.length ? names.map(function (name) {
    return '<label class="responsible-option"><input name="responsibles" type="checkbox" value="' + escapeHtml(name) + '"' + (selected.includes(name) ? ' checked' : '') + '><span>' + escapeHtml(name) + '</span></label>';
  }).join('') : '<span class="responsible-empty">' + t('noTeamMembers') + '</span>';
}
function taskMentionNames(task) {
  return Array.from(new Set((Array.isArray(task.mentions) ? task.mentions : []).map(String).map(function (name) { return name.trim(); }).filter(Boolean)));
}
function extractTaskMentions(description) {
  const text = String(description || '').toLocaleLowerCase();
  return taskResponsibleMembers().map(function (member) { return member.name; }).filter(function (name) {
    const mention = '@' + name.toLocaleLowerCase();
    let position = text.indexOf(mention);
    while (position !== -1) {
      const before = position === 0 ? '' : text[position - 1];
      const after = text[position + mention.length] || '';
      if ((!before || /\s/.test(before)) && (!after || /[\s.,!?:;)]/.test(after))) return true;
      position = text.indexOf(mention, position + mention.length);
    }
    return false;
  });
}
function taskMentionContext() {
  const description = taskEditor && taskEditor.elements.description;
  if (!description || typeof description.selectionStart !== 'number') return null;
  const before = description.value.slice(0, description.selectionStart);
  const match = before.match(/(?:^|\s)@([^\n@]*)$/);
  if (!match) return null;
  return { start: before.length - match[1].length - 1, end: description.selectionStart, query: match[1].trim() };
}
function hideTaskMentionSuggestions() {
  if (!taskMentionSuggestions) return;
  taskMentionSuggestions.hidden = true;
  taskMentionSuggestions.innerHTML = '';
}
function renderTaskMentionSuggestions() {
  const context = taskMentionContext();
  if (!context || !taskMentionSuggestions) {
    hideTaskMentionSuggestions();
    return;
  }
  const query = context.query.toLocaleLowerCase();
  const people = taskResponsibleMembers().filter(function (person) { return person.name.toLocaleLowerCase().includes(query); });
  taskMentionSuggestions.hidden = false;
  taskMentionSuggestions.innerHTML = people.length ? people.map(function (person) {
    const details = person.email ? '<small>' + escapeHtml(person.email) + '</small>' : '';
    return '<button type="button" role="option" data-task-mention="' + escapeHtml(person.name) + '"><b>@' + escapeHtml(person.name) + '</b>' + details + '</button>';
  }).join('') : '<p>' + t('noMentionMatches') + '</p>';
}
function insertTaskMention(name) {
  const context = taskMentionContext();
  const description = taskEditor && taskEditor.elements.description;
  if (!context || !description) return;
  const mention = '@' + name + ' ';
  description.value = description.value.slice(0, context.start) + mention + description.value.slice(context.end);
  const caret = context.start + mention.length;
  description.focus();
  description.setSelectionRange(caret, caret);
  hideTaskMentionSuggestions();
}
function teamName(id) {
  const team = teamForId(id);
  return team ? team.name : t('noTeam');
}
function calendarEventFromRow(row) {
  return { id: Number(row.id), title: row.title || '', date: String(row.starts_at || '').slice(0, 16), end: String(row.ends_at || '').slice(0, 16), notes: row.notes || '', teamId: row.team_id || '', participantIds: (Array.isArray(row.participant_ids) ? row.participant_ids : []).map(Number), createdBy: row.created_by || '' };
}
function calendarEventToRow(event) {
  const stored = calendarEvents.find(function (item) { return item.id === Number(event.id); });
  return { id: Number(event.id), title: event.title, starts_at: event.date, ends_at: event.end, notes: event.notes || '', team_id: event.teamId || null, participant_ids: (event.participantIds || []).map(String), created_by: event.createdBy || (stored && stored.createdBy) || currentUser.id };
}
async function hydrateCalendarEvents() {
  if (!supabaseClient || !currentUser) {
    calendarEvents = [];
    return false;
  }
  const response = await supabaseClient.from('calendar_events').select('id, title, starts_at, ends_at, notes, team_id, participant_ids, created_by').order('starts_at');
  if (response.error) {
    setSaveStatus('dataUnavailable');
    return false;
  }
  calendarEvents = response.data.map(calendarEventFromRow);
  return true;
}
async function hydrateWorkspace() {
  await hydrateDatabase();
  await hydrateCalendarEvents();
}
async function saveCalendarEvent(event) {
  if (!supabaseClient || !currentUser) return false;
  setSaveStatus('dataSaving');
  const response = await supabaseClient.from('calendar_events').upsert(calendarEventToRow(event));
  if (response.error) {
    setSaveStatus('dataUnavailable');
    return false;
  }
  const index = calendarEvents.findIndex(function (item) { return item.id === event.id; });
  if (index === -1) calendarEvents.unshift(event); else calendarEvents[index] = event;
  setSaveStatus('dataSaved');
  return true;
}
async function removeCalendarEvent(id) {
  if (!supabaseClient || !currentUser) return false;
  setSaveStatus('dataSaving');
  const response = await supabaseClient.from('calendar_events').delete().eq('id', Number(id));
  if (response.error) {
    setSaveStatus('dataUnavailable');
    return false;
  }
  calendarEvents = calendarEvents.filter(function (event) { return event.id !== Number(id); });
  state.completedMeetingIds = (state.completedMeetingIds || []).filter(function (eventId) { return String(eventId) !== String(id); });
  saveState();
  setSaveStatus('dataSaved');
  return true;
}
function teamOptions(selectedId, includeEmpty) {
  const selected = String(selectedId || '');
  const empty = includeEmpty ? '<option value="">' + t('noTeam') + '</option>' : '';
  return empty + state.teams.map(function (team) {
    return '<option value="' + escapeHtml(String(team.id)) + '"' + (String(team.id) === selected ? ' selected' : '') + '>' + escapeHtml(team.name) + '</option>';
  }).join('');
}
function renderMeetingTeamPicker(selectedId) {
  if (!meetingTeam) return;
  const ownTeam = currentTeamId();
  const selected = isAdmin() ? String(selectedId || '') : String(selectedId || ownTeam);
  if (isAdmin()) {
    meetingTeam.innerHTML = teamOptions(selected, true);
  } else {
    const team = teamForId(selected) || teamForId(ownTeam);
    meetingTeam.innerHTML = team ? '<option value="' + escapeHtml(String(team.id)) + '">' + escapeHtml(team.name) + '</option>' : '<option value="">' + t('noTeam') + '</option>';
  }
  meetingTeam.value = selected;
  meetingTeam.disabled = !isAdmin();
}
function updateEventEditorAccess(calendarEvent) {
  const editable = !calendarEvent || canEditCalendarEvent(calendarEvent);
  eventEditor.querySelectorAll('input, textarea, select').forEach(function (control) {
    if (control.name === 'participantIds') return;
    control.disabled = !editable || (control === meetingTeam && !isAdmin());
  });
  eventEditor.querySelector('.save-detail').disabled = !editable;
  document.getElementById('delete-open-event').hidden = !calendarEvent || !editable;
  document.getElementById('complete-open-event').hidden = !calendarEvent || !editable || meetingHasEnded(calendarEvent);
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
}
function startSession(account) {
  currentUser = account;
  saveNotificationsEnabled = false;
  onlyMyTasks = false;
  authScreen.hidden = true;
  appShell.hidden = false;
  updateAccessUi();
  showTab(savedTabForCurrentUser());
  render();
}
function updateAccessUi() {
  document.getElementById('current-user').textContent = currentUser ? currentUser.login : '';
  document.getElementById('admin-tab').hidden = !isAdmin();
  peopleTab.hidden = true;
  teamTab.hidden = isAdmin();
  if (isAdmin() && (!document.getElementById('people-screen').hidden || !document.getElementById('team-screen').hidden)) showTab('admin');
  if (!isAdmin() && (!document.getElementById('admin-screen').hidden || !document.getElementById('people-screen').hidden)) showTab('team');
}
function setMobileMenu(open) {
  if (!mobileMenuToggle || !appbarMenu) return;
  const isOpen = Boolean(open);
  appbarMenu.classList.toggle('open', isOpen);
  mobileMenuToggle.classList.toggle('is-open', isOpen);
  mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
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
  await hydrateWorkspace();
  render();
  enableSaveNotifications();
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
function taskDeadlineLabel(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value || '')) return '';
  const date = new Date(value + 'T00:00:00');
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat(t('locale'), { day: 'numeric', month: 'short' }).format(date);
}
function taskDeadlineState(task) {
  if (!task.dueDate || task.column === 'done') return '';
  const today = eventDateInputValue(new Date()).slice(0, 10);
  return task.dueDate < today ? ' overdue' : task.dueDate === today ? ' today' : '';
}
function taskMarkup(task) {
  const priority = taskPriority(task);
  const completed = task.column === 'done';
  const description = task.description ? '<p class="task-description">' + escapeHtml(task.description) + '</p>' : '';
  const deadlineLabel = taskDeadlineLabel(task.dueDate);
  const deadline = deadlineLabel ? '<span class="task-deadline' + taskDeadlineState(task) + '">◷ ' + escapeHtml(deadlineLabel) + '</span>' : '';
  const responsibles = taskResponsibleNames(task);
  const assignee = responsibles.length ? responsibles.map(function (name) { return '<span class="assignee">' + escapeHtml(name) + '</span>'; }).join('') : '<span class="assignee empty">' + t('notAssigned') + '</span>';
  const mentions = taskMentionNames(task);
  const mentionMarkup = mentions.length ? '<div class="task-mentions">' + mentions.map(function (name) { return '<span>@' + escapeHtml(name) + '</span>'; }).join('') + '</div>' : '';
  const details = completed ? '' : description + deadline + mentionMarkup + '<div class="card-meta">' + assignee + '</div><footer class="task-footer"><select class="move-select" data-move="' + task.id + '" aria-label="' + t('moveTask') + '">' + options(task.column) + '</select><button class="delete" data-delete-task="' + task.id + '" aria-label="' + t('deleteTask') + '">×</button></footer>';
  return '<article class="task-card' + (completed ? ' completed-card' : '') + ' priority-' + priority + '" draggable="true" data-task="' + task.id + '"><h3>' + escapeHtml(task.title) + '</h3>' + details + '</article>';
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
  const ownResponsibleNames = currentUserResponsibleNames();
  const activeTaskCount = state.tasks.filter(function (task) { return !task.archivedAt; }).length;
  const filteredTasks = state.tasks.filter(function (task) {
    if (task.archivedAt) return false;
    const responsibles = taskResponsibleNames(task);
    const matchesResponsible = !responsible || (responsible === '__none__' ? !responsibles.length : responsibles.includes(responsible));
    const matchesOnlyMine = !onlyMyTasks || responsibles.some(function (name) { return ownResponsibleNames.includes(name); });
    const matchesStatus = !status || task.column === status;
    const matchesPriority = !priority || taskPriority(task) === priority;
    const searchable = (task.title + ' ' + (task.description || '') + ' ' + responsibles.join(' ')).toLocaleLowerCase();
    return matchesResponsible && matchesOnlyMine && matchesStatus && matchesPriority && isDateInRange(task.createdAt, from, to) && (!search || searchable.includes(search));
  });
  board.innerHTML = columns.map(function (column) {
    const cards = filteredTasks.filter(function (task) { return task.column === column.id; }).sort(function (a, b) { return priorityRank(a) - priorityRank(b) || new Date(b.createdAt || 0) - new Date(a.createdAt || 0); });
    const inner = cards.length ? cards.map(taskMarkup).join('') : '<div class="empty-column">' + t('emptyColumn') + '</div>';
    return '<section class="column" data-column="' + column.id + '"><header class="column-head"><h2>' + t(column.titleKey) + ' <span>' + cards.length + '</span></h2><button type="button" data-add-to="' + column.id + '" aria-label="' + t('addTask') + '">＋</button></header><div class="drop-hint">⇣ ' + t('dropTaskHere') + '</div><div class="column-cards" data-dropzone="' + column.id + '">' + inner + '</div></section>';
  }).join('');
  const shown = filteredTasks.length;
  const onlyMyTasksButton = document.getElementById('only-my-tasks');
  if (onlyMyTasksButton) {
    onlyMyTasksButton.classList.toggle('active', onlyMyTasks);
    onlyMyTasksButton.setAttribute('aria-pressed', String(onlyMyTasks));
  }
  const hasFilters = responsible || status || priority || search || from || to || onlyMyTasks;
  document.getElementById('task-count').textContent = hasFilters ? shown + ' ' + t('of') + ' ' + activeTaskCount : activeTaskCount + plural(activeTaskCount, t('taskOne'), t('taskFew'), t('taskMany'));
  bindDragAndDrop();
}
function renderResponsibleFilter() {
  const previous = responsibleFilter.value;
  const people = Array.from(new Set(taskResponsibleMembers().map(function (person) { return person.name; }))).sort(function (a, b) { return a.localeCompare(b, t('locale')); });
  responsibleFilter.innerHTML = '<option value="">' + t('allTasks') + '</option><option value="__none__">' + t('noResponsible') + '</option>' + people.map(function (person) { return '<option value="' + escapeHtml(person) + '">' + escapeHtml(person) + '</option>'; }).join('');
  if (people.includes(previous) || previous === '__none__') responsibleFilter.value = previous;
}
function notesForView() {
  const personalNotes = state.notes.filter(function (note) { return !note.eventId; });
  const meetingNotes = calendarEvents.filter(function (event) { return Boolean((event.notes || '').trim()) || meetingHasEnded(event); }).map(function (event) {
    return { id: 'event-' + event.id, eventId: event.id, title: event.title, text: event.notes, createdAt: event.date, calendarEvent: true };
  });
  return personalNotes.concat(meetingNotes).sort(function (a, b) { return new Date(b.createdAt || 0) - new Date(a.createdAt || 0); });
}
function calendarEventIdFromNoteId(id) {
  const match = /^event-(\d+)$/.exec(String(id || ''));
  return match ? Number(match[1]) : null;
}
function renderNotes() {
  const visibleNotes = notesForView();
  document.getElementById('meeting-count').textContent = visibleNotes.length;
  document.getElementById('notes-count').textContent = visibleNotes.length + plural(visibleNotes.length, t('noteOne'), t('noteFew'), t('noteMany'));
  if (!visibleNotes.length) {
    noteList.innerHTML = '<div class="empty"><span>✦</span>' + t('noNotes') + '</div>';
    return;
  }
  noteList.innerHTML = visibleNotes.map(function (note) {
    const id = escapeHtml(String(note.id));
    const pending = note.calendarEvent && !(note.text || '').trim();
    const content = pending ? '<p class="meeting-note-pending">' + t('meetingNotePending') + '</p>' : '<p>' + escapeHtml(note.text) + '</p>';
    const actions = pending ? '' : '<footer class="note-actions"><button class="create-task" data-create-task-from-note="' + id + '">＋ ' + t('createTask') + '</button></footer>';
    return '<article class="note' + (pending ? ' pending-meeting-note' : '') + '" data-note="' + id + '"><header><div><h3>' + escapeHtml(note.title) + '</h3><time>' + dateLabel(note.createdAt) + '</time></div><button class="delete" data-delete-note="' + id + '" aria-label="' + t('deleteNote') + '">×</button></header>' + content + actions + '</article>';
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
}
function renderMyTeam() {
  const team = teamForId(currentTeamId());
  if (!team) {
    myTeamName.textContent = t('noTeamAssigned');
    myTeamHint.textContent = t('noTeamAssignedHint');
    myTeamTotal.textContent = '0' + plural(0, t('personOne'), t('personFew'), t('personMany'));
    myTeamMembers.innerHTML = '<div class="empty team-empty"><span>♧</span>' + t('noTeamAssignedHint') + '</div>';
    return;
  }
  const members = teamMembersFor(team.id);
  myTeamName.textContent = team.name;
  myTeamHint.textContent = t('teamViewHint');
  myTeamTotal.textContent = members.length + plural(members.length, t('personOne'), t('personFew'), t('personMany'));
  myTeamMembers.innerHTML = members.length ? members.map(function (person) {
    const role = person.role ? '<span class="person-role">' + escapeHtml(person.role) + '</span>' : '';
    return '<article class="person-card team-member-card"><header><span class="person-avatar">' + escapeHtml(personInitials(person.name)) + '</span><div><h3>' + escapeHtml(person.name) + '</h3>' + role + '</div></header><div class="person-data"><span><b>@</b>' + escapeHtml(person.email) + '</span></div></article>';
  }).join('') : '<div class="empty team-empty"><span>♧</span>' + t('noTeamMembers') + '</div>';
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
    const ownAccount = Boolean(currentUser && account.id === currentUser.id);
    const roleOptions = '<option value="member"' + (account.role !== 'admin' ? ' selected' : '') + '>' + t('member') + '</option><option value="admin"' + (account.role === 'admin' ? ' selected' : '') + '>' + t('administrator') + '</option>';
    return '<article class="account-row"><div><strong>' + escapeHtml(account.login) + '</strong><span>' + escapeHtml(account.email || '') + '</span><span class="role-badge ' + (account.role === 'admin' ? '' : 'member') + '">' + t(roleKey) + '</span></div><div class="account-access-controls"><label class="account-control-label"><span>' + t('accountRole') + '</span><select data-account-role="' + account.id + '"' + (ownAccount ? ' disabled' : '') + '>' + roleOptions + '</select></label><label class="account-control-label"><span>' + t('team') + '</span><select data-account-team="' + account.id + '">' + teamOptions(account.teamId, true) + '</select></label><button type="button" data-save-account-access="' + account.id + '">' + t('saveAccess') + '</button></div></article>';
  }).join('');
}
function syncPersonTeamMembership(personId, teamId) {
  const person = Number(personId);
  if (!person) return false;
  const target = String(teamId || '');
  let changed = false;
  state.teams = state.teams.map(function (team) {
    const members = (team.memberIds || []).map(Number);
    const shouldContain = target && String(team.id) === target;
    const hasPerson = members.includes(person);
    if ((shouldContain && hasPerson) || (!shouldContain && !hasPerson)) return team;
    changed = true;
    return Object.assign({}, team, { memberIds: shouldContain ? Array.from(new Set(members.concat(person))) : members.filter(function (id) { return id !== person; }) });
  });
  return changed;
}
async function saveAccountAccess(accountId) {
  if (!isAdmin() || !supabaseClient) return;
  const account = accounts.find(function (item) { return item.id === accountId; });
  const roleControl = document.querySelector('[data-account-role="' + accountId + '"]');
  const teamControl = document.querySelector('[data-account-team="' + accountId + '"]');
  if (!account || !roleControl || !teamControl) return;
  const update = {
    role: account.id === currentUser.id ? account.role : roleControl.value,
    team_id: teamControl.value || null,
    person_id: account.personId || null
  };
  setSaveStatus('dataSaving');
  const response = await supabaseClient.from('profiles').update(update).eq('id', accountId);
  if (response.error) {
    setSaveStatus('dataUnavailable');
    return;
  }
  const membershipChanged = syncPersonTeamMembership(update.person_id, update.team_id);
  if (membershipChanged) await saveState(true);
  await refreshAccounts();
  if (currentUser && currentUser.id === accountId) {
    currentUser = accounts.find(function (item) { return item.id === accountId; }) || currentUser;
    updateAccessUi();
  }
  setSaveStatus('accessSaved');
  render();
}
async function setLinkedAccountsTeam(personId, teamId) {
  if (!isAdmin() || !supabaseClient || !personId) return true;
  const linkedAccounts = accounts.filter(function (account) { return String(account.personId || '') === String(personId); });
  if (!linkedAccounts.length) return true;
  const responses = await Promise.all(linkedAccounts.map(function (account) {
    return supabaseClient.from('profiles').update({ team_id: teamId || null }).eq('id', account.id);
  }));
  if (responses.some(function (response) { return response.error; })) {
    setSaveStatus('dataUnavailable');
    return false;
  }
  await refreshAccounts();
  if (currentUser) currentUser = accounts.find(function (account) { return account.id === currentUser.id; }) || currentUser;
  updateAccessUi();
  return true;
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
function meetingHasEnded(event) {
  if (!event) return false;
  if ((state.completedMeetingIds || []).includes(String(event.id))) return true;
  const end = meetingEnd(event);
  return !Number.isNaN(end.getTime()) && end.getTime() <= Date.now();
}
function completeMeeting(id) {
  const event = calendarEvents.find(function (item) { return item.id === Number(id); });
  if (!event || !canEditCalendarEvent(event)) return;
  state.completedMeetingIds = Array.from(new Set((state.completedMeetingIds || []).concat(String(event.id))));
  saveState();
  closeEventDetail();
  render();
}
function scheduleMeetingEndCheck() {
  clearTimeout(meetingEndTimer);
  const nextEnd = calendarEvents.filter(function (event) { return !(state.completedMeetingIds || []).includes(String(event.id)); }).map(function (event) { return meetingEnd(event).getTime(); }).filter(function (time) { return Number.isFinite(time) && time > Date.now(); }).sort(function (a, b) { return a - b; })[0];
  if (!nextEnd) return;
  meetingEndTimer = setTimeout(function () {
    renderNotes();
    renderCalendar();
    scheduleMeetingEndCheck();
  }, Math.max(1000, Math.min(nextEnd - Date.now() + 1000, 2147483647)));
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
    const classes = [day.getMonth() !== month ? 'muted' : '', key === today ? 'today' : '', key >= weekStart && key <= weekEnd ? 'in-week' : '', calendarEvents.some(function (event) { return event.date && event.date.slice(0, 10) === key; }) ? 'has-event' : ''].filter(Boolean).join(' ');
    return '<button type="button" class="mini-day ' + classes + '" data-jump-date="' + key + '">' + day.getDate() + '</button>';
  }).join('');
}
function renderMobileCalendar(days) {
  if (!mobileTeamsCalendar) return;
  const canCreate = canCreateMeetings();
  const availableDays = days.map(dateKey);
  if (!availableDays.includes(selectedCalendarDay)) selectedCalendarDay = availableDays[0];
  const selectedDate = dateFromKey(selectedCalendarDay);
  const weekdayFormat = new Intl.DateTimeFormat(t('locale'), { weekday: 'short' });
  const agendaTitle = new Intl.DateTimeFormat(t('locale'), { weekday: 'long', day: 'numeric', month: 'short' }).format(selectedDate);
  const events = calendarEvents.filter(function (event) { return event.date && event.date.slice(0, 10) === selectedCalendarDay; }).sort(function (a, b) { return new Date(a.date) - new Date(b.date); });
  const eventList = events.length ? events.map(function (event) {
    const people = participantsFor(event);
    const peopleText = people.length ? people.slice(0, 2).join(', ') + (people.length > 2 ? ' +' + (people.length - 2) : '') : eventDateInputValue(meetingEnd(event)).slice(11, 16);
    const details = [event.teamId ? teamName(event.teamId) : '', peopleText].filter(Boolean).join(' · ');
    return '<button type="button" class="mobile-agenda-event' + (meetingHasEnded(event) ? ' completed' : '') + '" data-open-event="' + event.id + '"><time>' + escapeHtml(event.date.slice(11, 16)) + '</time><span><strong>' + escapeHtml(event.title) + '</strong><small>' + escapeHtml(details) + '</small></span></button>';
  }).join('') : '<p class="mobile-agenda-empty">' + t('noMeetingsDay') + '</p>';
  mobileTeamsCalendar.innerHTML = '<div class="mobile-week-strip">' + days.map(function (day) {
    const key = dateKey(day);
    const classes = [key === selectedCalendarDay ? 'selected' : '', key === dateKey(new Date()) ? 'today' : '', calendarEvents.some(function (event) { return event.date && event.date.slice(0, 10) === key; }) ? 'has-event' : ''].filter(Boolean).join(' ');
    return '<button type="button" class="mobile-week-day ' + classes + '" data-mobile-day="' + key + '"><span class="mobile-weekday">' + weekdayFormat.format(day) + '</span><span class="mobile-date">' + day.getDate() + '</span></button>';
  }).join('') + '</div><div class="mobile-agenda"><header class="mobile-agenda-head"><h3>' + escapeHtml(agendaTitle) + '</h3><span>' + events.length + plural(events.length, t('eventOne'), t('eventFew'), t('eventMany')) + '</span></header><div class="mobile-agenda-list">' + eventList + '</div><button type="button" class="mobile-new-meeting" data-new-event-day="' + selectedCalendarDay + '" aria-label="' + t('newMeeting') + '"' + (canCreate ? '' : ' disabled title="' + escapeHtml(t('noCalendarTeam')) + '"') + '>＋</button></div>';
}
function renderCalendar() {
  const canCreate = canCreateMeetings();
  const newMeetingButton = document.getElementById('new-meeting');
  newMeetingButton.disabled = !canCreate;
  newMeetingButton.title = canCreate ? '' : t('noCalendarTeam');
  const days = Array.from({ length: 7 }, function (_, index) {
    return new Date(calendarCursor.getFullYear(), calendarCursor.getMonth(), calendarCursor.getDate() + index);
  });
  const today = dateKey(new Date());
  const titleFormat = new Intl.DateTimeFormat(t('locale'), { day: 'numeric', month: 'short', year: 'numeric' });
  const weekdayFormat = new Intl.DateTimeFormat(t('locale'), { weekday: 'short' });
  document.getElementById('calendar-title').textContent = titleFormat.format(days[0]) + ' – ' + titleFormat.format(days[6]);
  document.getElementById('event-count').textContent = calendarEvents.length;
  document.getElementById('calendar-total').textContent = calendarEvents.length + plural(calendarEvents.length, t('eventOne'), t('eventFew'), t('eventMany'));
  renderMiniCalendar();
  renderMobileCalendar(days);
  weekHeader.innerHTML = '<div class="week-time-corner"></div>' + days.map(function (day) {
    const key = dateKey(day);
    return '<button type="button" class="week-day-head' + (key === today ? ' today' : '') + '" data-new-event-day="' + key + '"' + (canCreate ? '' : ' disabled') + '><span class="weekday-name">' + weekdayFormat.format(day) + '</span><span class="date-number">' + day.getDate() + '</span></button>';
  }).join('');
  timeAxis.innerHTML = Array.from({ length: 14 }, function (_, index) {
    return '<div class="time-label">' + String(index + 7).padStart(2, '0') + ':00</div>';
  }).join('');
  weekGrid.innerHTML = days.map(function (day) {
    const key = dateKey(day);
    const slots = Array.from({ length: 14 }, function (_, index) {
      return '<button type="button" class="week-slot" data-new-event-time="' + dateInputFor(day, index + 7) + '"' + (canCreate ? '' : ' disabled') + '></button>';
    }).join('');
    const events = calendarEvents.filter(function (event) { return event.date && event.date.slice(0, 10) === key; }).map(function (event) {
      const start = new Date(event.date);
      const end = meetingEnd(event);
      const startMinutes = start.getHours() * 60 + start.getMinutes();
      const top = Math.max(0, (startMinutes - 7 * 60) * 0.9);
      const duration = Math.max(30, (end.getTime() - start.getTime()) / 60000);
      const height = Math.max(35, Math.min(750 - top, duration * 0.9 - 4));
      const people = participantsFor(event);
      const peopleText = people.length ? '👥 ' + people.slice(0, 2).join(', ') + (people.length > 2 ? ' +' + (people.length - 2) : '') : event.date.slice(11, 16) + ' – ' + eventDateInputValue(end).slice(11, 16);
      const peopleLine = '<span>' + escapeHtml([event.teamId ? teamName(event.teamId) : '', peopleText].filter(Boolean).join(' · ')) + '</span>';
      return '<button type="button" class="week-event' + (meetingHasEnded(event) ? ' completed' : '') + '" data-open-event="' + event.id + '" style="top:' + top + 'px;height:' + height + 'px" title="' + escapeHtml(event.title) + '"><strong>' + escapeHtml(event.date.slice(11, 16)) + ' · ' + escapeHtml(event.title + (meetingHasEnded(event) ? ' ✓' : '')) + '</strong>' + peopleLine + '</button>';
    }).join('');
    return '<div class="week-day-column">' + slots + events + '</div>';
  }).join('');
}
function safeDateKey(value) {
  const date = new Date(value || '');
  return Number.isNaN(date.getTime()) ? '' : dateKey(date);
}
function renderSummaryCharts(totals, from, to) {
  const total = totals.todo + totals.doing + totals.done;
  const donePercent = total ? Math.round(totals.done / total * 100) : 0;
  const active = totals.todo + totals.doing;
  summaryCompletionChart.style.setProperty('--completion', donePercent + '%');
  summaryCompletionChart.innerHTML = '<div><b>' + donePercent + '%</b><span>' + t('done') + '</span></div>';
  summaryCompletionLabel.textContent = donePercent + '%';
  summaryCompletionLegend.innerHTML = [
    { key: 'done', value: totals.done, label: t('done') },
    { key: 'active', value: active, label: t('activeTasks') }
  ].map(function (item) {
    return '<div class="completion-legend-row ' + item.key + '"><i></i><span>' + item.label + '</span><b>' + item.value + '</b></div>';
  }).join('');
  summaryStatusChart.innerHTML = [
    { key: 'todo', value: totals.todo, label: t('todo') },
    { key: 'doing', value: totals.doing, label: t('doing') },
    { key: 'done', value: totals.done, label: t('done') }
  ].map(function (item) {
    const percent = total ? Math.round(item.value / total * 100) : 0;
    return '<div class="status-chart-row ' + item.key + '"><div class="status-chart-label"><span><i></i>' + item.label + '</span><b>' + item.value + '</b></div><div class="status-chart-track"><i style="width:' + percent + '%"></i></div><small>' + percent + '%</small></div>';
  }).join('');
  const end = to ? dateFromKey(to) : new Date();
  end.setHours(0, 0, 0, 0);
  const days = Array.from({ length: 7 }, function (_, index) {
    return new Date(end.getFullYear(), end.getMonth(), end.getDate() - 6 + index);
  });
  const activity = days.map(function (day) {
    const key = dateKey(day);
    const created = state.tasks.filter(function (task) { return !task.archivedAt && safeDateKey(task.createdAt) === key && isDateInRange(task.createdAt, from, to); }).length;
    const closed = state.tasks.filter(function (task) { return !task.archivedAt && task.completedAt && safeDateKey(task.completedAt) === key && isDateInRange(task.completedAt, from, to); }).length;
    return { day: day, created: created, closed: closed };
  });
  const maxValue = Math.max(1, ...activity.map(function (item) { return Math.max(item.created, item.closed); }));
  const weekdayFormat = new Intl.DateTimeFormat(t('locale'), { weekday: 'short' });
  summaryActivityChart.innerHTML = activity.map(function (item) {
    const createdHeight = item.created ? Math.max(12, Math.round(item.created / maxValue * 100)) : 4;
    const closedHeight = item.closed ? Math.max(12, Math.round(item.closed / maxValue * 100)) : 4;
    const label = weekdayFormat.format(item.day).replace('.', '');
    const numericDate = String(item.day.getDate()).padStart(2, '0') + '.' + String(item.day.getMonth() + 1).padStart(2, '0');
    const title = label + ' ' + numericDate + ': ' + t('createdTasks') + ' — ' + item.created + ', ' + t('closedTasks') + ' — ' + item.closed;
    return '<div class="activity-day" title="' + escapeHtml(title) + '"><div class="activity-bars"><i class="created' + (item.created ? '' : ' is-empty') + '" style="height:' + createdHeight + '%" data-value="' + item.created + '"></i><i class="closed' + (item.closed ? '' : ' is-empty') + '" style="height:' + closedHeight + '%" data-value="' + item.closed + '"></i></div><span><b>' + escapeHtml(label) + '</b><small>' + numericDate + '</small></span></div>';
  }).join('');
}
function renderSummary() {
  const totals = { todo: 0, doing: 0, done: 0 };
  const mode = summaryDateMode.value;
  const from = summaryDateFrom.value;
  const to = summaryDateTo.value;
  const reportTasks = state.tasks.filter(function (task) {
    if (task.archivedAt) return false;
    const reportDate = mode === 'completed' ? (task.completedAt || (task.column === 'done' ? task.createdAt : '')) : task.createdAt;
    if (mode === 'completed' && !reportDate) return false;
    return isDateInRange(reportDate, from, to);
  });
  reportTasks.forEach(function (task) { if (totals[task.column] !== undefined) totals[task.column] += 1; });
  document.getElementById('summary-total').textContent = reportTasks.length + plural(reportTasks.length, t('taskOne'), t('taskFew'), t('taskMany'));
  const activeTasks = totals.todo + totals.doing;
  const highPriorityTasks = reportTasks.filter(function (task) { return taskPriority(task) === 'high'; }).length;
  summaryStats.innerHTML = [
    { key: 'total', value: reportTasks.length, label: t('total') },
    { key: 'active', value: activeTasks, label: t('activeTasks') },
    { key: 'done', value: totals.done, label: t('done') },
    { key: 'high', value: highPriorityTasks, label: t('highPriorityTasks') }
  ].map(function (item) { return '<article class="summary-stat ' + item.key + '"><b>' + item.value + '</b><span>' + item.label + '</span></article>'; }).join('');
  renderSummaryCharts(totals, from, to);
  const people = new Map();
  reportTasks.forEach(function (task) {
    const responsibles = taskResponsibleNames(task);
    (responsibles.length ? responsibles : [t('notAssigned')]).forEach(function (name) {
      if (!people.has(name)) people.set(name, { name: name, todo: 0, doing: 0, done: 0 });
      people.get(name)[task.column] += 1;
    });
  });
  const rows = Array.from(people.values()).sort(function (a, b) { return (b.done + b.doing + b.todo) - (a.done + a.doing + a.todo) || a.name.localeCompare(b.name, t('locale')); });
  summaryByPerson.innerHTML = rows.length ? rows.map(function (person) {
    const total = person.todo + person.doing + person.done;
    return '<tr><td><span class="summary-person"><i>' + escapeHtml(personInitials(person.name)) + '</i>' + escapeHtml(person.name) + '</span></td><td>' + person.todo + '</td><td>' + person.doing + '</td><td>' + person.done + '</td><td><b>' + total + '</b></td></tr>';
  }).join('') : '<tr><td colspan="5" class="summary-empty">' + t('emptyColumn') + '</td></tr>';
  const doneTasks = reportTasks.filter(function (task) { return task.column === 'done'; }).sort(function (a, b) { return new Date(b.completedAt || b.createdAt || 0) - new Date(a.completedAt || a.createdAt || 0); });
  completedTasks.innerHTML = doneTasks.length ? '<div class="completed-list">' + doneTasks.map(function (task) {
    return '<div class="completed-task"><strong>✓ ' + escapeHtml(task.title) + '</strong><span>' + escapeHtml(taskResponsibleNames(task).join(', ') || t('notAssigned')) + '</span></div>';
  }).join('') + '</div>' : '<div class="summary-empty">' + t('noCompletedTasks') + '</div>';
}
function plural(number, one, few, many) {
  const last = number % 10;
  const lastTwo = number % 100;
  if (last === 1 && lastTwo !== 11) return ' ' + one;
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return ' ' + few;
  return ' ' + many;
}
function archiveCompletedTasks() {
  const cutoff = Date.now() - 24 * 60 * 60 * 1000;
  let changed = false;
  state.tasks = state.tasks.map(function (task) {
    const completedAt = new Date(task.completedAt || '').getTime();
    if (task.archivedAt || task.column !== 'done' || !Number.isFinite(completedAt) || completedAt > cutoff) return task;
    changed = true;
    return Object.assign({}, task, { archivedAt: new Date().toISOString() });
  });
  return changed;
}
function scheduleArchiveCheck() {
  clearTimeout(archiveCheckTimer);
  const nextArchiveAt = state.tasks.filter(function (task) { return task.column === 'done' && task.completedAt && !task.archivedAt; }).map(function (task) { return new Date(task.completedAt).getTime() + 24 * 60 * 60 * 1000; }).filter(Number.isFinite).sort(function (a, b) { return a - b; })[0];
  if (!nextArchiveAt) return;
  archiveCheckTimer = setTimeout(function () {
    if (archiveCompletedTasks()) {
      saveState();
      render();
    } else {
      scheduleArchiveCheck();
    }
  }, Math.max(1000, Math.min(nextArchiveAt - Date.now(), 2147483647)));
}
function render() {
  if (archiveCompletedTasks()) saveState();
  renderResponsibleFilter();
  renderBoard();
  renderNotes();
  renderPeople();
  renderMyTeam();
  renderTeams();
  renderAccounts();
  renderNotifications();
  renderCalendar();
  renderSummary();
  scheduleArchiveCheck();
  scheduleMeetingEndCheck();
}
function moveTask(id, column) {
  const currentTask = state.tasks.find(function (task) { return task.id === Number(id); });
  if (!currentTask || currentTask.column === column) return;
  addTaskNotifications('status', currentTask, taskResponsibleNames(currentTask).concat(taskMentionNames(currentTask)));
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
    let touchStartX = 0;
    let touchStartY = 0;
    let swipeOffset = 0;
    let isSwipeGesture = false;
    function resetSwipe() {
      card.classList.remove('swiping-next');
      card.style.removeProperty('--swipe-x');
      delete card.dataset.swipeLabel;
      swipeOffset = 0;
      isSwipeGesture = false;
    }
    card.addEventListener('touchstart', function (event) {
      if (!event.touches[0] || (event.target.closest && event.target.closest('button, select'))) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      swipeOffset = 0;
      isSwipeGesture = false;
    }, { passive: true });
    card.addEventListener('touchmove', function (event) {
      if (!event.touches[0]) return;
      const deltaX = event.touches[0].clientX - touchStartX;
      const deltaY = event.touches[0].clientY - touchStartY;
      const task = state.tasks.find(function (item) { return item.id === Number(card.dataset.task); });
      const columnIndex = task ? columns.findIndex(function (column) { return column.id === task.column; }) : -1;
      const nextColumn = columns[columnIndex + 1];
      if (!nextColumn || deltaX >= -16 || Math.abs(deltaX) <= Math.abs(deltaY)) {
        if (isSwipeGesture) resetSwipe();
        return;
      }
      isSwipeGesture = true;
      swipeOffset = Math.max(-92, deltaX);
      card.dataset.swipeLabel = t(nextColumn.titleKey);
      card.style.setProperty('--swipe-x', swipeOffset + 'px');
      card.classList.add('swiping-next');
    }, { passive: true });
    card.addEventListener('touchend', function () {
      const task = state.tasks.find(function (item) { return item.id === Number(card.dataset.task); });
      const columnIndex = task ? columns.findIndex(function (column) { return column.id === task.column; }) : -1;
      const nextColumn = columns[columnIndex + 1];
      if (isSwipeGesture && swipeOffset <= -72 && nextColumn) {
        card.dataset.swipeHandled = 'true';
        moveTask(card.dataset.task, nextColumn.id);
        return;
      }
      resetSwipe();
    }, { passive: true });
    card.addEventListener('touchcancel', resetSwipe, { passive: true });
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
function tabStorageKey() {
  return ACTIVE_TAB_KEY + '-' + (currentUser && currentUser.id || 'default');
}
function savedTabForCurrentUser() {
  let tab = 'board';
  try {
    const saved = localStorage.getItem(tabStorageKey());
    if (['board', 'calendar', 'people', 'team', 'summary', 'meetings', 'admin'].includes(saved)) tab = saved;
  } catch {}
  if (!isAdmin() && tab === 'people') return 'team';
  if (!isAdmin() && tab === 'admin') return 'board';
  if (isAdmin() && (tab === 'team' || tab === 'people')) return 'admin';
  return tab;
}
function showTab(tab) {
  if (tab === 'admin' && !isAdmin()) return;
  if (tab === 'people') tab = isAdmin() ? 'admin' : 'team';
  if (tab === 'team' && isAdmin()) tab = 'admin';
  document.getElementById('board-screen').hidden = tab !== 'board';
  document.getElementById('calendar-screen').hidden = tab !== 'calendar';
  document.getElementById('people-screen').hidden = tab !== 'people';
  document.getElementById('team-screen').hidden = tab !== 'team';
  document.getElementById('admin-screen').hidden = tab !== 'admin';
  document.getElementById('summary-screen').hidden = tab !== 'summary';
  document.getElementById('meetings-screen').hidden = tab !== 'meetings';
  document.querySelectorAll('.tab').forEach(function (button) { button.classList.toggle('active', button.dataset.tab === tab); });
  try { localStorage.setItem(tabStorageKey(), tab); } catch {}
}
function openTask(id) {
  const task = state.tasks.find(function (item) { return item.id === Number(id); });
  if (!task) return;
  openTaskId = task.id;
  taskEditor.elements.title.value = task.title || '';
  taskEditor.elements.description.value = task.description || '';
  taskEditor.elements.dueDate.value = task.dueDate || '';
  renderTaskResponsibleOptions(taskResponsibleNames(task));
  taskEditor.elements.column.value = task.column || 'todo';
  taskEditor.elements.priority.value = taskPriority(task);
  updateTaskEditorUi();
  taskDetail.hidden = false;
}
function openNewTask(column) {
  openTaskId = null;
  taskEditor.reset();
  renderTaskResponsibleOptions('');
  taskEditor.elements.column.value = column || 'todo';
  taskEditor.elements.priority.value = 'medium';
  updateTaskEditorUi();
  taskDetail.hidden = false;
}
function updateTaskEditorUi() {
  const creating = !openTaskId;
  document.getElementById('task-editor-title').textContent = creating ? t('newTask') : t('edit');
  document.getElementById('save-task-detail').textContent = creating ? t('createTask') : t('saveChanges');
  document.getElementById('delete-open-task').hidden = creating;
}
function closeTaskDetail() {
  openTaskId = null;
  hideTaskMentionSuggestions();
  taskDetail.hidden = true;
}
function openNewNote() {
  openNoteId = null;
  noteEditor.reset();
  updateNoteEditorUi();
  noteDetail.hidden = false;
}
function openNote(id) {
  const eventId = calendarEventIdFromNoteId(id);
  if (eventId) {
    const calendarEvent = calendarEvents.find(function (item) { return item.id === eventId; });
    if (!calendarEvent) return;
    openNoteId = 'event-' + eventId;
    noteEditor.elements.title.value = calendarEvent.title || '';
    noteEditor.elements.text.value = calendarEvent.notes || '';
  } else {
    const note = state.notes.find(function (item) { return item.id === Number(id); });
    if (!note) return;
    openNoteId = note.id;
    noteEditor.elements.title.value = note.title || '';
    noteEditor.elements.text.value = note.text || '';
  }
  updateNoteEditorUi();
  noteDetail.hidden = false;
}
function updateNoteEditorUi() {
  const calendarEventId = calendarEventIdFromNoteId(openNoteId);
  const calendarEvent = calendarEventId ? calendarEvents.find(function (item) { return item.id === calendarEventId; }) : null;
  const editable = !calendarEvent || canEditCalendarEvent(calendarEvent);
  document.getElementById('note-editor-title').textContent = openNoteId ? t('edit') : t('newNote');
  document.getElementById('save-note-detail').textContent = t('saveNote');
  noteEditor.querySelectorAll('input, textarea').forEach(function (control) { control.disabled = !editable; });
  document.getElementById('save-note-detail').disabled = !editable;
  document.getElementById('delete-open-note').hidden = !openNoteId || !editable;
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
  renderMeetingTeamPicker(isAdmin() ? '' : currentTeamId());
  participantSearch.value = '';
  setSelectedParticipants([]);
  updateEventEditorAccess(null);
  eventDetail.hidden = false;
}
function openEvent(id) {
  const event = calendarEvents.find(function (item) { return item.id === Number(id); });
  if (!event) return;
  openEventId = event.id;
  eventEditor.elements.title.value = event.title || '';
  eventEditor.elements.date.value = event.date || eventDateInputValue(new Date());
  eventEditor.elements.end.value = eventDateInputValue(meetingEnd(event));
  renderMeetingTeamPicker(event.teamId);
  participantSearch.value = '';
  const matchingIds = Array.isArray(event.participantIds) ? event.participantIds : participantsFor(event).map(function (name) {
    const person = state.people.find(function (item) { return item.name.toLocaleLowerCase() === name.toLocaleLowerCase(); });
    return person ? person.id : null;
  }).filter(Boolean);
  setSelectedParticipants(matchingIds);
  eventEditor.elements.notes.value = event.notes || '';
  updateEventEditorAccess(event);
  eventDetail.hidden = false;
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
  await hydrateWorkspace();
  render();
  enableSaveNotifications();
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
  await hydrateWorkspace();
  render();
  enableSaveNotifications();
});
noteEditor.addEventListener('submit', async function (event) {
  event.preventDefault();
  const form = new FormData(noteEditor);
  const details = { title: form.get('title').trim(), text: form.get('text').trim() };
  const eventId = calendarEventIdFromNoteId(openNoteId);
  if (eventId) {
    const calendarEvent = calendarEvents.find(function (item) { return item.id === eventId; });
    if (!calendarEvent || !canEditCalendarEvent(calendarEvent)) return;
    if (!await saveCalendarEvent(Object.assign({}, calendarEvent, { title: details.title, notes: details.text }))) return;
  } else if (openNoteId) {
    state.notes = state.notes.map(function (note) { return note.id === openNoteId ? Object.assign({}, note, details) : note; });
  } else {
    state.notes.unshift(Object.assign({ id: Date.now(), createdAt: new Date().toISOString() }, details));
  }
  if (!eventId) saveState();
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
});
teamForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = new FormData(teamForm).get('name').trim();
  state.teams.unshift({ id: Date.now(), name: name, memberIds: [] });
  teamForm.reset();
  saveState();
  renderTeams();
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
  const description = form.get('description').trim();
  const responsibles = normalizeResponsibleNames(form.getAll('responsibles'));
  const details = { title: form.get('title').trim(), description: description, mentions: extractTaskMentions(description), responsibles: responsibles, responsible: responsibles[0] || '', dueDate: String(form.get('dueDate') || ''), column: form.get('column'), priority: form.get('priority') };
  let previousTask = null;
  let savedTask = null;
  if (openTaskId) {
    state.tasks = state.tasks.map(function (task) {
      if (task.id !== openTaskId) return task;
      const completedAt = details.column === 'done' && task.column !== 'done' ? new Date().toISOString() : (details.column === 'done' ? task.completedAt : null);
      previousTask = task;
      savedTask = Object.assign({}, task, details, { completedAt: completedAt });
      return savedTask;
    });
  } else {
    savedTask = Object.assign({ id: Date.now(), createdAt: new Date().toISOString(), completedAt: details.column === 'done' ? new Date().toISOString() : null }, details);
    state.tasks.unshift(savedTask);
  }
  const previousMentions = previousTask ? taskMentionNames(previousTask) : [];
  const newMentions = taskMentionNames(savedTask).filter(function (name) { return !previousMentions.includes(name); });
  addTaskNotifications('mention', savedTask, newMentions);
  if (previousTask && previousTask.column !== savedTask.column) addTaskNotifications('status', savedTask, taskResponsibleNames(savedTask).concat(taskMentionNames(savedTask)));
  saveState();
  closeTaskDetail();
  render();
});
taskEditor.elements.description.addEventListener('input', renderTaskMentionSuggestions);
taskEditor.elements.description.addEventListener('click', renderTaskMentionSuggestions);
taskMentionSuggestions.addEventListener('mousedown', function (event) {
  event.preventDefault();
});
taskMentionSuggestions.addEventListener('click', function (event) {
  const option = event.target.closest('[data-task-mention]');
  if (option) insertTaskMention(option.dataset.taskMention);
});
eventEditor.addEventListener('submit', async function (event) {
  event.preventDefault();
  const form = new FormData(eventEditor);
  const start = form.get('date');
  let end = form.get('end');
  if (new Date(end) <= new Date(start)) end = eventDateInputValue(new Date(new Date(start).getTime() + 60 * 60000));
  const teamId = isAdmin() ? String(form.get('teamId') || '') : currentTeamId();
  if (!isAdmin() && !teamId) {
    meetingTeam.setCustomValidity(t('noCalendarTeam'));
    meetingTeam.reportValidity();
    meetingTeam.setCustomValidity('');
    return;
  }
  const details = { title: form.get('title').trim(), date: start, end: end, teamId: teamId, participantIds: selectedParticipantIds.slice(), notes: form.get('notes').trim() };
  let changedEvent;
  if (openEventId) {
    const current = calendarEvents.find(function (item) { return item.id === openEventId; });
    if (!current || !canEditCalendarEvent(current)) return;
    changedEvent = Object.assign({}, current, details);
  } else {
    changedEvent = Object.assign({ id: Date.now(), createdBy: currentUser.id }, details);
  }
  if (!await saveCalendarEvent(changedEvent)) return;
  closeEventDetail();
  render();
  if (changedEvent.notes) showTab('meetings');
});
document.addEventListener('click', async function (event) {
  if (appbarMenu && appbarMenu.classList.contains('open') && !event.target.closest('#appbar-menu, #mobile-menu-toggle')) setMobileMenu(false);
  if (notificationsPanel && !event.target.closest('#notification-wrap')) setNotificationsOpen(false);
  const card = event.target.closest('.task-card');
  if (card && !event.target.closest('button, select')) {
    if (card.dataset.swipeHandled) return;
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
  if (button.id === 'mobile-menu-toggle') {
    setMobileMenu(!appbarMenu.classList.contains('open'));
    return;
  }
  if (button.id === 'notification-button') {
    setNotificationsOpen(notificationsPanel.hidden);
    return;
  }
  if (button.id === 'mark-notifications-read') {
    markCurrentNotificationsRead();
    return;
  }
  if (button.dataset.authMode) {
    setAuthMode(button.dataset.authMode);
    return;
  }
  if (button.dataset.tab) {
    showTab(button.dataset.tab);
    setMobileMenu(false);
  }
  if (button.id === 'logout-button') {
    if (supabaseClient) await supabaseClient.auth.signOut();
    currentUser = null;
    setNotificationsOpen(false);
    showAuth();
    return;
  }
  if (button.dataset.saveAccountAccess) {
    await saveAccountAccess(button.dataset.saveAccountAccess);
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
    selectedParticipantIds = selectedParticipantIds.filter(function (personId) { return personId !== id; });
    saveState();
    render();
    renderParticipantPicker();
    return;
  }
  if (button.dataset.deleteTeam) {
    const teamId = String(button.dataset.deleteTeam);
    if (supabaseClient && isAdmin()) {
      const response = await supabaseClient.from('profiles').update({ team_id: null }).eq('team_id', teamId);
      if (response.error) {
        setSaveStatus('dataUnavailable');
        return;
      }
      await refreshAccounts();
      if (currentUser) currentUser = accounts.find(function (account) { return account.id === currentUser.id; }) || currentUser;
      updateAccessUi();
    }
    state.teams = state.teams.filter(function (team) { return team.id !== Number(teamId); });
    await saveState(true);
    render();
    return;
  }
  if (button.dataset.addTeamMember) {
    const teamId = Number(button.dataset.addTeamMember);
    const picker = document.querySelector('[data-team-picker="' + teamId + '"]');
    const personId = picker ? Number(picker.value) : 0;
    if (!personId) return;
    if (!await setLinkedAccountsTeam(personId, String(teamId))) return;
    state.teams = state.teams.map(function (team) {
      return team.id === teamId ? Object.assign({}, team, { memberIds: Array.from(new Set((team.memberIds || []).map(Number).concat(personId))) }) : team;
    });
    await saveState(true);
    render();
    return;
  }
  if (button.dataset.removeTeamMember) {
    const teamId = Number(button.dataset.removeTeamMember);
    const personId = Number(button.dataset.person);
    if (!await setLinkedAccountsTeam(personId, '')) return;
    state.teams = state.teams.map(function (team) {
      return team.id === teamId ? Object.assign({}, team, { memberIds: (team.memberIds || []).filter(function (id) { return Number(id) !== personId; }) }) : team;
    });
    await saveState(true);
    render();
    return;
  }
  if (button.dataset.addParticipant) {
    selectedParticipantIds.push(Number(button.dataset.addParticipant));
    participantSearch.value = '';
    setSelectedParticipants(selectedParticipantIds);
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
    onlyMyTasks = false;
    setDatePreset('task', 'all');
    return;
  }
  if (button.id === 'only-my-tasks') {
    onlyMyTasks = !onlyMyTasks;
    renderBoard();
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
    const eventId = calendarEventIdFromNoteId(button.dataset.deleteNote);
    if (eventId) {
      const calendarEvent = calendarEvents.find(function (item) { return item.id === eventId; });
      if (!calendarEvent || !canEditCalendarEvent(calendarEvent) || !await saveCalendarEvent(Object.assign({}, calendarEvent, { notes: '' }))) return;
    } else {
      state.notes = state.notes.filter(function (item) { return item.id !== Number(button.dataset.deleteNote); });
      saveState();
    }
    render();
  }
  if (button.dataset.createTaskFromNote) {
    const eventId = calendarEventIdFromNoteId(button.dataset.createTaskFromNote);
    const calendarEvent = eventId ? calendarEvents.find(function (item) { return item.id === eventId; }) : null;
    const note = calendarEvent ? { id: 'event-' + eventId, title: calendarEvent.title, text: calendarEvent.notes, eventId: eventId } : state.notes.find(function (item) { return item.id === Number(button.dataset.createTaskFromNote); });
    if (note) {
      state.tasks.unshift({ id: Date.now(), title: note.title, description: note.text, responsibles: [], responsible: '', priority: 'medium', column: 'todo', createdAt: new Date().toISOString() });
      if (calendarEvent) {
        if (canEditCalendarEvent(calendarEvent)) await saveCalendarEvent(Object.assign({}, calendarEvent, { notes: '' }));
      } else {
        state.notes = state.notes.filter(function (item) { return item.id !== note.id; });
      }
      saveState();
      render();
      showTab('board');
    }
  }
  if (button.id === 'new-meeting') openNewEvent();
  if (button.dataset.mobileDay) { selectedCalendarDay = button.dataset.mobileDay; renderCalendar(); return; }
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
    if (!await removeCalendarEvent(openEventId)) return;
    closeEventDetail();
    render();
  }
  if (button.id === 'complete-open-event' && openEventId) {
    completeMeeting(openEventId);
    return;
  }
  if (button.id === 'delete-open-note' && openNoteId) {
    const eventId = calendarEventIdFromNoteId(openNoteId);
    if (eventId) {
      const calendarEvent = calendarEvents.find(function (item) { return item.id === eventId; });
      if (!calendarEvent || !canEditCalendarEvent(calendarEvent) || !await saveCalendarEvent(Object.assign({}, calendarEvent, { notes: '' }))) return;
    } else {
      state.notes = state.notes.filter(function (item) { return item.id !== openNoteId; });
      saveState();
    }
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
document.addEventListener('keydown', function (event) { if (event.key === 'Escape') { setMobileMenu(false); if (!taskDetail.hidden) closeTaskDetail(); if (!eventDetail.hidden) closeEventDetail(); if (!noteDetail.hidden) closeNoteDetail(); } });
applyLanguage();
setInterval(updateSystemClock, 1000);
initializeAuth();
