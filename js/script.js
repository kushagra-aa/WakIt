// adding all needed elements from html
const cursor = document.querySelector(".cursor img")
const score = document.querySelector(".score-val")
const highScore = document.querySelector(".high-val")
const playBtn = document.querySelector(".play-btn")
const stopBtn = document.querySelector(".stop-btn")
const holes = document.querySelectorAll(".hole")
// creating variables for game
var hole = 0;
var difficulty;
var speed = 900;
var points = 0;
var highPoints = localStorage.getItem("highScore");
var gameOn = false;
var game;
// making the functions for game
const started = (e) => {
    console.log("HREYY")
    // disabling playBtn
    playBtn.classList.add("dis-btn")
    // enabling stopBtn
    stopBtn.classList.remove("dis-btn")
    // starting the game
    gameOn = true
    game = setInterval(startGame, speed)
}
const stopped = (e) => {
    // disabling stopBtn
    stopBtn.classList.add("dis-btn")
    // enabling playBtn
    playBtn.classList.remove("dis-btn")
    // stopping the game
    stopGame()
}
function startGame() {
    let randomNo = Math.floor(Math.random() * 9)
    hole = holes[randomNo]
    hole.appendChild(img)
}
function stopGame() {
    gameOn = false
    clearInterval(game)
    hole = 0
    // adding highscore
    addHigh()
    // resetting the highscore
    points = -1
    // adding points to html
    addpoints()
}
function addHigh() {
    if (points > highPoints) {
        highPoints = points;
    }
}
function addpoints() {
    score.innerText = ++points
    localStorage.setItem("highScore", highPoints)
    highScore.innerText = localStorage.getItem('highScore')
}

// logic to add score if click on right hole
window.addEventListener("click", (e) => {
    if (gameOn && e.target === hole)
        addpoints();
})

// making an image Element
const img = document.createElement("img")
img.setAttribute("src", "assets/mole.png")
img.setAttribute("class", "mole")
// cursor img logic using window EventListener
window.addEventListener("mousemove", (e) => {
    // adding position acc to mouse movement
    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
    // adding hit animation to cursor
    window.addEventListener("click", () => {
        cursor.style.animation = "hit 0.1s ease-in-out"
        // removing hit animation
        setTimeout(() => {
            cursor.style.removeProperty("animation")
        }, 100)
    })
})
// addng event listener to playBtn
playBtn.addEventListener('click', () => { started() })
// addng event listener to stopBtn
stopBtn.addEventListener('click', () => { stopped() })
// showing scores on load 
window.onload = () => { highScore.innerText = localStorage.getItem('highScore') }
// start and stop on space press
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        console.log("space pressed")
        if (gameOn) {
            stopped()
        }
        else {
            started()
        }
    }
})