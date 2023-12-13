//dates
let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myNewDate=new Date(2023,0,23)
console.log(myNewDate.toDateString());

let myCreatedDate=new Date("12-13-2023")
console.log(myCreatedDate.toLocaleString());

//timestamp used for polls ,quizes,winner decide who answered first
let myTimeStamp=Date.now() //time in milisecond till now from 1 jan 1970
console.log(myTimeStamp);     
console.log(myCreatedDate.getTime())  //time in milisecond from above date till now

console.log(Math.floor(Date.now()/1000));  //time in sec

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//to customise our date more
newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: ''
})
console.log(newDate);