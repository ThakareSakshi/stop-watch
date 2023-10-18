let timer=document.querySelector(".timer");
let btns=document.querySelectorAll("button");

let time=new Date();
let second=0;
let minute=0;
let hour=0;
let msecond=0;


let interval;

btns[0].addEventListener("click",()=>{
    console.log(btns[0].innerHTML)
    if(btns[0].innerHTML=='<i class="fa fa-play" aria-hidden="true"></i>'){
        console.log("clicked")
        btns[0].innerHTML='<i class="fa fa-pause" aria-hidden="true"></i>'
        Start();
    }else{
        console.log("not clicked")
        btns[0].innerHTML=`<i class="fa fa-play" aria-hidden="true">`
        // clearInterval();
        Pause();
    }

    
})

function Start(){
  
     interval=setInterval(() => {
        msecond+=1
        if(msecond>=100){
            second+=1;
            msecond=0;
        }
        if(second>=60){
            minute+=1;
            second=0;
        }
        if(minute>=60){
            hour+=1;
            minute=0;
        }
       
         updateTimer();  
        }, 10);
}

function Pause(){
    console.log("pause")
    clearInterval(interval);
}

btns[1].addEventListener("click",()=>{
    minute=0;
    hour=0;
    second=0;
    msecond=0;
    Pause();
    updateTimer();

})


function updateTimer(){

    document.querySelector(".second").textContent=second.toString().padStart(2,"0");
    timer.innerHTML=`
    <span class="hour">${hour.toString().padStart(2,"0")}</span>
            <span>:</span>
            <span class="minute">${minute.toString().padStart(2,"0")}</span>
            <span>:</span>
            <span class="second">${second.toString().padStart(2,"0")}</span>
            <span class="second">:${msecond.toString().padStart(2,"0")}</span>`
            // document.querySelector(".second").textContent=second.toString().padStart(2,"0");
}