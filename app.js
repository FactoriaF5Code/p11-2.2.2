let pulsador = document.getElementById("pulsador");

pulsador.onclick = function() {
    pulsador.classList.toggle("clicked");
    document.querySelector("section").classList.toggle("clicked")
}