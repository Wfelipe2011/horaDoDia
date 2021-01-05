function carregar() {
    let msg = document.getElementById('msg')
    let imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //Teste funcionalidade
    
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Bom dia! <br>Agora são ${hora} horas e ${min} minutos.`//
        imagem.src = 'imagens/manha.png'
        document.body.style.background = 'url("https://source.unsplash.com/1600x900/?nature")'
    }else if(hora >=12 && hora <= 18){
        msg.innerHTML = `Boa tarde!<br> Agora são ${hora} horas e ${min} minutos.`//
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = 'url("https://source.unsplash.com/1600x900/?nature")'
    }else{
        msg.innerHTML = `Boa noite! <br> Agora são ${hora} horas e ${min} minutos.`//Boa noite
        imagem.src = 'imagens/noite.png'
        document.body.style.background = 'url("https://source.unsplash.com/1600x900/?nature")'
    }
}