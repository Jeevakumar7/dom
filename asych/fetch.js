var a=fetch("https://restcountries.com/v3.1/all")//its throw the Promise 
console.log(a)
a
//in this we cant access the output in single step 
.then((res)=>res.json())
.then((out)=>console.log(out))
// .then((res1)=>{
//     return(res1.json())
//     })
// .then((out1)=>{
//     console.log(out1)
// })
//res is a will be a response we are converting using json()

//promise has to be consume by using .then
//response
//we have to convert the response into json so it  become promise
//this promis needs to be consumed for the output

