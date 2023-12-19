//filter map reduce

const coding=["js","ruby","cpp","python","java"]

//for each value kuch return nhi krta (sometimes we want to return value of each)
// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);



//isiliye  filter use krte,qki ye value return bhi krti hai 
const myNums=[1,2,3,4,5,6]
const newNums=myNums.filter((num)=>{
    //condition  for jo bhi hm return krwana chahte hai
     return num>4
})
console.log(newNums);



//agr for each he use kr kr value return chahiye thi, then ek new empty array bnana pdtan hm usmei cndition k a/c value push krte
const newNum=[]
myNums.forEach((num)=>{
   if(num>4){
    newNum.push(num);
   }
})
console.log(newNum);

//eg. of real life eg.
const books=[
    {
        title:'book one',
        genre:'fiction',
        publish:1981,
        edition:2004
    },
    {
        title:'book two',
        genre:'non-fiction',
        publish:1992,
        edition:2008
    },
    {
        title:'book three',
        genre:'history',
        publish:1999,
        edition:2007
    }
]

let userBooks=books.filter((bk)=>{
    return bk.genre==='history'
})
userBooks=books.filter((bk)=>{
    return bk.publish>=1970 && bk.genre==='history'
})

console.log(userBooks);