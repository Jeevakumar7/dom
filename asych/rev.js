var url='https://restcountries.com/v3.1/all'
countriesRequest=new XMLHttpRequest()
countriesRequest.open('GET',url)
countriesRequest.send()
countriesRequest.onload=()=>{
// console.log(JSON.parse((countriesRequest).response))
setTimeout(()=>{
    responded=(JSON.parse((countriesRequest).response))
    console.log(responded)
    // feting flags in api
    for(let i in responded){
        try{
            console.log(responded[i].capital)
        }
        catch{
            console.log(`${i}  missing`)
            //error appears while the data key is not present it gives udefined
            //  if we are accessing the undefined.anyvariable its gives us the error
        }
    
}
},5)
}