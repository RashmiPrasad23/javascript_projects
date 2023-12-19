//for
for(let index=0;index<3;index++){
    const element=index;
    console.log(element);
}

let myArr=["flash","batman","superman"]
for(let i=0;i<myArr.length;i++){
    const elem=myArr[i];
    console.log(elem);
}

//break n continue
for(let index=0;index<20;index++){
   if(index==5){
    console.log(`detected 5`);
    break
   }
    console.log(`value of index is ${index}`);
}

for(let index=0;index<20;index++){
    if(index==5){
     console.log(`detected 5`);
     continue
    }
     console.log(`value of index is ${index}`);
 }