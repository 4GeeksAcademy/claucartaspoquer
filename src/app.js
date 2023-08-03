/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

window.onload = function cartasAleatorias() {
  function cartas() {
    let palos = ["♦", "♥", "♠", "♣"];
    let numeros = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let palosIndex = palos[Math.floor(Math.random() * palos.length)];
    let numerosIndex = numeros[Math.floor(Math.random() * numeros.length)];
    console.log(palosIndex, numerosIndex);
    document.getElementById("numero").innerHTML = numerosIndex;
    document.getElementById("palo").innerHTML = palosIndex;
    document.getElementById("palo2").innerHTML = palosIndex;

    // cambiar color palo y palos

    if (palosIndex == "♦" || palosIndex == "♥") {
      // console.log("palo");
      document.getElementById("palo").className =
        "card-title text-start text-danger";
      document.getElementById("palo2").className =
        "card-title text-end text-danger";
      document.getElementById("numero").className =
        "card-title text-center text-danger";
    } else {
      document.getElementById("palo").className =
        "card-title text-start text-dark";
      document.getElementById("palo2").className =
        "card-title text-end text-dark";
      document.getElementById("numero").className =
        "card-title text-center text-dark";
    }
  }
  cartas();
  document.getElementById("boton").addEventListener("click", cartas);
  setTimeout(cartas, 5000);
};
