const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('.theme-switch__toggle');
themeSwitchToggle.addEventListener('change', onThemeSwitchToggle);
const item = localStorage.getItem('theme');
document.body.classList.add(item);

// const checkInput = themeSwitchToggle.checked;

if (item === Theme.DARK) {
  themeSwitchToggle.checked = true;
};

export function onThemeSwitchToggle(e) {

  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    const dark = localStorage.getItem('theme')

    document.body.classList.toggle(dark);
    document.body.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    const light = localStorage.getItem('theme');
    document.body.classList.toggle(light);
    document.body.classList.remove(Theme.DARK);
  };
};