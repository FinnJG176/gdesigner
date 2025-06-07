const themeSelector = document.getElementById("theme");
const holes = document.querySelectorAll('.hole');
const body = document.body;
const start = document.getElementById("start");
const timeText = document.getElementById("time");
const score = document.getElementById("score");
const selectedMole = document.getElementById("selected-mole")
const tick = new Audio('snd/ticktock.mp3');

let timer;
let moleTimer;
let currentTime = 30;
let currentScore = 0;

function startGame() {
    currentTime = 30;
    currentScore = 0;
    timeText.textContent = currentTime;
    score.textContent = currentScore;
    
    clearInterval(timer);
    clearInterval(moleTimer);

    timer = setInterval(countDown, 1000);
    moleTimer = setInterval(showMole, 1500);

}

function countDown() {
    currentTime--;
    timeText.textContent = currentTime;
    tick.play();
    playbackRate(1)
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
    hole.addEventListener('click', (event) => {
    // check if the hole clicked on has show in the classlist
    // this means theres a mole in the hole
        console.log("click")
        const clicked = event.target;
        if (clicked.classList.contains('mole')) {
            currentScore++;
            console.log("currentScore", currentScore)
            score.textContent = currentScore;
            clicked.remove()
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

// moleSelector.addEventListener

start.addEventListener('click', startGame)
