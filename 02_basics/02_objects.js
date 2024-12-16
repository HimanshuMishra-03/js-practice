//object Singleton, object.create also called constructor method or 'new Object()' is a singleton
//object literals 
const sym=Symbol("key");//To use a symbol in JS object first declare it and then use it in object
const JsUsers= {
    name:"Himanshu",
    [sym]:"myKey",
    roll:69,
    location:"Rajkot",
    isLoggedin:false,
    email:"himanshu@gmail.com",
    lastLoggedInDays:["Monday","Tuesday"]

}
console.log(JsUsers.email);
console.log(JsUsers["email"]);
console.log(JsUsers[sym]);

// Object.freeze(JsUsers);//This will lock all the key-values of object
JsUsers.name="HimanshuMishra";
console.log(JsUsers.name);

JsUsers.greeting=function(){
    console.log("Hello");
JsUsers.greetingTwo=function(){
    console.log(`Hello ${this.name}`);
    
}    
}
console.log(JsUsers.greeting());
console.log(JsUsers.greetingTwo());

