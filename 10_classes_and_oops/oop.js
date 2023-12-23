//object literal -> mtlb litreally ek object bnana,basic unit in js
const user={
   username:"hitesh",
   logincount:8,
   signedIn:true,

   getUserDetail:function(){
    console.log("got user detail from db");
    //this denotes current cntext
    console.log(`username : ${this.username}`);
    console.log(this); //will give current context
   }
}
console.log(user["username"]);
console.log(user.getUserDetail());

console.log(this);   //global context abhi empty braces hai {} bcoz node environment mei empty hai

/**********************************************************************************************************************************/ 

//contructor function->allows ek he object literal se aap multiple instance bna sko

//const promise1=new Promise()
//const date=new Date()  //new keyword is  a contructor function

function User(username,logincount,isLoggedIn){
    this.username=username   //this.username-> variable hai and username wo hai jo hm pass kr kr de rhe hai
    this.logincount=logincount
    this.isLoggedIn=isLoggedIn
    
    this.greeting=function(){
        console.log(`welcome ${this.username} `);
    }
    //return this
    return this
}

const userOne=new User('hitesh',12,true)
const userTwo=new User('chai aur code',3,false)
console.log(userOne.constructor);
console.log(userTwo.constructor);

//new keyword
// new object is being created
//constructor fxn is then called 
//this keyword arguments get injected
//we get fxn which we want