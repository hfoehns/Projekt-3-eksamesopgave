const menubutton = document.querySelector('.menu button')
menubutton.addEventListener('click',showmenu)

function showmenu() {
    document.querySelector('.menu ul').classList.toggle('show-menu')
}