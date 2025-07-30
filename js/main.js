const form = document.querySelector('form')
const result = document.querySelector('.draw-result ')
const instructions = document.querySelector('.instructions')
const draw_again = document.querySelector('.draw-again')

form.onsubmit = (event) =>{
    event.preventDefault()
    alternateDrawScreen()
}


draw_again.addEventListener('click', ()=>{
    alternateDrawScreen()
})


function alternateDrawScreen(){
    result.classList.toggle('hide')
    instructions.classList.toggle('hide')
}