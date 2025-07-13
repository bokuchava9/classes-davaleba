class Employee{
    constructor(name, position){
        this.name=name;
        this.position=position
    }
    about(){
        return `my name is ${this.name} and i work as a ${this.position}`
    }
}
class me extends Employee{
    giorgi(){
        return this.about()
    }
}
const aboutme = new me("giorgi", "manager");

console.log(aboutme.giorgi());


class animal {
    constructor(name){
        this.name=name
    }

    eat(){
        return `${this.name} is eating`;
    }
}


class cat extends animal{
    mewow(){
        return `${this.name} says mewow`
    }
}


const mycat= new cat("cat");

console.log(mycat.eat())
console.log(mycat.mewow())


