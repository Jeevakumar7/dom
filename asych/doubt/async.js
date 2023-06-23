//1->XML HTTP request is an old request and we dont know when gonna get response so we need 
// to wait some time and we need to add onload function 
// 2->fetch this we get the response in promise 
// we can access promise by .then.catch
// async/await
api_key='1551602e75c08e1ffa444ef4026a945f'
async function apifun(url){
    var v1 = fetch(url);
    var v2 = await v1;
    var v3 = v2.json();
    var v4 = await v3;
    // console.log(v4)
    return v4
}
async function api(){
   out =await apifun("https://restcountries.com/v3.1/all")
   console.log(out)
   for(let i of out){
    console.log(i)
    var weather_url=(`https://api.openweathermap.org/data/2.5/forecast?lat=${i.latlng[0]}&lon=${i.latlng[1]}&appid=${api_key}`)
    out_weather=await apifun(weather_url)
    console.log(out_weather)
   }
}
api()

async function weahter_api(){
    v1= await apifun(`https://api.openweathermap.org/data/2.5/weather?id=524901&appid=${api_key}`)
    console.log(v1)
}
weahter_api()


// example-1 using promiseall
// 
// async function weather_report() {
//     var v5 = await apifun("https://restcountries.com/v3.1/all");
//     console.log(v5)
// // console.log(v5)
 
//     }
//     weather_report();
// async function weatherapi(e) {
//         // console.log(e.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling)
//         var parent=e.parentElement
//         // console.log(parents)
//         var lat=parent.getAttribute('lat')
//         // console.log(lat)
        
//         var lng=parent.getAttribute('lng')
//         // console.log(lng)
//     // console.log(e);
//     var weather_url=(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${api_key}`)
//        var a= fetch(weather_url)
//        b=await a
//        c=b.json()
//        d=await c
//        console.log(d.list[0])
//     }
   
//    var v3=v2.json()//Promise load the data in promise result and its status is fullfilled
//    console.log(v3)
//     var v4=await v3
//     console.log(v4)//diplaying the data from promise result

// a1=new Promise((res)=>{
//     res()
//     console.log(1)
//     return 1
// })
// a2=new Promise((res)=>{
//     res()
//     console.log(2)
//     return 2
// })
// a3=new Promise((res,rej)=>{
//     rej()
//     console.log(3)
//     return 3
// })
// var v2=Promise.all([a1,a2,a3])
// v2.then ((res)=>{
//     console.log(v2)
//     return 4    
// })
// .catch ((rej)=>{
//     console.log('rejected')
// })
// console.log(v2)
