//for of loop
//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]
for (const num of arr){
    console.log(num);
    
}
// (()=>{
//     console.log("Hehehe");
// })();

// MAPS in JAVASCRIPT
const map=new Map();
map.set("india",91)
map.set("usa",0o1)
console.log(map);

// for(const keys of map){        
//     console.log(keys);                 //It will return the array format that we entered
// }
for(const [key,values] of map){
    console.log(`${key} => ${values}`);
}


const obj={
    "username":"Himanshu",
    "code":003
}
//for of is not iterable in object in given below format
// for(const [key,value] of obj){
//     console.log(key," ",value);
// }

//for in loop
//we can iterate over objects via this
for(const key in obj){
    console.log(`${key} => ${obj[key]}`);
}

for(const num in arr){
    console.log(`${arr[num]}`);   
}

//for in is not iterable in maps

//for each
// arr.forEach( function(val){
//     console.log(val);                  //here we are using call back function
// } )

// arr.forEach((val )=>{
//     console.log(val);
    
// })

// function callBack(item){
//     console.log(item);
// }
// arr.forEach(callBack)//here we only give reference and not call the function

const arrObj=[
    {
        username:"Himanshu",
        code:3
    },
    {
        username:"Riya",
        code:5
    },
    {
        username:"Anonymous",
        code:7
    }
]
arrObj.forEach((item)=>{
    console.log(item.username);
    console.log(item.code);
    
})