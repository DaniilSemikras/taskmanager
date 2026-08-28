(function () {
  'use strict';

  const rangeDefinitions = [
    ['task-date-from', 'task-date-to'],
    ['summary-date-from', 'summary-date-to']
  ];
  const rangeInputs = new Set();
  const picker = document.createElement('section');
  let state = null;
  let visibleMonth = startOfMonth(new Date());

  picker.className = 'date-picker-popover';
  picker.hidden = true;
  picker.setAttribute('role', 'dialog');
  picker.setAttribute('aria-modal', 'false');
  document.body.appendChild(picker);

  function locale() {
    return document.documentElement.lang === 'en' ? 'en-US' : 'uk-UA';
  }

  function words() {
    return locale() === 'en-US'
      ? { today: 'Today', clear: 'Clear', done: 'Done', time: 'Time', chooseStart: 'Choose the first date', chooseEnd: 'Now choose the last date', label: 'Choose a date' }
      : { today: 'Сьогодні', clear: 'Очистити', done: 'Готово', time: 'Час', chooseStart: 'Оберіть першу дату', chooseEnd: 'Тепер оберіть останню дату', label: 'Оберіть дату' };
  }

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  function dateKey(date) {
    return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate());
  }

  function parseDate(value) {
    const match = String(value || '').slice(0, 10).match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;
    const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  function startOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  function addMonths(date, amount) {
    return new Date(date.getFullYear(), date.getMonth() + amount, 1);
  }

  function dateTimeValue(date, time) {
    return dateKey(date) + 'T' + (time || '09:00');
  }

  function inputTime(input, fallback) {
    const match = String(input.value || '').match(/T(\d{2}:\d{2})/);
    return match ? match[1] : fallback;
  }

  function dispatchChange(input) {
    updateDateDisplay(input);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function datePlaceholder(input) {
    const date = locale() === 'en-US' ? 'DD.MM.YYYY' : 'ДД.ММ.РРРР';
    return input.type === 'datetime-local' ? date + ', ' + (locale() === 'en-US' ? 'HH:MM' : 'ГГ:ХХ') : date;
  }

  function updateDateDisplay(input) {
    if (!input || !input._dateDisplay) return;
    input.lang = locale();
    const date = parseDate(input.value);
    if (!date) {
      input._dateDisplay.textContent = datePlaceholder(input);
      input._dateDisplay.classList.add('placeholder');
      return;
    }
    let label = pad(date.getDate()) + '.' + pad(date.getMonth() + 1) + '.' + date.getFullYear();
    if (input.type === 'datetime-local') label += ', ' + inputTime(input, '09:00');
    input._dateDisplay.textContent = label;
    input._dateDisplay.classList.remove('placeholder');
  }

  function enhanceDateInput(input) {
    if (input._dateDisplay) {
      updateDateDisplay(input);
      return;
    }
    const shell = document.createElement('span');
    const display = document.createElement('span');
    shell.className = 'date-input-shell';
    display.className = 'date-input-display';
    display.setAttribute('aria-hidden', 'true');
    input.parentNode.insertBefore(shell, input);
    shell.append(input, display);
    input._dateDisplay = display;
    updateDateDisplay(input);
  }

  function monthLabel(date) {
    return new Intl.DateTimeFormat(locale(), { month: 'long', year: 'numeric' }).format(date);
  }

  function fullDateLabel(date) {
    return new Intl.DateTimeFormat(locale(), { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
  }

  function weekdayNames() {
    return locale() === 'en-US' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  }

  function selectedKey() {
    if (!state || state.type !== 'single') return '';
    return String(state.input.value || '').slice(0, 10);
  }

  function renderMonth(month, showOutside) {
    const from = state && state.type === 'range' ? parseDate(state.from.value) : null;
    const to = state && state.type === 'range' ? parseDate(state.to.value) : null;
    const today = dateKey(new Date());
    const selected = selectedKey();
    const firstOffset = (month.getDay() + 6) % 7;
    const gridStart = new Date(month.getFullYear(), month.getMonth(), 1 - firstOffset);
    const monthSection = document.createElement('section');
    const title = document.createElement('h3');
    const weekdays = document.createElement('div');
    const grid = document.createElement('div');

    monthSection.className = 'date-picker-month';
    title.className = 'date-picker-month-title';
    title.textContent = monthLabel(month);
    weekdays.className = 'date-picker-weekdays';
    weekdayNames().forEach(function (name, index) {
      const item = document.createElement('span');
      item.textContent = name;
      if (index > 4) item.className = 'weekend';
      weekdays.appendChild(item);
    });
    grid.className = 'date-picker-grid';

    for (let index = 0; index < 42; index += 1) {
      const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index);
      const key = dateKey(date);
      const outside = date.getMonth() !== month.getMonth();
      const day = document.createElement('button');
      day.type = 'button';
      day.className = 'date-picker-day';
      day.textContent = date.getDate();
      day.dataset.date = key;
      day.setAttribute('aria-label', fullDateLabel(date));
      if (outside) day.classList.add('outside');
      if (key === today) day.classList.add('today');
      if (date.getDay() === 0 || date.getDay() === 6) day.classList.add('weekend');
      if (state.type === 'single' && key === selected) day.classList.add('selected');
      if (state.type === 'range' && from) {
        const stamp = date.getTime();
        if (key === dateKey(from)) day.classList.add('range-start');
        if (to && key === dateKey(to)) day.classList.add('range-end');
        if (to && stamp >= from.getTime() && stamp <= to.getTime()) day.classList.add('in-range');
      }
      if (!showOutside && outside) day.tabIndex = -1;
      grid.appendChild(day);
    }

    monthSection.append(title, weekdays, grid);
    return monthSection;
  }

  function button(className, label, action, ariaLabel) {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = className;
    element.textContent = label;
    element.dataset.action = action;
    if (ariaLabel) element.setAttribute('aria-label', ariaLabel);
    return element;
  }

  function render() {
    if (!state) return;
    const copy = words();
    const isRange = state.type === 'range';
    const topbar = document.createElement('header');
    const heading = document.createElement('strong');
    const months = document.createElement('div');
    const footer = document.createElement('footer');

    picker.className = 'date-picker-popover' + (isRange ? ' range-picker' : '');
    picker.setAttribute('aria-label', copy.label);
    picker.replaceChildren();
    topbar.className = 'date-picker-topbar';
    topbar.appendChild(button('date-picker-nav', '‹', 'previous', locale() === 'en-US' ? 'Previous month' : 'Попередній місяць'));
    heading.textContent = isRange ? monthLabel(visibleMonth) + ' — ' + monthLabel(addMonths(visibleMonth, 1)) : monthLabel(visibleMonth);
    topbar.appendChild(heading);
    topbar.appendChild(button('date-picker-nav', '›', 'next', locale() === 'en-US' ? 'Next month' : 'Наступний місяць'));
    months.className = 'date-picker-months';
    months.appendChild(renderMonth(visibleMonth, !isRange));
    if (isRange) months.appendChild(renderMonth(addMonths(visibleMonth, 1), false));
    footer.className = 'date-picker-footer';
    footer.appendChild(button('', copy.clear, 'clear'));

    if (isRange) {
      const hint = document.createElement('span');
      hint.className = 'date-picker-range-hint';
      hint.textContent = state.from.value && !state.to.value ? copy.chooseEnd : copy.chooseStart;
      footer.appendChild(hint);
      footer.appendChild(button('', copy.today, 'today'));
    } else if (state.hasTime) {
      const timeWrap = document.createElement('label');
      const time = document.createElement('input');
      timeWrap.className = 'date-picker-time';
      timeWrap.append(document.createTextNode(copy.time), time);
      time.type = 'time';
      time.value = state.pendingTime || (state.timeInput ? state.timeInput.value : inputTime(state.input, state.fallbackTime)) || state.fallbackTime;
      time.dataset.action = 'time';
      footer.appendChild(timeWrap);
      const doneButton = button('date-picker-done', copy.done, 'done');
      footer.appendChild(doneButton);
    } else {
      footer.appendChild(button('', copy.today, 'today'));
    }

    picker.append(topbar, months, footer);
  }

  function positionPicker(anchor) {
    if (window.innerWidth <= 700) return;
    const rect = anchor.getBoundingClientRect();
    const width = state.type === 'range' ? Math.min(720, window.innerWidth - 24) : Math.min(324, window.innerWidth - 24);
    const height = picker.offsetHeight || 410;
    const left = Math.max(12, Math.min(rect.left, window.innerWidth - width - 12));
    const below = rect.bottom + 8;
    const top = below + height <= window.innerHeight - 8 ? below : Math.max(8, rect.top - height - 8);
    picker.style.left = left + 'px';
    picker.style.top = top + 'px';
    picker.style.right = 'auto';
    picker.style.bottom = 'auto';
  }

  function openSingle(input) {
    const chosen = parseDate(input.value) || new Date();
    const timeInput = input.dataset.timeInput ? document.querySelector(input.dataset.timeInput) : null;
    state = {
      type: 'single',
      input: input,
      timeInput: timeInput,
      hasTime: input.type === 'datetime-local' || Boolean(timeInput),
      fallbackTime: input.dataset.defaultTime || (input.name === 'end' ? '10:00' : '09:00'),
      pendingTime: timeInput ? timeInput.value : inputTime(input, '')
    };
    visibleMonth = startOfMonth(chosen);
    picker.hidden = false;
    document.body.classList.add('date-picker-open');
    render();
    positionPicker(input);
  }

  function openRange(from, to, anchor) {
    const chosen = parseDate(from.value) || parseDate(to.value) || new Date();
    state = { type: 'range', from: from, to: to, anchor: anchor };
    visibleMonth = startOfMonth(chosen);
    picker.hidden = false;
    document.body.classList.add('date-picker-open');
    render();
    positionPicker(anchor);
  }

  function closePicker() {
    picker.hidden = true;
    picker.replaceChildren();
    document.body.classList.remove('date-picker-open');
    state = null;
  }

  function chooseDate(key) {
    const date = parseDate(key);
    if (!date || !state) return;
    if (state.type === 'single') {
      if (state.timeInput) {
        state.input.value = key;
        if (!state.timeInput.value) state.timeInput.value = state.pendingTime || state.fallbackTime;
        dispatchChange(state.timeInput);
      } else {
        state.input.value = state.hasTime ? dateTimeValue(date, state.pendingTime || inputTime(state.input, state.fallbackTime)) : key;
      }
      dispatchChange(state.input);
      if (state.hasTime) {
        visibleMonth = startOfMonth(date);
        render();
        positionPicker(state.input);
      } else {
        closePicker();
      }
      return;
    }

    const first = parseDate(state.from.value);
    if (!first || state.to.value) {
      state.from.value = key;
      state.to.value = '';
      dispatchChange(state.from);
      dispatchChange(state.to);
      render();
      positionPicker(state.anchor);
      return;
    }
    if (date.getTime() < first.getTime()) {
      state.to.value = state.from.value;
      state.from.value = key;
    } else {
      state.to.value = key;
    }
    dispatchChange(state.from);
    dispatchChange(state.to);
    closePicker();
  }

  picker.addEventListener('click', function (event) {
    const day = event.target.closest('[data-date]');
    if (day) {
      chooseDate(day.dataset.date);
      return;
    }
    const control = event.target.closest('[data-action]');
    if (!control || !state) return;
    const action = control.dataset.action;
    if (action === 'previous' || action === 'next') {
      visibleMonth = addMonths(visibleMonth, action === 'previous' ? -1 : 1);
      render();
      positionPicker(state.type === 'single' ? state.input : state.anchor);
    } else if (action === 'today') {
      chooseDate(dateKey(new Date()));
    } else if (action === 'clear') {
      if (state.type === 'range') {
        state.from.value = '';
        state.to.value = '';
        dispatchChange(state.from);
        dispatchChange(state.to);
      } else {
        state.input.value = '';
        dispatchChange(state.input);
        if (state.timeInput) {
          state.timeInput.value = '';
          dispatchChange(state.timeInput);
        }
      }
      closePicker();
    } else if (action === 'done') {
      if (state.type === 'single' && !parseDate(state.input.value)) chooseDate(dateKey(new Date()));
      closePicker();
    }
  });

  picker.addEventListener('change', function (event) {
    if (!state || state.type !== 'single' || event.target.dataset.action !== 'time') return;
    state.pendingTime = event.target.value || state.fallbackTime;
    if (state.timeInput) {
      state.timeInput.value = state.pendingTime;
      dispatchChange(state.timeInput);
      return;
    }
    const selected = parseDate(state.input.value);
    if (!selected) return;
    state.input.value = dateTimeValue(selected, state.pendingTime);
    dispatchChange(state.input);
  });

  rangeDefinitions.forEach(function (ids) {
    const from = document.getElementById(ids[0]);
    const to = document.getElementById(ids[1]);
    if (!from || !to) return;
    rangeInputs.add(from);
    rangeInputs.add(to);
    [from, to].forEach(function (input) {
      enhanceDateInput(input);
      input.readOnly = true;
      input.setAttribute('inputmode', 'none');
      input.addEventListener('pointerdown', function (event) {
        event.preventDefault();
        openRange(from, to, input);
      });
      input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openRange(from, to, input);
        }
      });
    });
  });

  document.querySelectorAll('input[type="date"], input[type="datetime-local"]').forEach(function (input) {
    if (rangeInputs.has(input)) return;
    enhanceDateInput(input);
    input.readOnly = true;
    input.setAttribute('inputmode', 'none');
    input.addEventListener('pointerdown', function (event) {
      event.preventDefault();
      openSingle(input);
    });
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openSingle(input);
      }
    });
  });

  document.addEventListener('pointerdown', function (event) {
    if (picker.hidden || picker.contains(event.target)) return;
    if (event.target.matches('input[type="date"], input[type="datetime-local"]')) return;
    closePicker();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape' || picker.hidden) return;
    event.preventDefault();
    event.stopPropagation();
    closePicker();
  }, true);
  window.addEventListener('resize', function () {
    if (!state || picker.hidden) return;
    positionPicker(state.type === 'single' ? state.input : state.anchor);
  });
  window.addEventListener('scroll', function () {
    if (!state || picker.hidden || window.innerWidth <= 700) return;
    positionPicker(state.type === 'single' ? state.input : state.anchor);
  }, true);
  window.refreshDatePickerLabels = function () {
    document.querySelectorAll('input[type="date"], input[type="datetime-local"]').forEach(updateDateDisplay);
    if (state && !picker.hidden) render();
  };
})();
