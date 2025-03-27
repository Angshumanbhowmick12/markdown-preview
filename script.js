const copy= document.querySelector(".copy-btn")
const clear= document.querySelector(".clr-btn")

const Input=document.getElementById("markdown")
const preview=document.getElementById("preview")

Input.addEventListener('keyup',()=>{
    
    preview.innerHTML= marked.parse(Input.value)
})

clear.addEventListener('click',()=>{
   Input.value=""
   preview.innerHTML=""
})

copy.addEventListener('click',()=>{
    const text= Input.value

    navigator.clipboard.writeText(text).then(
        alert("copied")
    )
})

