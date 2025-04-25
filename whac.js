const themeSelector = document.getElementById("theme");
const holes = document.querySelectorAll('.hole');
const body = document.body;
const start = document.getElementById("start");
const timeText = document.getElementById("time");
let timer;
let moleTimer;
let currentTime = 30;
let score = 0;
function startGame() {
    currentTime = 30;
    timeText.textContent = currentTime;
    
    clearInterval(timer);
    clearInterval(moleTimer);

    timer = setInterval(countDown, 1000);
    moleTimer = setInterval(showMole, 1500);
}

function countDown() {
    currentTime--;
    timeText.textContent = currentTime;
    if (currentTime === 0 ){
        clearInterval(timer);
        clearInterval(moleTimer);
        // add prnt score
    }

}

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
// go through each hole
holes.forEach(hole => {
    hole.addEventListener('click', () => {
    // check if the hole clicked on has show in the classlist
    // this means theres a mole in the hole
        if (hole.classList.contains('show')) {
            score ++ ;
            // update score text
            hole.classList.remove("show");
        }
    })
})

// hw finish themes & score update onscreen
// opt. hammer/sound effects

// if so clear the mole and increase the score

themeSelector.addEventListener('change', (event)=> {
    const selectedTheme = event.target.value;

    body.classList.remove('lordmole','easterspecial', 'hp', 'skywalker','pixel' );
    body.classList.add(selectedTheme);
});

start.addEventListener('click', startGame)
