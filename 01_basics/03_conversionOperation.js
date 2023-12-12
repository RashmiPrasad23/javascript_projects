let score="33"
let score1="33abc"
let score3=null;
let score4=undefined;
//we do not know what kind of value is coming from frontend so it becomes necessary to know about the datatype of that value

console.log(typeof score);
console.log(typeof(score));

let num=Number(score); //string converted into number
let num1=Number(score1);
let num3=Number(score3);
let num4=Number(score4);

console.log(typeof num);
console.log(typeof score1);
console.log(typeof num1);
console.log(num1);  //Not a Number ,value didnt convert into number
console.log(num3); //when converted into number ,null got converted into 0
console.log(num4); //when converted into number, undefined didnt get convert (NaN)

//"33" ->easily get cnvertd into 33
//"33abc" ->NaN
//true ->1; false->0

let isLoggedIn=1

let booleanIsLoggedIn= Boolean(isLoggedIn)  //converted into true
console.log(booleanIsLoggedIn) 

//cnversion of empty string
let isLoggedInEmptyString=""
let booleanIsLoggedInEmptyString= Boolean(isLoggedInEmptyString)  //converted into false
console.log(booleanIsLoggedInEmptyString) 

//1 -> true ; 0 -> false
//"" -> false
//"notEmptyString" -> true


let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber)

/******************************************operations ****************************************** */
let str1="hello"
let str2="hitesh"

let str3=str1+str2
console.log(str3)

console.log("1"+2) //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+2+"2"); //32

/********************************************comparison****************************** */
console.log(2>1);  //true
console.log(2>=1); //true

console.log("2">1);  //automatically js cnverted into number n then compared
console.log("02">1);

console.table([null>0,null==0,null>=0]);
console.table([undefined>0,undefined==0,undefined>=0]);  //all values false

//NOTE: AVOID ABOVE TYPES OF CONVERSION



/******************************************** compare*********************************/
//strict check
//   === checks value with its datatype
console.log("2"===2);          //false

//   == only checks value
console.log("2"==2);          //true
