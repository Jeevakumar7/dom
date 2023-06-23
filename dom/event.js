var events=document.querySelector('[type="submit"]')
// var greet=document.querySelector('.name')
var child=document.createElement('h1')
events.addEventListener('click',fun=()=>{
    // names()
    child.innerText="welcome jeeva"
    parent=document.querySelector('body')
    parent.insertAdjacentElement('afterbegin',child)
    // parent.prepend(child) also similar to the after begin
    console.log("clicked")
    setTimeout(childf=()=>{
        document.querySelector('h1').style.display="none"
    },5000)
})
//event is a variable we can give any variable to the position cslc
clicking=(event)=>{
    console.log(event.innerText)
    operators=['+','-','/','*']
    var parent=document.querySelector('.screen')
    if(!(operators.includes(parent.innerText.slice(-1)) && operators.includes(event.innerText)))
  {
    parent.innerText=parent.innerText+event.innerText
    // console.log(event.innerText ,"hello")
  }
    // console.log(typeof(parent))

// console.log("clicked")
 
}
evaluate1=()=>{
    // console.log(e.innerText)
//   let result =(document.querySelector('.parent').value)
//   console.log (operation=eval(result));
 parent=document.querySelector('.screen')
 operation=parent.innerText
 output=eval(operation)
console.log('evaluate1',output) 
parent.innerText=output
}

// names=()=>{
//     greet.innerText="welcome Jeeva"
// }
// function fun(){
//     names()
//     console.log("clicked")
// }
// function names(){
//     greet.innerText="Jeeva Welcome"
// }

// //keypress

// window.addEventListener('keypress',(e)=>{
//     console.log(e)
//     console.log('key is pressed')
//     })

// //keydown
// window.addEventListener('keydown',(e)=>{
//     console.log(e)
//     console.log('keydown pressed')
//     })
// //keyup
// window.addEventListener('keyup',(e)=>{
//     console.log(e)
//     console.log('keyup pressed')
//     })

window.addEventListener('keypress',(e)=>{
    operators=['+','-','/','*']
    key=e.key
    console.log(e.key)
    code=e.code
    if(code.includes('Digit') || operators.includes(key) ){
        
         parent=document.querySelector('.screen')
        parent.innerText=parent.innerText+key
        console.log(parent)
    }
})
// create=[fn,mail,pass,number,]
// insert=[{fname:'[type="text"]'},{mailid:'[type="email"]'},{psw:'[type="password"]'},{num:'[type="number"]'}]
// form=document.querySelector('#form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     // display=document.createElement('h1')
//     // parent=document.querySelector('body')
//     // parent.insertAdjacentElement('afterend',h1)
//     // parent.innerText=output

    // parent=document.querySelector('.user-data')
    // for(let i in create ){
    //   i=document.createElement('p')
    //   for(let j in insert)
    //     j=document.querySelector('[type="text"]')
    //   i.innerText=j.value
    // }
//     var form=document.querySelector('#form')
// form.addEventListener('submit',(e)=>{
//     parent=document.querySelector('.user-data')
//     e.preventDefault()
//     container=document.createElement('div')
//     fn=document.createElement('p')
//     fname=document.querySelector('[type="text"]')
//     fn.innerText=fname.value
//     container.append(fn)

//     mail=document.createElement('p')
//     mailid=document.querySelector('[type="email"]')
//     mail.innerText=mailid.value
//     container.append(mail)

//     pass=document.createElement('p')
//     psw=document.querySelector('[type="password"]')
//     pass.innerText=psw.value
//     container.append(pass)

//     number=document.createElement('p')
//     num=document.querySelector('[type="number"]')
//     number.innerText=num.value
//     container.append(number)
// if((fname.value!='' && mailid.value!='')&&(psw.value!='' && num.value!='')){
//     parent.append(container)
//     fname.value=''
//     mailid.value=''
//     psw.value=''
//     num.value=''


// }else{
//    error=document.querySelector('.errorMsg')
//    error.innerText="Please fill the all fields"
//    error.style.color="red"
//    message=document.createElement('p')
//    error.append(message)
//    parent.append(container)
// }})
// })
var form=document.querySelector('#form')
form.addEventListener('submit',(e)=>{
    parent=document.querySelector('.user-tabel table')
    e.preventDefault()
table_row=document.createElement('tr')
// arrdata=[fname,mailid,psw,num]
arrinput=["text","email","password","number"]
for(let i of arrinput){
    fname=document.querySelector(`[type="${i}"]`)
    fn=document.createElement('td') 
        fn.innerText=fname.value
        table_row.append(fn)
    //  if(fname.value!=''){
        
       
    // }else{
    //     error=document.querySelector('.errorMsg')
    //     error.innerText="Please fill the all fields"
    //     error.style.color="red"
    //     message=document.createElement('p')
    //     error.append(message)
      
    //  }
     
     fname.value=''
 }
 
 parent.append(table_row)
 
 
// parent.append(table_row)

    // fn=document.createElement('td')
    // fname=document.querySelector('[type="text"]')
    // fn.innerText=fname.value
    // table_row.append(fn)

    // mail=document.createElement('td')
    // mailid=document.querySelector('[type="email"]')
    // mail.innerText=mailid.value
    // table_row.append(mail)

    // pass=document.createElement('td')
    // psw=document.querySelector('[type="password"]')
    // pass.innerText=psw.value
    // table_row.append(pass)

    // number=document.createElement('td')
    // num=document.querySelector('[type="number"]')
    // number.innerText=num.value
    // table_row.append(number)

})