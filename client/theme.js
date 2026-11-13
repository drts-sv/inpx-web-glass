// Тема оформления: light / dark / auto (по системе).
// Значение хранится в localStorage, ставится атрибутом на <body>,
// CSS-переменные живут в theme.css.

const KEY = 'inpx-theme';

function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function currentTheme() {
    return document.body.dataset.theme || systemTheme();
}

export function applyTheme(theme) {
    if (theme === 'light' || theme === 'dark')
        document.body.dataset.theme = theme;
    else
        delete document.body.dataset.theme;

    document.documentElement.style.colorScheme = currentTheme();
}

export function initTheme() {
    applyTheme(localStorage.getItem(KEY) || '');
}

export function toggleTheme() {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    applyTheme(next);
    return next;
}

window.inpxToggleTheme = toggleTheme;
