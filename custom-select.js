(function () {
  'use strict';

  const registry = new Map();
  const menu = document.createElement('div');
  let activeState = null;

  menu.className = 'custom-select-menu';
  menu.hidden = true;
  menu.setAttribute('role', 'listbox');
  document.body.appendChild(menu);

  function optionFor(select) {
    return select.options[select.selectedIndex] || select.options[0] || null;
  }

  function sync(state) {
    if (!state || !state.select.isConnected) return;
    const selected = optionFor(state.select);
    const label = selected ? selected.textContent : '';
    if (state.value.textContent !== label) state.value.textContent = label;
    if (state.button.disabled !== state.select.disabled) state.button.disabled = state.select.disabled;
    state.button.setAttribute('aria-disabled', String(state.select.disabled));
    state.button.setAttribute('aria-label', state.select.getAttribute('aria-label') || (selected ? selected.textContent : ''));
  }

  function closeMenu(focusButton) {
    if (!activeState) return;
    const previous = activeState;
    previous.shell.classList.remove('is-open');
    previous.button.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    menu.replaceChildren();
    activeState = null;
    if (focusButton && previous.button.isConnected) previous.button.focus();
  }

  function positionMenu(state) {
    const rect = state.button.getBoundingClientRect();
    menu.style.minWidth = Math.max(62, rect.width) + 'px';
    menu.style.left = '8px';
    menu.style.top = '8px';
    menu.style.visibility = 'hidden';
    menu.hidden = false;
    const menuRect = menu.getBoundingClientRect();
    const left = Math.max(8, Math.min(rect.left, window.innerWidth - menuRect.width - 8));
    const below = rect.bottom + 7;
    const top = below + menuRect.height <= window.innerHeight - 8 ? below : Math.max(8, rect.top - menuRect.height - 7);
    menu.style.left = left + 'px';
    menu.style.top = top + 'px';
    menu.style.visibility = 'visible';
  }

  function focusOption(direction) {
    const options = Array.from(menu.querySelectorAll('.custom-select-option:not(:disabled)'));
    if (!options.length) return;
    const current = document.activeElement;
    let index = options.indexOf(current);
    if (index < 0) {
      index = options.findIndex(function (option) { return option.classList.contains('is-selected'); });
      if (index < 0) index = 0;
    } else {
      index = (index + direction + options.length) % options.length;
    }
    options[index].focus();
  }

  function openMenu(state) {
    if (!state || state.select.disabled) return;
    if (activeState === state) {
      closeMenu(true);
      return;
    }
    closeMenu(false);
    sync(state);
    activeState = state;
    state.shell.classList.add('is-open');
    state.button.setAttribute('aria-expanded', 'true');
    menu.replaceChildren();

    Array.from(state.select.options).forEach(function (option, index) {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'custom-select-option' + (index === state.select.selectedIndex ? ' is-selected' : '');
      item.textContent = option.textContent;
      item.dataset.optionIndex = String(index);
      item.disabled = option.disabled;
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', String(index === state.select.selectedIndex));
      menu.appendChild(item);
    });
    positionMenu(state);
    const selected = menu.querySelector('.is-selected:not(:disabled)') || menu.querySelector('.custom-select-option:not(:disabled)');
    if (selected) selected.focus({ preventScroll: true });
  }

  function upgrade(select) {
    if (!(select instanceof HTMLSelectElement) || select.multiple || select.size > 1 || select.classList.contains('custom-select-native')) return;
    const shell = document.createElement('span');
    const button = document.createElement('button');
    const value = document.createElement('span');
    const originalClasses = Array.from(select.classList);

    shell.className = 'custom-select-shell';
    originalClasses.forEach(function (className) { shell.classList.add(className); });
    button.type = 'button';
    button.className = 'custom-select-button';
    button.setAttribute('aria-haspopup', 'listbox');
    button.setAttribute('aria-expanded', 'false');
    value.className = 'custom-select-value';
    button.appendChild(value);

    select.parentNode.insertBefore(shell, select);
    shell.append(select, button);
    select.classList.add('custom-select-native');
    select.tabIndex = -1;
    select.setAttribute('aria-hidden', 'true');

    const state = { select: select, shell: shell, button: button, value: value };
    registry.set(select, state);
    sync(state);
    select.addEventListener('change', function () { sync(state); });
    button.addEventListener('click', function () { openMenu(state); });
    button.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openMenu(state);
      }
    });
  }

  function upgradeWithin(root) {
    if (root instanceof HTMLSelectElement) upgrade(root);
    if (root.querySelectorAll) root.querySelectorAll('select').forEach(upgrade);
  }

  function syncAll() {
    registry.forEach(function (state, select) {
      if (!select.isConnected) {
        registry.delete(select);
        if (activeState === state) closeMenu(false);
      } else {
        sync(state);
      }
    });
  }

  menu.addEventListener('click', function (event) {
    const option = event.target.closest('[data-option-index]');
    if (!option || !activeState) return;
    const select = activeState.select;
    const nextIndex = Number(option.dataset.optionIndex);
    if (!Number.isInteger(nextIndex) || !select.options[nextIndex] || select.options[nextIndex].disabled) return;
    const changed = select.selectedIndex !== nextIndex;
    select.selectedIndex = nextIndex;
    sync(activeState);
    closeMenu(true);
    if (changed) {
      select.dispatchEvent(new Event('input', { bubbles: true }));
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });

  document.addEventListener('pointerdown', function (event) {
    if (!activeState || menu.contains(event.target) || activeState.shell.contains(event.target)) return;
    closeMenu(false);
  });
  document.addEventListener('keydown', function (event) {
    if (!activeState) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      closeMenu(true);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusOption(1);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusOption(-1);
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      const options = menu.querySelectorAll('.custom-select-option:not(:disabled)');
      if (options.length) options[event.key === 'Home' ? 0 : options.length - 1].focus();
    } else if (event.key === 'Tab') {
      closeMenu(false);
    }
  }, true);
  window.addEventListener('resize', function () { closeMenu(false); });
  window.addEventListener('scroll', function () { closeMenu(false); }, true);

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1) upgradeWithin(node);
      });
    });
    requestAnimationFrame(syncAll);
  });
  observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled', 'hidden', 'lang'] });

  upgradeWithin(document);
  window.refreshCustomSelects = syncAll;
})();
