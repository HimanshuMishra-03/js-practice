//Immediately Invoked Function Expressions (IIFE)
//to prevent global scope from polluting
// function dbConnection(){
//     console.log("DB connected"); 
// }
// dbConnection()//this will polute global scope 

//therefore we use iife, just by putting function in parantheses'()' and add one more parantheses at end to invoke the function


//NAMED IIFE
(function dbConnection(){
    console.log("DB connected"); 
})();//HERE ADDING SEMICOLON AT THE END OF INVOKE IS MUST

//UNNAMED IIFE
(()=>{
    console.log("DB CONNECTED AGAIN");
    
})();

((NAME) => {
    console.log(NAME);
    
})("Himanshu");

//() =>parantheses
//[] =>brackets
//{} =>braces