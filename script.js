//

let prato;
let bebida;
let sobremesa;

function getHamburger() {
  document.getElementById("hamburger").style.borderColor = "green";
  document.getElementById("bisteca").style.borderColor = "white";
  prato = "Hamburger";
}

function getBisteca() {
  document.getElementById("bisteca").style.borderColor = "green";
  document.getElementById("hamburger").style.borderColor = "white";

  prato = "Bisteca";
}

function getCoca() {
  document.getElementById("coca").style.borderColor = "green";
  document.getElementById("pepsi").style.borderColor = "white";

  bebida = "Coca";
}

function getPepsi() {
  document.getElementById("pepsi").style.borderColor = "green";
  document.getElementById("coca").style.borderColor = "white";

  bebida = "Pepsi";
}

function getSorvete() {
  document.getElementById("sorvete").style.borderColor = "green";
  document.getElementById("mousse").style.borderColor = "white";

  sobremesa = "Sorvete";
}

function getMousse() {
  document.getElementById("mousse").style.borderColor = "green";
  document.getElementById("sorvete").style.borderColor = "white";

  sobremesa = "Mousse";
}

function finalizarPedido() {
  let mensagem;
  mensagem =
    "Olá, gostaria de pedir um combo: " +
    prato +
    ", " +
    bebida +
    " e " +
    sobremesa;

  window.open("https://wa.me/+71991826903?text=" + mensagem);
}
