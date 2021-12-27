const menu = document.querySelector('.menu-icon')
const menuLinks = document.querySelector('.menu-links')

menu.addEventListener('click', function showMenu(event) {
  event.preventDefault()

  menuLinks.classList.toggle('display-none')
})
