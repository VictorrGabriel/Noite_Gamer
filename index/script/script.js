/* alert(
  'Este site ainda está em etapa de desenvolvimento, estamos apenas testando, se quisar pode nos ajudar reportando erros. Obrigado!'
); */

const h1 = document.getElementById('page-title');

function hiddenTitle() {
  /* if (document.body.scrollWidth > 100) {
    h1.style.visibility = 'hidden';
  } */

  console.log(
    document.querySelector('main').scrollTop,
    document.body.scrollTop
  );
}

hiddenTitle();
