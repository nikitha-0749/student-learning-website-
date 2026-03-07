import { useState, useEffect } from "react";
import "./StudyTimer.css";

function StudyTimer() {

const studyTime = 1500;

const [seconds,setSeconds] = useState(()=>{
const saved = localStorage.getItem("timerSeconds")
return saved ? parseInt(saved) : studyTime
})

const [running,setRunning] = useState(()=>{
return localStorage.getItem("timerRunning") === "true"
})

useEffect(()=>{

let timer

if(running && seconds>0){
timer=setInterval(()=>{
setSeconds(prev=>prev-1)
},1000)
}

return ()=>clearInterval(timer)

},[running,seconds])

useEffect(()=>{
localStorage.setItem("timerSeconds",seconds)
localStorage.setItem("timerRunning",running)
},[seconds,running])

useEffect(()=>{
if(seconds===0){
alert("Study session completed!")
setRunning(false)
}
},[seconds])

const minutes=Math.floor(seconds/60)
const secs=seconds%60

return(

<div className="timer-container">

<h2>Study Timer</h2>

<h1>
{minutes}:{secs<10?`0${secs}`:secs}
</h1>

<div className="timer-buttons">
<button onClick={()=>setRunning(true)}>Start</button>
<button onClick={()=>setRunning(false)}>Pause</button>
<button onClick={()=>setSeconds(studyTime)}>Reset</button>
</div>

</div>

)

}

export default StudyTimer