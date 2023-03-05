// NAVBAR
const btn_navbar = document.querySelector('#navbar-toggle-btn')
const content_navbar = document.querySelector('#nav-content')
const checkbox_dark_mode = document.querySelector('#dark-mode')
const body = document.querySelector('body')

// show/hide nav-content
btn_navbar.addEventListener('click', (e) => {
    content_navbar.classList.toggle('show-content')
})

// dark/light mode initial value
if (localStorage.getItem('dark-mode')) {
    body.classList.add('dark-mode')
    checkbox_dark_mode.checked = true
} else {
    body.classList.remove('dark-mode')
    checkbox_dark_mode.checked = false
}

// dark/light mode change
checkbox_dark_mode.addEventListener('change', (e) => {
    checkbox_dark_mode.toggleAttribute('checked')

    if (checkbox_dark_mode.checked) {
        body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'on')
    } else {
        body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', '')
    }
})