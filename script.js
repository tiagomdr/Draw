const BotaoSorteio = document.querySelector('button')

BotaoSorteio.addEventListener('click', () => {
        const min = Number(document.querySelector('.min').value)
        const max = Number(document.querySelector('.max').value)
        const input = document.querySelector('input')
        const resultado = document.querySelector('.resultado')  

        const GerarNumeroAleatorio = Math.floor(Math.random() * (max - min + 1) + 1)

        if(input.value === "") {
           return alert('🧑‍💻 Por favor, preencha os valores abaixo')
            
        }

        if(min > max) {
            return alert('O valor "Entre" precisa ser menor que valor "e"\nExemplo: 1 a 100')
            
        }

        resultado.innerHTML = GerarNumeroAleatorio
        resultado.style.visibility = "visible"
        resultado.style.transform = "translateX(0px)"
        resultado.style.transition = "transform 0.9s ease"

})

const player = document.getElementById("player");
const playBtn = document.getElementById("playBtn");
let tocando = false;

playBtn.addEventListener("click", () => {
    if (!tocando) {
        player.play();
        playBtn.textContent = "⚡"; // muda o ícone para pausa
        tocando = true;
    } else {
        player.pause();
        playBtn.textContent = "⚡"; // volta para o ícone de música
        tocando = false;
    }
});