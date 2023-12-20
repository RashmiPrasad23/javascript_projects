//project 1 ->js code
//background color changer

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  //console.log(btn)
  btn.addEventListener('click',function(e){
    // console.log(e)
    // console.log(e.target)//event aa kidhr se rha hai
   if(e.target.id==='grey'){
     body.style.backgroundColor=e.target.id;
   }
   if(e.target.id==='white'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='blue'){
    body.style.backgroundColor=e.target.id;
  }
  if(e.target.id==='yellow'){
    body.style.backgroundColor=e.target.id;
  }
  
  })
});
