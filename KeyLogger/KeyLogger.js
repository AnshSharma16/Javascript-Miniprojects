const logDiv=document.getElementById("log");
const stateDiv=document.getElementById("state");
const startBtn=document.getElementById("start-btn")
const stopBtn=document.getElementById("stop-btn")
stopBtn.disabled=true;

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
    startBtn.disabled=true;
    stopBtn.disabled=false;
})

stopBtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    startBtn.disabled=false;
    stopBtn.disabled=true;
    logDiv.textContent="";
    stateDiv.textContent="";
    logDiv.style.backgroundColor = 'aqua';
})

function handleDown(e){
    logDiv.textContent=`Key ${e.key} is pressed down`;
    stateDiv.textContent=`Key is down`
    logDiv.style.backgroundColor = 'yellow';
}

function handleUp(e){
    logDiv.textContent=`Key ${e.key} is pressed up`;
    stateDiv.textContent=`Key is up`
    logDiv.style.backgroundColor = 'red';
}


