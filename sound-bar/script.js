const sounds = ['Rolex','Akhanda','Ghost','Panja','Sandhanam','Saaho']

sounds.forEach(sound=>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText=sound

    btn.addEventListener('click',()=>{
        onpause()
         document.getElementById(sound).play()
    })

    document.getElementById("buttons").appendChild(btn)
})

function onpause(){
    sounds.forEach(sound =>{
       const song= document.getElementById(sound)
       song.pause()
       song.currentTime = 0;
    })
}