const holeHasMole = document.getElementsByClassName('hole_has-mole')
const holes = document.querySelectorAll('.hole')
const dead = document.getElementById('dead')
const lost = document.getElementById('lost')


holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.classList.contains('hole_has-mole')) {
            dead.innerText++
            hole.classList.remove('hole_has-mole')
        } else {
            lost.innerText++
        }

        if (dead.innerText > 9) {
            console.log(dead.innerText)
            alert('Победа)')
            dead.innerText = 0
            lost.innerText = 0
        }

        if (lost.innerText > 4) {
            alert('Поражение(')
            dead.innerText = 0
            lost.innerText = 0
        }
    })
});