// creating a promise 
prom=new Promise(()=>{
    console.log('Creating a promise now this status is pending')
})
prom = new Promise((resolve,rejected)=>{
    resolve()
    console.log('now this promise is resolved then status is changed to fulfilled')
})
//in this status is rejected and it will throw error we must use  catch see on later videos
prom = new Promise((resolve,rejected)=>{
    rejected()
    console.log('now this promise is rejected then status is changed to rejected')
})
prom1 = new Promise((resolve,rejected)=>{
    resolve('super it is resolved')
    console.log('now this promise is resolved then status is changed to fulfilled')
})
//in this status is rejected and it will throw error we must use try catch see on later videos
prom2 = new Promise((resolve,rejected)=>{
    rejected('sorry it is rejected')
    console.log('now this promise is rejected then status is changed to rejected')
})
//consuming a Promise
prom1 = new Promise((resolve,rejected)=>{
    resolve('super it is resolved')
    // console.log('now this promise is resolved then status is changed to fulfilled')
})
.then((resolve)=>{
    console.log(resolve)
})
.catch((rejected)=>{
   console.log(rejected) 
})
//in this status is rejected and it will throw error we must use try catch see on later videos
prom2 = new Promise((resolve,rejected)=>{
    rejected('sorry it is rejected')
    console.log('now this promise is rejected then status is changed to rejected')
    .then((resolve)=>{
        console.log(resolve)
    })
    .catch((rejected)=>{
       console.log(rejected) 
    })
})

var user_name="Jeeva"
user = new Promise((resolve,rejected)=>{
    if(user_name=="Jeeva"){
        resolve(`${user_name} welcome you are allowed`)
    }
   else{
    rejected(`${user_name}welcome you are allowed`)
   }
})
    .then((resolve)=>{
        console.log(resolve)
    })
 .catch((rejected)=>{
       console.log(rejected) 
    })
