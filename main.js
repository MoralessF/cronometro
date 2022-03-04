let segundos=0;
let minutos=0;

const segundosTag=document.getElementById('segundos');
const minutosTag=document.getElementById('minutos');

const botonStart=document.getElementById('botonStart');
const botonPause=document.getElementById('botonPause');
const botonReset=document.getElementById('botonReset');
let banderaStart=false;
let banderaStartAux=true;
let banderaPausa=false;
let banderaReset=false;
let intervalo=null;

botonStart.addEventListener('click',(event)=>{
    if(!banderaStart){banderaStart=true;}
        
});
    
botonPause.addEventListener('click',(event)=>{
    if(!banderaPausa){banderaPausa=true;}
});

botonReset.addEventListener('click',(event)=>{
    if(!banderaReset){banderaReset=true;}
});

document.addEventListener('click',(event)=>
{
    if(banderaStart&&banderaStartAux)
    {
        banderaStartAux=false;
        intervalo = setInterval(() => {
            if(segundos<59)
            {
                segundos++;
            }
            else
            {
                segundos=0;
                minutos++;
                minutosTag.innerText=minutos;
            }
            segundosTag.innerText=segundos;
        },1000);
    }
    if(banderaPausa&&banderaStart&&!banderaStartAux)
    {
        banderaStart=false;
        banderaStartAux=true;
        clearInterval(intervalo);
        banderaPausa=false;
    }

    if(banderaReset)
    {
        banderaStart=false;
        banderaStartAux=true;
        clearInterval(intervalo);
        banderaReset=false;
        segundos=0;
        minutos=0;
        segundosTag.innerText=0;
        minutosTag.innerText=0;
        intervalo='';
    }    
});