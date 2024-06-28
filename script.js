let audios = [
    {caminho: 'audios/cavalo-ratinho.mp3',
     legenda: 'CAVALO',   
    },
    {caminho: 'audios/comedy.mp3',
    legenda: 'COMEDY',   
    },
    {caminho: 'audios/ele-goooooooooooooosta.mp3',
    legenda: 'ELE GOSTA',   
    },
    {caminho: 'audios/eu-quero-e-transar.mp3',
    legenda: 'EU QUERO',   
    },
    {caminho: 'audios/nao-e-o-pai.mp3',
    legenda: 'NAO E O PAI',   
    },
    {caminho: 'audios/pare.mp3',
    legenda: 'PARE',   
    },
    {caminho: 'audios/que-viadao-bonito.mp3',
    legenda: 'VIADAO',   
    },
    {caminho: 'audios/uepa.mp3',
    legenda: 'UEPA',   
    },
    {caminho: 'audios/xaropinho-rapaz.mp3',
    legenda: 'XAROPINHO',   
    },
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p')

for (let i=0; i< 9; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item',i);
}

let audioTag = document.querySelector('audio')

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')]
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        })
    })
})