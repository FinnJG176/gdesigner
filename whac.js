const themeSelector = document.getElementById("theme");
const body = document.body;

themeSelector.addEventListener('change', (event)=> {
    const selectedTheme = event.target.value;

    body.classList.remove('classic', 'hp');
    body.classList.add(selectedTheme);
});