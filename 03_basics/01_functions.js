function sayMyName(){
    console.log("Himanshu");
    console.log(" ");
    console.log("Mishra");
}
// sayMyName()
function addTwoNumber(number1, number2){
    console.log(number1+number2);
    
}
addTwoNumber(2,3)

function UserLogin(username){//if you set username="Himanshu" then by default it will show Himanshu but if value is passed then that value will be shown

    if(username==undefined){
        console.log("Please enter a username!");
        return;
        
    }
    console.log(`${username} just logged in`);
    
}
UserLogin()
console.log(UserLogin());

function showNumber(num1){
    return num1;
}
function showNumbers(...num1){//here we use rest operator to consider multiple values
    return num1;
}
console.log(showNumber(100,200,400));
console.log(showNumbers(100,200,400));

const user={
    username:"Himanshu",
    code:077
}
function handleObject(obj){
    console.log(`The name is ${obj.username} and the code is ${obj.code}`)
}
handleObject(user)
