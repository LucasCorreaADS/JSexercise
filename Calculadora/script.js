let coefA = document.getElementById('coefA')
let coefB = document.getElementById('coefB')
let coefC = document.getElementById('coefC')
let res = document.getElementById('res')

function detectorErros(detector){
    if (coefA.value.length == 0 || coefB.value.length == 0 || coefC.value.length == 0) {
        alert('burro')
    }
}

function calcular() {
    detectorErros()

    let a = Number.parseInt(coefA.value)
    let b = Number.parseInt(coefB.value)
    let c = Number.parseInt(coefC.value)
   
    let delta = (b**2) - (4 * a * c)
    if (delta < 0) {
        res.innerHTML = 'A equação não possui raiz real'
    } else {
        var x1 = (-b + Math.sqrt(delta)) / (2*a)
        var x2 = (-b - Math.sqrt(delta)) / (2*a)
    }
    
    res.innerHTML = `o resultado é ${x1} e ${x2} `
}