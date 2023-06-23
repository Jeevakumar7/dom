var obj={
name1:function(){
    console.log("name is jeeva");
},
age1:function(){
    console.log("age is 24")
},
greet:()=>{
    console.log("Welcome to the object arrow function")
},
12:"Jeeva"
}
//name1,age1,greet are the method inside the object
//we must accesst the number in object is shown below
console.log(obj[12])
//we have to access the method below shown
obj.greet();

var a=[1,1,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,7,8,8,9,9];
obj={}
for(let i of a){
   if(obj[i]){
    obj[i]=obj[i]+1
   }
   else{
    obj[i]=1;
   }
   console.log(obj);
  }
  console.log(obj);
  for(let i of object.keys(obj)){
    console.log(`${i} repeated for ${obj[i]}times`);
  }


