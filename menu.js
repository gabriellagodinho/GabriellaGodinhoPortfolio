document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const listaHamburguer = document.querySelector('.menu-hamburguer__lista');
    const iconeHamburguer = document.querySelector('.menu-hamburguer__icone');

    menuHamburguer.addEventListener('click', function () {
        listaHamburguer.classList.toggle('menu-hamburguer__ativo');
        iconeHamburguer.classList.toggle('menu-hamburguer__icone-ativo');
    });
});
