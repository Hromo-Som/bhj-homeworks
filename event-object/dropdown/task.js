const dropdown = document.querySelector('.dropdown')
const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'))

dropdown.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active')
})

for (let item of dropdownLink) {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        dropdownValue.innerText = item.innerText
    })
}