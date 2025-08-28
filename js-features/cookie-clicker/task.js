const clickerCounter = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
const clickerSpeed = document.getElementById('clicker__speed')

const getSpeed = (time) => {
    let current = new Date()
    let speed = 1 / ((current - time) / 1000)
    return speed
}

let time = new Date()

cookie.addEventListener('click', () => {
    setTimeout(() => {new Date() - time > 3000 ? clickerSpeed.innerText = 0 : null}, 3000)
    clickerCounter.innerText++
    cookie.width = '250'
    clickerSpeed.innerText = getSpeed(time).toFixed(2)
    time = new Date()
    setTimeout(() => {cookie.width = '200'}, 50)
})