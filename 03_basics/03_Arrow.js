const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username="sam"
user.welcomeMessage()


console.log(this);           //output->{} (empty object) ->node env. mei this empty object ko point kr rha hai

//browser k andr jo global object hai wo window obj hai
//pehle js access krne k liye hmaare paas engine available browser mei he hoti thi,pr ab hmne node ,ye sb market mei laaya jo js ko standlone
//run krti hai, isiliye (this ka browser mei global object window hai)



function chai(){
    console.log(this);
}
chai()

//running this with any property directly inside fxn will give error
function welcomemessage(){
    let userName="hitesh"
    console.log(this.username);
}
welcomemessage()

/***********************************************************more ways to declare fxns******************************************/ 

const chaii=()=>{
   let username="hitesh"
   console.log(this.username);   //undefined
   console.log(this);            //{}

}
chaii()

//arrow fxn   ,curly braces use kiya toh return likhna hoga
const addtwo=(num1,num2)=>{
      return num1+num2
}
console.log(addtwo(3,4))


//implicit return arrow fxn
const addtw0o=(num1,num2)=>(num1+num2)  //curly braces not used then return nhi likhna hai
console.log(addtw0o(2,3));

//to return object
const add2=(num1,num2)=>({username:"rashmi"})
console.log(add2(3,4));

const myArray=[1,2,4]
myArray.forEach(()=>{})