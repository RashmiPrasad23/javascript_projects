//reduce
//shopping cart k bills ko add mei use
const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currval){
    console.log(`acc ${acc} , curr ${currval}`);
    return acc+currval
},0)
console.log(myTotal);

const total=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(total);

//real life example  of reduce fxn
const shoppingCart=[
    {
        itemname:"js course",
        price:299
    },
    {
        itemname:"web dev course",
        price:799
    },
    {
        itemname:"data science course",
        price:12999
    }
]

const price=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(price);