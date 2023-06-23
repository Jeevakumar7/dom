url='https://api.unsplash.com/photos/?client_id=Nai_odTs5OK2fKOuhKlnezSyYO74ZsFMgw-9tlXqJ9g'
var parent=document.querySelector('.parent')
// var Searched_Data=document.querySelector('[type="text"]')

async function display(){
    v1=fetch(`https://api.unsplash.com/photos/?client_id=Nai_odTs5OK2fKOuhKlnezSyYO74ZsFMgw-9tlXqJ9g&per_page=20&query=sea}`)
    r=await v1
    v2=r.json()
    out=await v2
    console.log(out[2].urls.small_s3)
    for(let i of out){
    // console.log(i.urls.thumb)
     images=document.createElement('img')
    images.setAttribute('src',i.urls.small_s3)
    parent.append(images)
    }
}
  display()
// var Searched_Data=document.querySelector('[type="text"]')
// display()
// var form=document.querySelector('.search')
// form.addEventListener('submit',(e)=>{
//     var parent=document.querySelector('.parent')
//     parent.innerHTML=""
//     e.preventDefault()
//     var Searched_Data=document.querySelector('[type="text"]')
//     data_value=Searched_Data.value
  

// })

