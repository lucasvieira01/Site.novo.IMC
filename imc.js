function calcular() {
    var altura = window.document.querySelector("input#altura")
    var peso = window.document.querySelector("input#peso")
    var resultado = document.querySelector("span#res")
    var texto = document.getElementById("indice")
    var alturaf = Number(altura.value)
    var pesof = Number(peso.value)
    var resultadof = pesof / (alturaf**2)
    resultado.innerHTML = `Seu IMC é ${resultadof.toFixed(2)}`
    if (resultadof < 18.5) {  
        texto.innerHTML = "Você está no índice de Magreza"
    }
    if (resultadof <= 24.9 && resultadof > 18.5) {
        texto.innerHTML = "Você está no índice Normal"
    }
    if (resultadof <= 29.9 && resultadof > 24.9) {
        texto.innerHTML = "Você está no índice de Sobrepeso"
    }
    if (resultadof <= 39.9 && resultadof > 29.9) {
        texto.innerHTML = "Você está no índice de Obesidade"
    }
    if (resultadof >= 40 && resultadof > 39.9) {
        texto.innerHTML = "Você está no índice de Obesidade Grave"
    }
}
