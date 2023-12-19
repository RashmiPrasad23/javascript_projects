//falsy values-> false,0,-0,BigInt )n,null,undefined,NaN
//truthy values-> "0",'false'," ",[],{},function(){} <- empty fxn

const usermail=[]

//to check if array is empty use this
if(usermail.length===0){
  console.log("array is empty");
}

//to check obj
const emptyobj={}
//will return array n then its length
if(Object.keys(emptyobj).length===0){
   console.log("obj is empty");
}

//false ==0 -> o/p = true
//false=='' -> o/p = true
//0 ==''   -> o/p = true

/*************************************************************** */
//Nullish Coalescing Operator(??):null undefined
//agr null ya undefined aa rha data mei then  question mark k baad waali jo value hmne lga rkhi hai wo o/p mei aa jaayegi

let val1;
val1=5??10
val1=null??12
val1=undefined??15
val1=null??10??12

console.log(val1);
/******************************************************************************************* */
//Ternary operator
//condition? true:false

const iceTeaPrice=100
iceTeaPrice<=80?console.log("<80"):console.log(">80");