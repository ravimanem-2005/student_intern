let time=0;
let running=false;
let timeinterval;
const hrs = document.querySelector(".hrs");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const resetbtn=document.querySelector(".reset");
const startbtn = document.querySelector(".start");
const stopbtn = document.querySelector(".stop");

const updateTime = () => {
    const secs = time%60;
    const mins = Math.floor((time/60)%60);
    const hr = Math.floor((time/3600));
    sec.innerHTML=secs <10 ? `0${secs}` :secs;
    min.innerHTML=mins <10 ? `0${mins}` :mins;
    hrs.innerHTML=hr <10 ? `0${hr}` :hr;
}
const increaseTime = () => {
    time+=1;
    updateTime();
}
startbtn.addEventListener("click", () => {
    running=true;
    timeinterval=setInterval(increaseTime,1000);
});
resetbtn.addEventListener("click",() =>{
    time=0;
    running=false;
    stopbtn.innerHTML="STOP";
    updateTime();
    clearInterval(timeinterval);
});
stopbtn.addEventListener("click",()=> {
    if(running){
        stopbtn.innerHTML="RESUME";
        clearInterval(timeinterval);
        running=false;
    }else{
        stopbtn.innerHTML="STOP";
        timeinterval=setInterval(increaseTime,1000);
    }
});
