//singleton obj
const tinderUser=new Object()
console.log(tinderUser); //empty obj

//non singleton obj
const tinderuser={}
console.log(tinderuser);

tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false

console.log(tinderuser);
console.log("******************************************************************************************************************************");
const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

// suppose if fullname do not exist then we can use optional chaining so that we can get response accordingly
//suppose we are getting some response from api and if value do not exist so we write ? and we get result accordingly
console.log(regularUser.fullname?.userfullname.firstname);

/***********************************************************objects merge***************************************************************** */
//m-1
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
//                target obj,source obj,source obj,source obj
const obj4=Object.assign({},obj1,obj2,obj3) //{} <- target object jismei data jaayega n store hoga
console.log(obj4);

//m-2
const obj5={...obj1,...obj2,...obj3}
console.log(obj5);

//m-3
//when data comes from database...it will in form of array
const users=[
    {
      id:1,
      email:"h@gmail.com"
    },
    {
        id:2,
        email:"r@gmail.com"
    },
    {
        id:3,
        email:"n@gmail.com"
    },
]

users[1].email
console.log(tinderuser);

//keys of object got cnverted into array ,now we can apply loop on this array n use it for various wrk
console.log(Object.keys(tinderuser));
//values of object got cnverted into array ,now we can apply loop on this array n use it for various wrk
console.log(Object.values(tinderuser));

//hrr key value ko array mei bna deti hai...1st property:key and 2nd property:value
console.log(Object.entries(tinderuser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to ckeck if it exists or not

/*************************************************DESTRUCTURING of OBJECT************************************************/ 
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor

//destructuring js
 
 //{kya extract krna hai}    kis obj se extract krna hai
const {courseInstructor:instructor}=course        //here courseInstructor is being shown as instructor
//console.log(courseInstructor);   
console.log(instructor);


/* eg in react
 const navbar=({company})=>{

// }
navbar(company="hitesh") */

/***********************************************************TALK ON JSON n API*********************************************************************** */
//API 
// jb bhi apna kaam kisi aur k sir pr daal dena hai,then it is said as API

//json format
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

//fetch se API call and response se json data mil jaayega

//api in array format
/*
[
    {},
    {},
    {}
]
*/
