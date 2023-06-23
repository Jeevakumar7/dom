var prom=new Promise((resolve,rejected)=>{
    setTimeout(()=>{
        resolve("this is resolved")
    },2000)
})
.then((resolve)=>{
    console.log(resolve)
    return 6
})
.then((resolve1)=>{
    console.log('6 is coming from resolve ',resolve1)
    return 'Hi'
})
.then((resolve2)=>{
    console.log('Hi is coming from resolve1',resolve2)
})

// --------------------------------------------------example 2----------------------------------------
sumpreme=(color,time)=>{
       var  prom=new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            resolve("this is resolved")
            document.body.style.backgroundColor=color
        },time)
       
    })
    return prom
}
sumpreme('purple',1000)
.then((res)=>sumpreme('blue',2000))
    .then((res1)=>sumpreme('green',2000))
         .then((res2)=>sumpreme('green',1000))
         .catch((err1)=>{
            console.log("err1")
        })     

    .catch((err1)=>{
            console.log("err1")
        })
.catch((err1)=>{
    console.log("err1")
})




