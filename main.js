function atualizarPage(){
    const hora = new Date().getHours().toString().padStart(2, '0')
    const minuto = new Date().getMinutes().toString().padStart(2, '0')
    const horario = `${hora}:${minuto}`
    const body = document.body

    const span = document.querySelector('.horario')
    span.innerHTML = horario

    let imagem = ''

    if(hora >= 5 && hora <= 12){
        imagem = 'assets/bom-dia.jpg'
        body.style.backgroundColor = '#3c77c0'
    } else if (hora >= 13 && hora <= 19) {
        imagem = 'assets/boa-tarde.jpg'
        body.style.backgroundColor = '#f39e01'
    } else if (hora >= 20 || hora <= 4){
        imagem = 'assets/boa-noite.jpg'
        body.style.backgroundColor = '#050d31'
    } else {
        return
    }

    if(hora > 2 && hora < 4){
        imagem = 'assets/demon.jpg'
        body.style.backgroundColor = '#091111'
    }

    const photo = document.querySelector('.photo')
    photo.src = imagem
}

atualizarPage()
setInterval(atualizarPage, 10000)