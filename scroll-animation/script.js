const boxes = document.querySelectorAll(".box")

window.addEventListener("scroll",contentAdding)

contentAdding()

function contentAdding(){
    const triggerHeight = window.innerHeight/5*4
    boxes.forEach(box=>{
        const topBox = box.getBoundingClientRect().top
        if(topBox < triggerHeight){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }

    })
}