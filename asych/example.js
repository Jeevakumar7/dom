// //call back stack example
// function one(){
//     two()
//    console.log("one")
// }
// function two(){
//    three()
//    console.log("two")
// }
// function three(){
//     four()
//    console.log("three")
// }
// function four(){
//    console.log("four")
// }   

// console.log(one());

// console.log("race started")
// setTimeout(()=>{
// console.log("one is running")
// },700)
// console.log("greate run from one")
// setTimeout(()=>{
//     console.log("two won")
//     },2000)
// console.log("along with  one two also greate start")
// setTimeout(()=>{
// console.log("two is overtaking one")
// },1200)

var url='https://restcountries.com/v3.1/all'
countriesRequest=new XMLHttpRequest()
countriesRequest.open('GET',url)
countriesRequest.send()
// countriesRequest.onload=()=>{
// console.log(JSON.parse((countriesRequest).response))
// }

//we are not using the setTimeout because its depends upon the user internet conection thats why not using
setTimeout(()=>{
    responded=(JSON.parse((countriesRequest).response))
    console.log(responded)
    // feting flags in api
    for(let i in responded){
    console.log(responded[i].flags)
}
},5)



//setTimeout callback chain or callback hell its deficult to debugg
setTimeout(()=>{
    console.log(1)
     setTimeout(()=>{
        console.log(2)
        setTimeout(()=>{
            console.log(3)
        },1000)
    },1000)
},1000)