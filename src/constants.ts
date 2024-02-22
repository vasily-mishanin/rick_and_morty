export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const NAV_LINKS = [
  { to: 'characters', label: 'Персонажи', type: 'public' },
  { to: 'signin', label: 'Войти', type: 'auth' },
  { to: 'signup', label: 'Регистрация', type: 'auth' },
  { to: 'profile', label: 'Профиль', type: 'private' },
];
