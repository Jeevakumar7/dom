var form=document.querySelector('.form')
window.addEventListener('keypress',(a)=>{
    console.log(a.key)
    if(a.key=='Enter'){
    }
    })
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    var text=document.querySelector("#text")
    // console.log(text  )
    var parentRight=document.querySelector('.right')
    var container=document.createElement('div')
    container.innerHTML=`
    <p>${text.value}</p>
    <button onclick='completedfn(this)'>completed</button>
    <button onclick='updatefn(this)'>update</button>
    <button onclick='deletefn(this)'>delete</button>`
//    var out=document.createElement('p') 
//    out.innerText=text.value
//     container.append(out)
//     var updatebtn=document.createElement('button')
//     updatebtn.innerText="update"
//     updatebtn.setAttribute('onclick','updatefn(this)')
    //   container.append(updatebtn)
    
    // // var deletebtn=document.createElement('button')
    // // // deletebtn.classList('delete')
    // // deletebtn.setAttribute('onclick','deletefn(this)')
    // // deletebtn.innerText="delete"
    
    // container.append(deletebtn)
    // // console.log(out)
    parentRight.append(container)
    text.value=" "
       
})

function deletefn(e){
e.parentElement.remove()
localStorage.clear()
savefun()
}
function updatefn(e){
    var child=e.previousElementSibling
    child.setAttribute('contenteditable','true')
    child.style.border='2px solid green'
    setTimeout(()=>{
    child.setAttribute('contenteditable','false')
    child.style.border='none'
    },5000)
}
function completedfn(e){
    var child=e.previousElementSibling
    child.style.textDecoration="line-through"
}

//local storage this is an object
//localstorage give all the elements in local storage
//localstorage.getItem('keyName')output value of that key
//localstorage.setItem('name','jeeva)
//localstorage.removeItem('key) it removes the particular key value
//localstorage.clear()it clear all the data from localstorage
function savefun(){
data =document.querySelectorAll('.right div p')
console.log(data)
var key=0
for(let i of data){
    localStorage.setItem(key,i.innerText)
    key++        
}
}
var save=document.querySelector('[type="save"]')
save.addEventListener('click',(savefun))
window.addEventListener('load',()=>{
    let i=0
for(i of Object.keys(localStorage)){
    var parent=document.querySelector('.right')
    var container=document.createElement('div')
        container.innerHTML=`
        <p>${localStorage[i]}</p>
        <button onclick='completedfn(this)'>completed</button>
        <button onclick='updatefn(this)'>update</button>
        <button onclick='deletefn(this)'>delete</button>`
        i++
        parent.append(container)
    console.log(localStorage[i])
}
})

