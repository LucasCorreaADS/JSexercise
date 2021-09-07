let coefA = document.getElementById('coefA')
let coefB = document.getElementById('coefB')
let coefC = document.getElementById('coefC')
let res = document.getElementById('res')
let x1 = 0
let x2 = 0

function detectorErros(detector){
    if (coefA.value.length == 0 || coefB.value.length == 0 || coefC.value.length == 0) {
        alert('[ERROR] Valores inválidos')
        return true
    }
}

function calcular(event) {
    if (detectorErros()) {
        event.preventDefault()
    }
    bhaskara(coefA, coefB, coefC)
    res.innerHTML = `O resultado é S = {${x1}, ${x2}} `
}

function bhaskara(a, b, c) {
    
    a = Number.parseInt(coefA.value)
    b = Number.parseInt(coefB.value)
    c = Number.parseInt(coefC.value)
   
    let delta = (b**2) - (4 * a * c)
    if (delta < 0) {
        res.innerHTML = 'A equação não possui raiz real'
    } else {
        x1 = ((-b + Math.sqrt(delta)) / (2*a)).toFixed(4)
        x2 = ((-b - Math.sqrt(delta)) / (2*a)).toFixed(4)
    }
    
}