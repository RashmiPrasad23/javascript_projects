//immediately invoked function expressions
//named iife
(function chai(){
    console.log(`db connected`);
})();

//global scope k variables se bahot baari pollution hoti hai,uss global variable jo hai ,uske pollution ko htaane k liye use krte hai iife

//iife can be written in arraw fxn also

//unnamed iife
(()=>{
    console.log(`db connected`);
})()

//unnamed parameter passed iife
((name)=>{
    console.log(`db connected ${name}`);
})('hitesh')

