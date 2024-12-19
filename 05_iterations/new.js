const coding=["JS","CPP","C","RUBY","PYTHON"]
const value=coding.forEach((item)=>{
    console.log(`${item}`);
    return item
})
console.log(value);
//KEY OBSERVATION: forEach do not return any value

const num=[1,2,3,4,5,6,7]
num.forEach((item)=>{
    console.log(item);    
})
const val=num.filter((item)=>item%2==0)
console.log(val);
//KEY OBSERVATION: filter returns value

//using map() for returning values from array
const numm=num.map((item)=>item+10)//in filter true or false can be checked while here in map we only make operations
console.log(numm);



//++++++++++++++++++++++++++++++++++++++    CHAINING    ++++++++++++++++++++++++++++++++++++++
const chain=num.map((item)=>item*2).map((item)=>item+10).filter((item)=>item>20)
console.log(chain);
