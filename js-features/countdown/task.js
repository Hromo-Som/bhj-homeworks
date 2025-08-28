const timer = document.getElementById('timer')
let value = timer.innerText
const hhmmss = () => new Date(value * 1000).toISOString().slice(11, 19)
timer.innerText = hhmmss()


const countDown = () => {
    if (value > 0) {
        value --
        hhmmss()
        timer.innerText = hhmmss()
    } else {
        alert ('Вы победили в конкурсе!')
        window.location.href = 'https://browser.yandex.ru/download?from=link_serp_neYaBro_plus&utm_medium=link&utm_source=serp&banerid=0402004931&yclid=13761243677521346559&os=win&bitness=64&statpromo=true&darktheme=1&portal_testids=1114258%2F-1%2C1114347%2F-1%2C1124063%2F-1%2C1127618%2F-1%2C1176504%2F-1&signature=mEzMtNyNVo0Jk0Pi%2Fq1uNrmwOwCA83PZHathLYCZ%2BDrZ9p2Adba6uvycvFwzkpGu%2FSp%2F7ssAb1f2KmGvMmwXzg%3D%3D'
        clearInterval(interval)
    }
}

let interval = setInterval(countDown, 1000)