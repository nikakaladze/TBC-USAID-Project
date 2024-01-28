const ul = document.querySelector('nav ul')
const nav = document.querySelector('nav')
const closeBtn = document.querySelector('.close i')


window.addEventListener('click', (event) => {
    if(!nav.contains(event.target) || event.target === closeBtn) {
         closeMenu()
    } else {
        ul.classList.add('active')
    }
})
function closeMenu() {
    ul.classList.remove('active')
}