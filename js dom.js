// document.getElementsByTagName("h3"); // practice it in console; it returns HTML Collection
// var y=document.getElementsByTagName("h3"); 
// var t = document.getElementsByTagName("h3").innerHTML = "Good students"; // will not show any change 
// document.getElementsByTagName("h3")[0].innerHTML = "Good girls";
// document.getElementsByTagName("h3")[1].innerHTML = "Good boys";
// for(let i=0;i<y.length;i++)
// {

//     function message(){

//         alert('error')
//     }
    function messagebutton1(){
        alert("Clicked Button 1");
    }
    function messagebutton2(){
       alert("Clicked Button 2");
   }
   
   function clickParagraph(){
       alert("clicked the Paragraph()");
   }
   
   //using query selector for onclick
   function messagebutton1(){
       var paraVar = document.querySelector("#paraId");
       paraVar.innerHTML = "<span style = 'color:red'> You have clicked the Button 1</span>";
   }
   
   function messagebutton2(){
       var paraVar = document.querySelector("#paraId");
       paraVar.innerHTML = "You have the clicked the Button 2";
   }
   function messagebutton1(){
    alert("Clicked Button 1");
}
function messagebutton2(){
   alert("Clicked Button 2");
}

function clickParagraph(){
   alert("clicked the Paragraph()");
}

//using query selector for onclick
function messagebutton1(){
   var paraVar = document.querySelector("#paraId");
   paraVar.innerHTML = "<span style = 'color:red'> You have clicked the Button 1</span>";
}

function messagebutton2(){
   var paraVar = document.querySelector("#paraId");
   paraVar.innerHTML = "You have the clicked the Button 2";
}
var paraVar = document.querySelector("#paraId");
// Change CSS dynamically
function addStyle(){
   paraVar.style.color = "red";
   paraVar.style.fontSize = "3rem";
   paraVar.style.fontWeight =  "bold";
   paraVar.style.fontStyle = "italic";
}
function removeStyle(){
         paraVar.style = " ";
     }
    //  var paraVar = document.querySelector("#paraId");
      function addStyle(){
        paraVar.classList = "";
       paraVar.classList.add("para-style");
        console.log(paraVar.classList);
       }
       var a = "next";
function nextPage(){
   location.href="next.html";
   location.href= a +".html";
 }