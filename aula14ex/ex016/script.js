function contar() {
    let inicio = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let passo = document.getElementById('txtp').value
    let res = document.getElementById('res')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else
        res.innerHTML = 'Contando: <br>'

    let i = Number(inicio)
    let f = Number(fim)
    let p = Number(passo)
    if (i < f) {
        //CONTAGEM CRESCENTE
        for (let c = i; c <= f; c += p) {
         res.innerHTML += ` ${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
    } else {
        //CONTAGEM REGRESSIVA
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
