//primitive (call by value)
//7: String,Number,Boolean, Null, Undefined, Symbol, bigint

//non-primitive (call by reference)
//array, objects, function

const id=Symbol("10");
const anotherId=Symbol("10");
console.log(id===anotherId);

const arr=["Himanshu","Riya","Janmejay"];//type= object
console.log(typeof arr);

const myObj={//type= object
    name:"Himanshu",
    age:19
}
const myFunction=function(){ //type =function
    console.log("Hello World");
    
}