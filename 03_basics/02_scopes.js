


if(true){
    let a=10;
    const b=20;
    var c=30;
}
// console.log(a);
// console.log(b);
console.log(c);   //var scope k baahr bhi chli jaati hai..isiliye we dont use it now 

/*******************************************INTERESTING********************************************************* */

//function  ,hoisting
console.log(addOne(5))   //no error
function addOne(num){
   return num+1;
}


//expression->inside fxn there can be json ,objects anything
console.log(addTwo(5))   //here it will give error ,fxn declaration se pehle access kr rhe,idhr value bhi hold kr li hai hmne addTwo mei n 
                           //phir usko access krne ki koshish kr rhe,isisliye error aa rah
const addTwo=function(num){
    return num+2
}

// console.log(addOnee(5))   //undefined
// function addOnee(num){
//    let num1=num+1;
// }

