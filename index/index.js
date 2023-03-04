const btn_navbar = document.querySelector('#navbar-toggle-btn')
const content_navbar = document.querySelector('#nav-content')

btn_navbar.addEventListener('click', (e) => {
    content_navbar.classList.toggle('show-content')
})

