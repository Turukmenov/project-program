// HW 1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9]{6,30}([.][a-zA-Z0-9]+)*@gmail\.com$/

gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
})

// HM 2

const child = document.querySelector('.child_block')
let positionX = 0
let positionY = 0
const aliveSquare = () => {
    if( positionX <= 446 && positionY === 0){
        positionX++
        child.style.left = positionX + 'px'
    }else if(positionY <= 446 && positionX >= 0){
        positionY++
        child.style.top = positionY + 'px'
    }else if (positionX >= 0) {
        positionX--
        child.style.left = positionX + 'px'
    }else if (positionY >= 0) {
        positionY--
        child.style.top = positionY + 'px'
    }
    setTimeout( aliveSquare, 1)
}
aliveSquare()


//-----------------------------------------------------------------------------------
const secondsS = document.getElementById("secondsS")
const startButton = document.getElementById("start")
const stopButton = document.getElementById("stop")
const resetButton = document.getElementById("reset")

let timer
let seconds = 0
function updateTimer() {
  seconds++
  secondsS.textContent = String(seconds).padStart(2, "0")
}

startButton.addEventListener("click", function() {
  if (!timer) {
    timer = setInterval(updateTimer, 1000);
  }
})

stopButton.addEventListener("click", function() {
  clearInterval(timer)
  timer = null
})

resetButton.addEventListener("click", function() {
  clearInterval(timer)
  timer = null
  seconds = 0
  secondsS.textContent = "00"
})


// HW 2
