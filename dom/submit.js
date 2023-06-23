var form1=document.querySelector('#form1')
form1.addEventListener('submit',(e)=>{
    e.preventDefault()
    parent=document.querySelector('body')
     container=document.createElement('div')
     

     fn=document.createElement('p')
     fname=document.querySelector('[type="text"]')
     fn.innerText=fname.value
     container.append(fn)
     console.log(fn)

     pass=document.createElement('p')
    psw=document.querySelector('[type="password"]')
    pass.innerText=psw.value
    container.append(pass)

   parent.append(container)
    
   
})