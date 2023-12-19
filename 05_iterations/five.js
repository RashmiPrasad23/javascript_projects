
//for each loop
const coding=["js","ruby","cpp","python","java"]
        
     //callback fxn in for each
coding.forEach(function(item){{
     console.log(item);
}})

coding.forEach((val)=>{
    console.log(val);
})

// function printMe(item){
//    console.log(item);
// }
// coding.forEach(printMe)

//forEach k paas 3 values aate hai-> item,index of item and whole array
coding.forEach((item,index,arr)=>{
   console.log(item,index,arr);
})


//array k andr, bahot saare obj
//db se array aati hai n wo obj k form mei rehti hai,toh foreach usi mei help krta hai
const myCoding=[
    {//oject 1
        languageName:'javascript',
        langguageFileName:'js'
    },
    {//obect 2
        languageName:'c++',
        langguageFileName:'cpp'
    },
    {//object 3
        languageName:'java',
        langguageFileName:'java'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})