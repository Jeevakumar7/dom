var start=document.querySelector('[for="Start"]')
var stop=document.querySelector('[for="Stop"]')
var SS=document.querySelector('[for="SS"]')
var MM=document.querySelector('[for="MM"]')
var HH=document.querySelector('[for="HH"]')
var s=1,m=0,h=0
start.addEventListener('click',(start)=>{
    
    setInterval(start=()=>{
        
        SS.innerText=s
        s++
        if(s>60){
            s=1
            m++
            MM.innerText=m
        }             
},1000)
})
start.addEventListener('click',()=>{
    clearInterval(()=>{
        
    })
})

// setInterval(function () {element.innerHTML += "Hello"}, 1000);