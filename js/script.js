const cursor = document.querySelector(".cursor img")
const score = document.querySelector(".score-val")
const highScore = document.querySelector(".high-val")
const playBtn = document.querySelector(".play-btn")
const stopBtn = document.querySelector(".stop-btn")
const holes = document.querySelectorAll(".hole")
const img = document.createElement("img")
img.setAttribute("src", "./assets/mole")
img.setAttribute("class", "mole")
// cursor img logic using window EventListener
window.addEventListener("mousemove", (e) => {
    // adding position acc to mouse movement
    cursor.style.top = e.pageY + "px"
    cursor.style.left = e.pageX + "px"
    // adding hit animation to cursor
    window.addEventListener("click", () => {
        cursor.style.animation = "hit 0.2s ease-in-out"
        // removing hit animation
        setTimeout(() => {
            cursor.style.removeProperty("animation")
        }, 200)
    })
})

