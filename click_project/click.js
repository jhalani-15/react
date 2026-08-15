const button=document.querySelector('#but');
const count=document.querySelector('#click');


let click=0;

button.addEventListener("click",function(e){

click++;
    count.innerText=`${click}`;
})