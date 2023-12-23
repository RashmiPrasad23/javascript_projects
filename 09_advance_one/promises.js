//promise is an obj     ->to gives us async functionality
//new keyword gives new instance

//promise created  
const promiseOne=new Promise((resolve,reject)=>{
    //do an async task
    //db calls,cryptography,network call
    setTimeout(function(){
        console.log('async task is complete');
        resolve()  //cnnected with then
    },1000)
})

//promise consume
//then is connected with resolve
//then mei ek callback hota jo ki ek argument receive krta hai from the above promiseOne promise 
promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2 without storing in variable");
    },1000)
    resolve();
}).then(function(){
    console.log("async 2 resolved");
})

//suppose this promise brings data from any network or db
const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(function(){
        //resolve mei data pass ,or fxn pass
      resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
//resolve mei jo bhi data pass kri hmne wo hmey then k thru mil jata hai
//data pass in this then
promiseThree.then(function(user){
   console.log(user);
})

const promisFour=new Promise((resolve,reject)=>{
       setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"hitesh",password:"1234"})
        }else{
            reject('ERROR: Something went wrong')
        }
       },1000)
})

//there can be multiple then and multiple catch
promisFour
.then((user)=>{
    console.log(user);
    return user.username;
    
})//chaining
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})//finally is executed when promise  is settled(resolved or rejected)
.finally(()=>{
    console.log("the promise is either resolved or rejected");
})


//Method 2-------------->>>>>>>>>
const promiseFive=new Promise((resolve,reject)=>{
       setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('error,js went wrong')
        }
       },1000)
})
//promise sirf then catch se handle nhi hota,usko hm async await se bhi handle kr skte hai
//jaise db cnnect hua he nhi so we dont want to move forward
//async -await ->directly error handle nhi krte hai

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

//eg->> getting data from url- async await ko use kr kr
//iss code mei json mei cnvert hone mei tym lgta hai,isiliye await udhr bhi jaayega
// async function getAllUsers(){
//     try{
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()  //data string format mei aayegi,so to access it we neeed to cnvert it into json
//         console.log(data);
//     }catch(error){
//         console.log(error);
//     }
// }
// getAllUsers()

//then catch ko use kr kr same above kaam
//fetch ek promise deta hai
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//    return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//    console.log(error);
// })

//
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
