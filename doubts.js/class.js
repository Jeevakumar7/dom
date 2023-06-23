class developer{
    constructor(name,salary,age){
        this.name=name,
        this.age=age,
        this.salary=salary
    }
    fun1(){
        console.log(`hello ${developer.name}`)
    }
    hike(hikepercent){
        console.log(this.salary=this.salary*(1+(hikepercent)/100))
    }
    demote(percentage){
        console.log(this.salary=this.salary*(1-(percentage)/100))
    }
}
var a=new developer("Jeeva",60000,26)
console.log(a)
