function chamarMenu() {
  let caixaMenu = document.querySelector('div#caixa_hiddenMenu');
  let menu = document.querySelector('div#hiddenMenu');
  caixaMenu.style.display = 'block';
  menu.style.paddingBottom = '20px';
}

function esconderMenu() {
  let caixaMenu = document.querySelector('div#caixa_hiddenMenu');
  let menu = document.querySelector('div#hiddenMenu');
  caixaMenu.style.display = 'none';
}
