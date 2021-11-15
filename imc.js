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
    if (resultadof <= 34.9 && resultadof > 29.9) {
        texto.innerHTML = "Você está no índice de Obesidade Grau I"
    }
    if (resultadof <= 39.9 && resultadof > 35)  {
        texto.innerHTML  = "Você está no índice de Obesidade Grau II"
    }
    if (resultadof >= 40 && resultadof > 39.9) {
        texto.innerHTML = "Você está no índice de Obesidade Grau III (Obesidade mórbida)"
    }
}
var a = window.document.querySelector('input#botaocalcular')
    a.addEventListener('click', clicar)
var b = window.document.getElementById('res')
var c = window.document.getElementById('indice')

function clicar() {
        b.style.color = 'blue'
        b.style.fontSize = '1.3em'
        c.style.color = 'blue'
        c.style.fontSize = '1.3em'
        c.style.fontWeight = 'bold'
    }

function limpar() {
    var altura = document.getElementById('altura')
    var peso = document.getElementById('peso')

    altura.innerHTML = ''
    peso.innerHTML= ''
}