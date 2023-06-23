// setTimeout(()=>{
//     console.log(1)
// },1000)
// setTimeout(()=>{
//     console.log(2)
// },2000)
// setTimeout(()=>{
//     console.log(3)
// },1000)



// setTimeout(()=>{
//     console.log(1)
//      setTimeout(()=>{
//         console.log(2)
//         setTimeout(()=>{
//             console.log(3)
//         },1000)
//     },2000)
// },1000)


// setTimeout(()=>{
//     document.querySelector('body').style.backgroundColor="red"
//         setTimeout(()=>{
//             document.querySelector('body').style.backgroundColor="blue"
//                 setTimeout(()=>{
//                 document.querySelector('body').style.backgroundColor="pink"
//                     setTimeout(()=>{   
//                      document.querySelector('body').style='none'
//                      },3000)
//                 },4000)
//         },2000)
// },1000)


//calling api using setTimeout but we are not gonna further using setTimeout to call api 
// its called as callback chain because its deficult to debuggs
var request= new XMLHttpRequest()
request.open('GET','https://jsonplaceholder.typicode.com/posts')
request.send()
// console.log(request.response)
setTimeout(()=>{
   console.log(JSON.parse(request.response))

   var res=(JSON.parse(request.response))
   console.log(res)
//    for(a of res){
//     console.log(a.user.url)
//     url=a.user.url
//     var res1= new XMLHttpRequest()
//             res1.open('GET',url)
//             res1.send()
//         setTimeout(()=>{
//            var res2=(JSON.parse(res1.response))
//             console.log(res2)
//         },5000)

},1000)



