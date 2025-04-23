const themeSelector = document.getElementById("theme");
const holes = document.querySelectorAll('.hole');
const body = document.body;

themeSelector.addEventListener('change', (event)=> {
    const selectedTheme = event.target.value;

    body.classList.remove('easterspecial', 'hp', 'skywalker');
    body.classList.add(selectedTheme);
});

function showMole() {
    // randomhole 
    const randomhole = holes[Math.floor(Math.random() * holes.length)];
    // query the mole from css check if the hole already have a mole
    if (!randomhole.querySelector('.mole')) {
        // we create an new html element 
        const mole = document.createElement('div');
        // add it to our class list
        mole.classList.add('mole', 'show');
        // add it to random hole 
        randomhole.appendChild(mole);

        // set a timeout to remove the mole element after 
        setTimeout(() => {
            mole.remove();
        }, 1000)
    }
}