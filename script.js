//

let prato;

function getFrango() {
  document.getElementById("frango").style.borderColor = "green";
  document.getElementById("bisteca").style.borderColor = "white";
  prato = "Frango";
}

function getBisteca() {
  document.getElementById("bisteca").style.borderColor = "green";
  document.getElementById("frango").style.borderColor = "white";
}

function getCoca() {
  document.getElementById("coca").style.borderColor = "green";
  document.getElementById("pepsi").style.borderColor = "white";
}

function getPepsi() {
  document.getElementById("pepsi").style.borderColor = "green";
  document.getElementById("coca").style.borderColor = "white";
}

function getSorvete() {
  document.getElementById("sorvete").style.borderColor = "green";
  document.getElementById("mousse").style.borderColor = "white";
}

function getMousse() {
  document.getElementById("mousse").style.borderColor = "green";
  document.getElementById("sorvete").style.borderColor = "white";
}
