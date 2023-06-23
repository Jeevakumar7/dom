// var url="https://api.unsplash.com/photos/?client_id=QxhhfKSQAaUTFNpo0QYOCCLxvMUAhm9120j93E8auEU&per_page=20&page=9"
var form1=document.querySelector('.user')
form1.addEventListener('submit',(e)=>{
e.preventDefault()
var parent=document.querySelector('.images')
parent.innerHTML=""
// search_data=document.querySelector('[type="text"]')
var search=document.querySelector('[type="text"]')
var search_value=search.value
// // console.log(data)
apidemo(page,search_value,orientation_datax) 

})

var feeds
var page=1
var data='books'
var orientation_data
var parent=document.querySelector('.images')
async function apidemo(page_num,data){
    // 
   res= fetch(`https://api.unsplash.com/photos/?client_id=Nai_odTs5OK2fKOuhKlnezSyYO74ZsFMgw-9tlXqJ9g&query=${data}&per_page=20&page=${page_num}&orientation${orientation_data}`)
  try{
    r=await res
   out=r.json()
    apiout=out
    apiout1=await apiout
    // console.log(typeof(apiout1))
    for(let i of apiout1){
   console.log(i.urls.thumb)
    feeds=document.createElement('img')
   feeds.setAttribute('src',i.urls.thumb)
// console.log(typeof(images))
    parent.append(feeds)
    }
    
  }catch{
    console.log("there is an error")
    console.log(res)
  }
} 
// apidemo(1,data) 
apidemo(page,data)

apidemo(1,data)
window.addEventListener('scroll',()=>{
    if((window.innerHeight+window.scrollY+200)> (document.querySelector('body').offsetHeight))
    {
        page++
        var search=document.querySelector('[type="text"]')
        var search_value=search.value
      console.log(data)
       apidemo(page,search_value,orientation_data)
        // console.log(scroll)  
    }
})


// var screen=document.querySelector('body').offsetHeight

var button=document.querySelector('.btn')   
var bg=document.querySelector('body')
button.addEventListener('click',()=>{
     colorrandom=(Math.floor(Math.random()*16777216)).toString(16)
    console.log(colorrandom)
    bg.style.backgroundColor=`#${colorrandom}`
})
var orientation1=document.querySelector('.orientation')
var landscape=document.querySelector('[value="landscape"]')
var portrait=document.querySelector('[value="portrait"]')

orientation1.addEventListener(Option,()=>{
  if(landscape="orientation_data"){
    orientation_data=landscape
  }else{
    orientation_data=portrait
  }
  var search=document.querySelector('[type="text"]')
  var orientation_data=search.value
console.log(data)
 apidemo(page,search_value,orientation_data)
})
