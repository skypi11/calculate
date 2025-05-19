const pad = document.querySelectorAll('button')
console.log(pad)
const value = document.querySelector('input')
console.log(value.value)
for (const element of pad){
   // console.log(element.textContent)
    element.addEventListener('click',() =>{
        
        console.log(element)
        value.value =element.textContent
    })
    

}
