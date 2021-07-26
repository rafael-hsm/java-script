document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLocaleLowerCase()); //captura a tecla digitada no html e converte para miniúscula
});

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;

    if(song !=='') {
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`) //para selecionar o audio pelo id confome digitamos
    
    if(audioElement) {
        audioElement.currentTime = 0; //para reiniciar o som ao teclar antes dele terminar.
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add(`active`); //para marcar a tecla pressionada.

        setTimeout(()=>{
            keyElement.classList.remove(`active`);
        }, 300) //para remover a marcação da tecla pressionada
    }
}

function playComposition(songArray) {
    let wait = 0;
    
    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250;
    }
}