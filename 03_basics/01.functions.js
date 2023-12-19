function sayMyName(){
    console.log("h");
}
//sayMyName    -> reference
//sayMyName()  -> fxn execution
sayMyName()


function addTwoNumbers(number1,number2){
   console.log(number1+number2);
}
//addTwoNumbers()    -> NaN(bcoz no parameter was passed)
addTwoNumbers(3,4)    //->7
addTwoNumbers(3,"4")    //since one was string ,therefore it concatenated both the arguments
addTwoNumbers("3","4") // 34(concatenated it)
addTwoNumbers(3,"a")  //3a
addTwoNumbers(3,null)   //3

function addTwoNumberss(number1,number2){
  let result=number1+number2
  return result
}
const result=addTwoNumberss(3,5)
console.log("result :",result);


function loginUserMessage(userName){
    //"",undefined -> ye sb js mei false maana jata hai
    if(!userName){
    console.log("please enter a username");
    return
    }
    return `${userName} just logged in`
}
//jb hm kuch paas he nhi krte hai toh undefined aata hai
console.log(loginUserMessage("rashmi"));



function loginUserMessagee(userName="sam"){
   //min to min value sam hogi ,agr hm kuch pass nhi krte hai toh
    return `${userName} just logged in`
}
console.log(loginUserMessagee());
console.log(loginUserMessagee("rashmi"));


//jb total arguments kitne aayenge nhi pta rehta then niche function given hai...how to proceed
function calculateCardPrice(...num1){ //rest operator -> ...
    return num1
}

console.log(calculateCardPrice(200,200,400)); //(rest operator) ko use kr kr hm saare parameters ko array mei daal paaye

function calculateCardPrice(val1,val2,...num1){ 
    return num1
}
console.log(calculateCardPrice(200,400,500,2000)); //200 in val1,400 in val2,rest 500 n 2000 in num1

//object
const user={
    username:"hitesh",
    price:199
}
//object pass in function
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
//direct object pass in fxn calling
handleObject({
    username:"sam",
    price:399
})

//array passing in fxn
const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
//direct array value pass
console.log(returnSecondValue([200,300,500,1000]));

