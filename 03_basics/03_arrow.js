// const user={
//     username:"Himanshu",
//     code:3,


//     welcomeMessage:function(){
//         console.log(`Welcome, ${this.username}`)//this keyword points to the user object and its use is necessary else it will throw error  
//         console.log(this);
        
//     }

// }
// user.welcomeMessage()
// console.log(this);//this will show empty parantheses because it is pointing to empty object
function any(){
    const usernamee="Himanshu"    
    console.log(this.username)//it will say undefined as this keyword works only in object
    // console.log(this);
    
}
any()

const anyy=function(){
    const usernamee="Himanshu"
    console.log(this.username); 
    // console.log(this);//same result as above
    
}
anyy()

const anyyy=() => {
    const usernamee="Himanshu"
    console.log(this.username);
    console.log(this);   //it will point to an empty object
}
anyyy()

const addTwo=(num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

//this can also be written as
const anotherAddTwo=(num1, num2) => num1+num2 //we dont have to write "return" keyword here //implicit return
console.log(anotherAddTwo(10,10))

// const Show=() => {username:"Himanshu"} //we cannot directly return object we must write in parantheses'()'
const show=() => ({username:"Himanshu"})
console.log(show())