//reduce
// let arr;
/*
    const initialValue=0
    const SumwithInitial=arr.reduce((accumulator,currentvalue)=>accumulator+currentvale,initialValue)
    //accumulator=initialValue(first time)
    //accumulator=accumulator+currentvalue(then)
 */

const arr=[4,5,6]
const initialValue=0;
// const Sum=arr.reduce((acc,curr)=>acc+curr,initialValue)
// console.log(Sum);
const Sum=arr.reduce((acc,curr)=>{
    console.log(`acc=${acc} and currValue=${curr}`)
    return acc+curr
},initialValue)
console.log(Sum);

const ShoppingCart=[
    {
        item:"Mobile",
        val:100000
    },
    {
        item:"TV",
        val:200000
    }
]
const Total=ShoppingCart.reduce((acc,curr)=>acc+curr.val,0)
console.log(Total);


