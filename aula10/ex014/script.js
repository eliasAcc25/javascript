
function carregar() {
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        //  BOM DIA 
        img.src = 'imagens/manha.jpg'
        document.body.style.background = 'linear-gradient(to bottom, #87CEEB, #85e795)'
    } else if (hora >= 12 && hora <= 18) {
        //  BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'linear-gradient(to bottom, #ee8f1b, #e9ce34)'
    } else {
        //  BOA NOITE
        img.src = 'imagens/noite.jpg'
        document.body.style.background = 'linear-gradient(to bottom, #0a0a2e, #1a1a4e)'
    }
}

function atualizarRelogio() {
    
    var msg = document.getElementById('msg')
    var agora = new Date()
    var h = String(agora.getHours()).padStart(2, '0')
    var m = String(agora.getMinutes()).padStart(2, '0')
    var s = String(agora.getSeconds()).padStart(2, '0')
    msg.innerHTML = `${h}:${m}:${s}`
}

carregar()
atualizarRelogio()
setInterval(atualizarRelogio, 1000)