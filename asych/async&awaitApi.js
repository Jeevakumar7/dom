async function api(){
var v = fetch("https://api.github.com/repos/pandas-dev/pandas/issues")
    check= await v
    // console.log(check.json())//we get the Response here we are converting the respose to json
    out=check.json()
    apiout=await out//here we are consuming the response here to diplay the api 
    // console.log(apiout) 
    url=apiout[0].user.followers_url
    console.log(url)
    v2 =fetch(url)
    check1= await v2
    out1=check1.json()
    apiout1=await out1
    // console.log(apiout1)
    url2=apiout1[0].url
    // console.log(url2)
    v3=fetch(url2)
    check2=await v3
    out3=check2.json()
    outapi3=await out3
    console.log(outapi3)
}   
api()