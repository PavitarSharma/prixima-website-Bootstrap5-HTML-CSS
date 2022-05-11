let nav = document.querySelectorAll('.nav-link');
let contactBtn = document.querySelector('.contact')

let navCollapse = document.querySelector('.navbar-collapse.collapse');

nav.forEach(a => {
    a.addEventListener('click', () => {
        navCollapse.classList.remove('show')
    })
})

contactBtn.addEventListener('click', () => {
    navCollapse.classList.remove('show')
})

