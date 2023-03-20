import cipher from "./cipher.js"

const cripto = document.getElementById("criptografar");
const decripto = document.getElementById("descriptografar");
const input = document.getElementById("input-text")
const offset = document.getElementById("offset")
const resultado = document.getElementById("resultado")

function codificar() {
  const textoCodificado = cipher.encode(input.value,offset.value)
  resultado.innerHTML = textoCodificado
}

function decodificar() {
  const textoDecodificado = cipher.decode(input.value,offset.value)
  resultado.innerHTML = textoDecodificado
}

cripto.addEventListener("click", codificar);
decripto.addEventListener("click", decodificar);