//GETTING CURRENT DATE
let date=new Date();
let day= date.getDate();
if(day<10){
    day="0"+day;
}
let month=date.getMonth()+1;
if(month<10){
    month="0"+month;
    }
let year=date.getFullYear();
let currentDate=`${year}-${month}-${day}`;
console.log(currentDate);
//END
const todoForm=document.querySelector("#to-doForm");
const taskName=document.querySelector("input[type=text]");
const priority=document.querySelector(".priority");
const deadline=document.querySelector("input[type=date]");
deadline.setAttribute("min",currentDate);//DISABLE PAST DATES
const a=document.querySelector(".aList");
const b=document.querySelector(".bList");
const c=document.querySelector(".cList");
const list=document.querySelector(".list");


const add=document.addEventListener("submit",function(e){
    e.preventDefault();
    
    newLi=document.createElement("li");
    newLi.innerHTML=`${taskName.value}
    <span style="font-size:18px"><a href="#" id="remove" onclick="deleteItem(this)">&#9986;</a></span>
    `;

     if(deadline.value===currentDate){
         newLi.classList.add("dead");
     }
     if(priority.value==="high"){
       
     a.append(newLi);
     }
     else if(priority.value==="medium"){
        
         b.append(newLi);
     }
     else{
         c.append(newLi);
     }
   

});


const strikeThrough=function(element){
   let target=element;
   target.parentNode.parentNode.style.textDecoration="line-through";
   element.setAttribute("count","1");
   target.innerHTML="&#10006;"
}
const deleteItem=function(element){
    let target=element;
    console.log(target);
    if(element.hasAttribute("count")){
        target.parentNode.parentNode.remove();
 }
 else{
     strikeThrough(target);
 }
      
}
