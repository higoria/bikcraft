// links menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ativaçao orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametros) {
  const elemento = document.getElementById(parametros);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// galeria de bicicletas

const galeria = document.querySelectorAll(".imagens-nimbus img");
const galeriaConteiner = document.querySelector(".imagens-nimbus");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width:1000px)").matches;
  if (media) {
    galeriaConteiner.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// animaçao

if (window.SimpleAnime) {
  new SimpleAnime();
}
