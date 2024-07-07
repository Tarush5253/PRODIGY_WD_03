const playBtn= document.querySelector('.play');
const resetBtn = document.querySelector('.reset');
const lapBtn =document.querySelector('.lap');
const sec = document.querySelector('.sec');
const msec = document.querySelector('.msec');
const min = document.querySelector('.min');
const laps = document.querySelector('.laps');
const clearBtn = document.querySelector('.lap-clear-btn');
const bg = document.querySelector('.outer');

const toggleButton =()=>{
    lapBtn.classList.remove("hidden");
    resetBtn.classList.remove("hidden");

}

let isPlay = false;
let isReset = false;
let secCount=0;
let centiSecCount=0;
let minCount=0;
let second;
let centiSec;
let minute;
let lapCount=0;

const play =()=>{
    if(!isPlay && !isReset){
        bg.classList.add('animation-bg');
        playBtn.innerHTML='Pause';
        second = setInterval(()=>{
            if(secCount+1 === 60){
                secCount=0;
            }
            sec.innerHTML =`${ ++secCount}`;
        },1000);
        centiSec = setInterval(()=>{
            if(centiSecCount+1 === 100){
                centiSecCount=0;
            }
            msec.innerHTML =`${ ++centiSecCount}`;
        },10);
        minute = setInterval(()=>{
            if(minCount+1 === 60){
                minCount=0;
            }
            min.innerHTML =`${ ++minCount}`;
        },60000);
        isPlay=true;
        isReset=true;
    }else{
        playBtn.innerHTML='Play';
        clearInterval(second);
        clearInterval(centiSec);
        clearInterval(minute);
        isPlay=false;
        isReset=false;
        bg.classList.remove('animation-bg');
    }
    toggleButton();
}

const reset=()=>{
    isReset=true;
    play();
    lapBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
    sec.innerHTML = '0';
    msec.innerHTML='0';
    msec.innerHTML='0';
}

const lap=()=>{
    const li = document.createElement('li');
    const number = document.createElement('span');
    const timeStamp = document.createElement('span');

    li.setAttribute('class','lap-item');
    number.setAttribute('class','number');
    timeStamp.setAttribute('class','time-stamp');

    number.innerHTML=`#${++lapCount}`;
    timeStamp.innerHTML=`${minCount} : ${secCount} : ${centiSecCount}`;

    li.append(number , timeStamp);
    laps.append(li);

    clearBtn.classList.remove('hidden');
}
const clearAll=()=>{
    laps.innerHTML='';
    laps.append(clearBtn);
    clearBtn.classList.add('hidden');
    lapCount=0;
}

playBtn.addEventListener('click',play);
resetBtn.addEventListener('click',reset);
lapBtn.addEventListener('click', lap);
clearBtn.addEventListener('click',clearAll);
