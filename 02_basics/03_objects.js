//to declare obj->two ways are there -> 1) literals  2) constructor


//singleton
//when obj is made thru constructor then it is singleton(ek he obj hai)
//Object.create


//literals- se jb bnte toh wo singleton nhi hote ,uske multiple instances bnn jaate hai


//object literals


//using symbol in object key
const mySym=Symbol("key1")

//object decalartion
const JsUser={
    name:"hitesh",
    [mySym]:"mykey1",   //symbol is written like this in object,keep in mind as it is important to know for interview
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sat"]
}
//object access
console.log(JsUser.email)
//object acces-> better way
console.log(JsUser["email"])
console.log(JsUser[mySym])

JsUser.email="hitesh@chatgpt.com"
// Object.freeze(JsUser)             //when we do not want any change in object by anyone,then we freeze the object
JsUser.email="hitesh@microsoft.com"  //this change wont happen
console.log(JsUser);



//function in object
JsUser.greeting=function(){
    console.log("hello js user");
}

console.log(JsUser.greeting());


JsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(JsUser.greetingTwo());
