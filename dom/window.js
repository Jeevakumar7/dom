window.open('https://www.google.com/')
// window.close();
window.screen();


//asychronous function it is used to execute multiple function at the same time 
//its the given follow example is last in first out like a satack it is a synchronous way
//call back stack example
function one(){
     two()
    console.log("one")
}
function two(){
    three()
    console.log("two")
}
function three(){
     four()
    console.log("three")
}
function four(){
    console.log("four")
}   

console.log(one());

// four debugger eval code:14:13
// three debugger eval code:11:13
// two debugger eval code:7:13
// one


//convert a sync code to asych
//setTimeout()
//paramenter 1 function 2 time in ms
function waitingQueue(){
    console.log("two")
}
function one(){
    two()
   console.log("one")
}
function two(){
    setTimeout(waitingQueue,1000)
   three()
}
function three(){
    four()
   console.log("three")
}
function four(){
   console.log("four")
}   

console.log(one());

function wait2sec(){
    console.log("this wait for 2 sconds because of setTimeout")
}
setTimeout(wait2sec,2000)



// four debugger eval code:17:12
// three debugger eval code:14:12
// one debugger eval code:6:12
// undefined debugger eval code:20:9
// undefined
// two debugger eval code:2:13


userdata=document.querySelector('.username')
{/* <h1 class="username"> */}

function userData(){
    userdata.innerText="Welcome Jeeva"
}
undefined
setTimeout(userData,5000)
2 

{/* <li>clearInterval is used to clear the setInterval to stop</li> */}
function hello() {
    console.log("welcome jeeva");
  }
  var timeclear = setTimeout(hello, 5000);
  var user = "new";
  let i = 1;
  function printingNumber() {
    console.log(i); 
    if (user == "new") {
      clearTimeout(timeclear);
    }
    if (i == 10) {
      clearInterval(intervalclear);
    }
    i++;
  }
  var intervalclear = setInterval(printingNumber, 1000);
  
  //clearInterval is used to clear the setInterval to stop

  confirm()//confirms allow to user click ok
true 
alert("are you sure")//alert used to show alert box

out =prompt("hi this is jeeva") //promt used to get the input from user its only in console function