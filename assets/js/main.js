'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback)
    }
  } else {
    elem.addEventListener(type, callback)
  }
}

/*===========NAVBAR abri e fechar quando clicar no icon==========*/
const navbar = document.querySelector('[data-navbar]')
const navTrocar = document.querySelectorAll('[data-nav-trocar]')
const overlay = document.querySelector('[data-overlay]')

const trocarNavbar = function () {
    navbar.classList.toggle('ativa')
    overlay.classList.toggle('ativa')
}

addEventOnElem(navTrocar, 'click', trocarNavbar)

/*===========NAVBAR  fechar quando clicar num item==========*/
const navLink = document.querySelectorAll('[data-nav-link]')

const fecharNavbar = function () {
  navbar.classList.remove('ativa')
  overlay.classList.remove('ativa')
}

addEventOnElem(navLink, 'click', fecharNavbar)

/*===========Mudar o header da pagina quando der scroll==========*/

const header = document.querySelector('[data-header]')

const headerActivar = function () {
  window.scrollY > 100
    ? header.classList.add('ativa')
    : header.classList.remove('ativa')
}

addEventOnElem(window, 'scroll', headerActivar)


const backToTopButton = document.querySelector('.voltar-topo')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
