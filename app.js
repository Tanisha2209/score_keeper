const p1button=document.querySelector('.p1button');
const p2button=document.querySelector('.p2button');
const p1display=document.querySelector('#p1display');
const p2display=document.querySelector('#p2display');
const reset=document.querySelector('.reset');
let winningScoreSelect=document.querySelector('#winningScore');
let player1Namedisplay=document.querySelector('#p1namedisplay');
let player2Namedisplay=document.querySelector('#p2namedisplay');
let submitbtn=document.querySelector('#submit');


let p1score=0;
let p2score=0;
let winningscore=3;
let isGameOver=false;

submitbtn.addEventListener('click', function(){
    const p1name=document.querySelector('#p1name').value;
    const p2name=document.querySelector('#p2name').value;
    player1Namedisplay.textContent=p1name;
    player2Namedisplay.textContent=p2name;
});

p1button.addEventListener('click', function(){
    if(p1score!==winningscore && isGameOver===false)
    {
        p1score++;
        if(p1score===winningscore)
        {isGameOver=true;
         p1button.disabled=true;
         p2button.disabled=true;
        }

        p1display.textContent=p1score;
    }
});

p2button.addEventListener('click', function(){
    if(p2score!==winningscore && isGameOver===false)
    {
        p2score++;
        if(p2score===winningscore)
        {isGameOver=true;
         p1button.disabled=true;
         p2button.disabled=true;
        }

        p2display.textContent=p2score;
    }
});

winningScoreSelect.addEventListener('change', function(){
    winningscore=parseInt(this.value);
    p1display.textContent=0;
    p2display.textContent=0;
    p1score=0;
    p2score=0;
    isGameOver=false;
});

reset.addEventListener('click', function (){
    p1display.textContent=0;
    p2display.textContent=0;
    p1score=0;
    p2score=0;
    isGameOver=false;
    p1button.disabled=false;
    p2button.disabled=false;
});

