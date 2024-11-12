let titulo1 = document.querySelector('h1')
let paragrafo = document.getElementById('texto')
let pai = document.querySelector('body')


titulo1.style.fontSize='80px'
titulo1.style.fontFamily='arial'


let filho = document.createElement('img')

filho.src='https://www.sescsp.org.br/wp-content/uploads/2024/03/scorsese.jpeg';

filho.classList.add('imagem_editada')
pai.appendChild(filho)

console.log(pai.textContent)


let pailiso = document.querySelector('ul')

let fiio = document.createElement('li')
fiio.innerText='Madagascar'

let fiio2 = document.createElement('li')
fiio2.innerText='As branquelas'

let fiio3 = document.createElement('li')
fiio3.innerText='Em ritmo de fuga'

let fiio4 = document.createElement('li')
fiio4.innerText='Mulher rei'

pailiso.appendChild(fiio)
pailiso.appendChild(fiio2)
pailiso.appendChild(fiio3)
pailiso.appendChild(fiio4)