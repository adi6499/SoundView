let drum = document.querySelector(".drum")
let playing = document.querySelector(".playing")
let stopped = document.querySelector(".stopped")
let stop = document.querySelector(".stop")
stop.addEventListener("click", () => {

})

for (let i = 0; i < data.length; i++) {
    drum.innerHTML += `
    <div class="box">
    <i class="fa fa-play" id="toggle"></i>
    <audio src=${data[i].audio}></audio>
    <div class="head"></div>
    <a href=${data[i].audio} class="download">Download<i class="fa fa-download"></i></a>
    </div>
    `
    let download = document.querySelectorAll(".download")
    let name = download[i].href.slice(download[i].href.indexOf("Sound") + 6, download[i].length)
    let head = document.querySelectorAll(".head")
    head[i].innerHTML=name;

}

let box = document.querySelectorAll(".box")
let sound = document.querySelectorAll("audio")
let download = document.querySelectorAll(".download")
let toggle = document.querySelectorAll("#toggle")

function closeAudio() {
    for (let i = 0; i < sound.length; i++) {
        sound[i].pause()    //stop audio
       
    }
}
function toggleClose(){
    for (let i = 0; i < toggle.length; i++) {
        toggle[i].className="fa fa-play"   //stop audio
        console.log(toggle[i].className)
    }
}




toggle.forEach((t)=>{
    t.addEventListener("click",(e)=>{
        let sound = e.target.nextElementSibling
        closeAudio()
        
       
        if(e.target.className=="fa fa-play"){
            sound.play()
            e.target.className="fa fa-pause"
            playing.classList.add("playingShow")
            setTimeout(()=>{
                playing.classList.remove("playingShow")    
            })
        }else if(e.target.className =="fa fa-pause"){
            e.target.className="fa fa-play"
            toggleClose()
            sound.pause()
        }
    })
})




///download sound 
download.forEach((d) => {
    d.addEventListener("click", () => {
        let audio = new Audio("./click_sound.mp3")
        audio.play()
    })
})



///animation delay  in waves 

let lines = document.querySelectorAll(".lines")
for (let i = 0; i < lines.length; i++) {
    lines[i].style.animationDelay = `${i * 0.18}s`
}

///lets change color of box 
//by mouse over event
//set background white when mouse will hover box element than background white will be triggered automatically;

box.forEach((b)=>{
    b.addEventListener("mouseleave",(e)=>{
       e.target.style.background="white"
    })
})

box.forEach((b)=>{
   
    b.addEventListener("mouseenter",()=>{
        let color = Math.floor(Math.random()*360);
        b.style.background=`hsl(${color},50%,50%)`
        b.style.color="black"
    })
})

