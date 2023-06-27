// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)


frases = 
    ["Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu." , 
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão." , 
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Siga os bons e aprenda com eles.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "Quem quer colher rosas tem de estar preparado para suportar os espinhos."
    ]

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// funções
function handleTryClick(event) {
    event.preventDefault() // nao faca o padrão
    
    
    toggleScreen()

        if (randomNumber == 0 || randomNumber < frases.length) {
        screen2.querySelector("p").innerText = frases[(randomNumber)]
      
        }
        else {
            randomNumber = Math.round(Math.random() * 10)
        }

   
    
    
}

function handleResetClick() {
    toggleScreen()
   
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}