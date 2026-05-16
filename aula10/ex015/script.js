function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                
                img.setAttribute('src', 'bebe masc.jpg')
            } else if(idade < 21) {
                
                img.setAttribute('src', 'jovem homem.jpg')
            } else if(idade < 60) {
                
                img.setAttribute('src', 'adulto homem.jpg')
            } else {
                
                img.setAttribute('src', 'idoso homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade < 10) {
                
                img.setAttribute('src', 'bebe fem.jpg')
            } else if(idade < 21) {
                
                img.setAttribute('src', 'jovem mulher.jpg')
            } else if(idade < 60) {
                
                img.setAttribute('src', 'adulto mulher.jpg')
            } else {
                
                img.setAttribute('src', 'idoso mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.style.backgroundColor = '#384bf3';
        res.style.color = 'white';
        res.innerHTML = 'Você é ' + genero + ' e tem ' + idade + ' anos.'
        res.appendChild(img)
}
}
