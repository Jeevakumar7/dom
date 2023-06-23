var a=20
//async key word always return as Promise 
async function one(){
    setTimeout(()=>{
        if(a>10){
            a=7
        }
        console.log(a)
    },3000)
    console.log(a)
}
one()
async function two(){
    var prom=new Promise((res)=>{
        setTimeout(()=>{
            res()
            if(a>10){
                a=8
            }else{
                a=9
            }
            console.log(a)
        },3000)
    })
    console.log(prom)//this is sync function so its executed first
    console.log(`initial value of a is ${a}`)
}

var check=""
async function three(){
    var prom=new Promise((res)=>{
        setTimeout(()=>{
            res(`this is resolved ${a} `)
            if(a>10){
                a=8
            }else{
                a=9
            }
            console.log(a)
        },3000)
    })
    check=await prom//we used await to wait the synch get the Promise State here we are actually setting priority 
    console.log(prom)
    console.log(`await async value of a is ${a}`)
}
var a=11
var check=""
// var fname="Nobody"
async function smallApiExample(){
    var prom=new Promise((res)=>{
        setTimeout(()=>{
            res(`this is resolved ${a} `)
            if(a>10){
                a=8
            }else{
                a=9
            }
            console.log(a)
            fname="jeeva"
        },3000)
    })
     check=await prom//we used await to wait the synch get the Promise State here we are actually setting priority 
    setTimeout(()=>{
        console.log(fname+" This is excuted after the prom")
    },2000)//it will show us a error cause this function is executed after two sec but fname is declared after 3 sec we need to set priority to avoid this  
    console.log(prom)
    console.log(`await async value of a is ${a}`)
}

