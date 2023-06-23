var next =document.querySelector('[for="next"]')
next.addEventListener("click",()=>{
    arr=[1,2,3]
    for(let i of arr ){
    element=document.querySelector(`[for="${i}"]`)
    console.log(element)
    element.innerText=Number(element.innerText)+ 3
     console.log(element)
}
}
)
var prev =document.querySelector('[for="back"]')
prev.addEventListener('click',()=>{
    arr=[1,2,3]
    for(let i of arr ){
    element=document.querySelector(`[for="${i}"]`)
    element.innerText=Number(element.innerText)- 3
    }
})