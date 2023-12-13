//kis tarah se data ko memory mei rkha jata hai and access kiya jata hai..uss basis pr do types
//k dattype hai
// 1-> primitive(call by value)
//     7 types -> String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100;

const avgscore=100.3;

const isLoggedIn=false;

const outsideTemp=null;

let userEmail;

const id=Symbol("123");

const anotherId=Symbol("123")

console.log(id===anotherId);

const bigNumber=345678910986n;

// 2-> non-primitive(reference type)
//     array,objects,functions
const heroes=["sha","nagraj","doga"];

//object
let myObj={
    name:"rashni",
    age:21,
    //fxn
    //boolean
}

const myFunction=function(){
   console.log("hello rashmi")
}
console.log(typeof myObj)
//javascript is dynamically typed language as we dont need to write the datatype while declaring variable




/*******************************************memories in js****************************************************/ 

//stack(primitive type), Heap (non-primitive)
let myYoutubename="rashmidotcom"

let anothername=myYoutubename
anothername="chaiaurcode"
console.log(myYoutubename)
console.log(anothername)

//heap
let myObjext={
    naame:"rashmi",
    age:22,
}
let myobj2=myObjext;
myobj2.naame="rimjhim"

console.table([myObjext,myobj2])
