//promise(function(resolve, reject){})
//method 1
const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout((r)=>{
        console.log("Async task is completed!");
        resolve()//this method connects with then()
    },1000)
})
promiseOne.then((r)=>{
    console.log("Promise Consumed");
    
})

//method 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 task is completed!");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 Consumed");
    
})

//PromiseThree
const PromiseThree=new Promise(function(resolve, reject){
    setTimeout((r)=>{
        resolve({username:"Himanshu",code:3, email:"himanshubmishra@gmail.com"})
    },1000)
})
PromiseThree.then(function(user){
    console.log(user);
})

//Promise 4
const promiseFour=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Himanshu",pass:3})
        }else{
            reject("Error:Something Went Wrong")
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally((h)=>{console.log("The promise is either resolved or rejected");}
)

//Promise 5
const promiseFive=new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"JavaScript",pass:3})
        }else{
            reject("Error:JS Went Wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

//fetch()
// async function getAllusers() {
//     try {
//         const response=await fetch('https://randomuser.me/api/')
//         //console.log(response);
        
//         const data=await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("Error:",error);
        
//     }
// }
// getAllusers()


//Another method for above
fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data)
)
.catch((error)=> console.log(error))