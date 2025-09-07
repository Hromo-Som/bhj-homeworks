const tabsContent = Array.from(document.querySelectorAll('.tab__content'))
const tabs = Array.from(document.querySelectorAll('.tab'))

const removeActiveTab = () => {
    for (let tab of tabs) {
        tab.classList.remove('tab_active')
    }

    for (let item of tabsContent) {
        item.classList.remove('tab__content_active')
    }
}

for (let tab of tabs) {
    tab.addEventListener('click', () => {
        removeActiveTab()
        tab.classList.add('tab_active')
        tabsContent[tabs.indexOf(tab)].classList.add('tab__content_active')
    })
}