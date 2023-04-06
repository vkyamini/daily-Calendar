var btnNine = document.querySelector("#btn-hour-9")
var btnten = document.querySelector("#btn-hour-10")
var btnele = document.querySelector("#btn-hour-11")
var btntwl = document.querySelector("#btn-hour-12")
var btnone = document.querySelector("#btn-hour-13")
var btntwo = document.querySelector("#btn-hour-14")
var btnthree = document.querySelector("#btn-hour-15")
var btnfour = document.querySelector("#btn-hour-16")
var btnfive = document.querySelector("#btn-hour-17")
var btnsix = document.querySelector("#btn-hour-18")

var Block = [ ];
var displayClass = "";
var slot ="";
var now = dayjs().hour();
   for(i=9;i<19;i++)
   {
   var thing = localStorage.getItem("btn-hour-"+[i]);
   document.querySelector("#hour-"+[i]).children[1].value = thing;
   
   }

var dateAndTime = setInterval(function() 
{
  var today = dayjs();
  $('#time').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'))
  
 },1000);

for (i=9;i<19;i++){

      if(now === i) {
      var displayClass = '#hour-'+[i];
      var finalBlock = document.querySelector(displayClass);
      finalBlock.setAttribute("class","row time-block present");
      } else if(now > i) {
      var displayClass = '#hour-'+[i];
      var finalBlock = document.querySelector(displayClass);
      finalBlock.setAttribute("class","row time-block past");
      } else if(now < i) {
      var displayClass = '#hour-'+[i];
      var finalBlock = document.querySelector(displayClass);
      finalBlock.setAttribute("class","row time-block future");
     }
}
     
       btnNine.addEventListener('click',function(){
       var hourNineData = document.querySelector("#hour-9").children[1];
       console.log(hourNineData.value)
      localStorage.setItem("btn-hour-9",hourNineData.value );
      
       })
      btnten.addEventListener('click',function(){
      var hourTenData = document.querySelector("#hour-10").children[1];
      localStorage.setItem("btn-hour-10",hourTenData.value);
      })
      btnele.addEventListener('click',function(){
      var houreleData = document.querySelector("#hour-11").children[1];
      localStorage.setItem("btn-hour-11",houreleData.value);
      })
      btntwl.addEventListener('click',function(){
      var hourtwlData = document.querySelector("#hour-12").children[1];
      localStorage.setItem("btn-hour-12",hourtwlData.value);
      })
      btnone.addEventListener('click',function(){
      var hourOneData = document.querySelector("#hour-13").children[1];
      localStorage.setItem("btn-hour-13",hourOneData.value);
      })
      btntwo.addEventListener('click',function(){
      var hourTwoData = document.querySelector("#hour-14").children[1];
      localStorage.setItem("btn-hour-14",hourTwoData.value);
      })
      btnthree.addEventListener('click',function(){
      var hourThreeData = document.querySelector("#hour-15").children[1];
      localStorage.setItem("btn-hour-15",hourThreeData.value);
      })
      btnfour.addEventListener('click',function(){
      var hourFourData = document.querySelector("#hour-16").children[1];
      localStorage.setItem("btn-hour-16",hourFourData.value);
      })
      btnfive.addEventListener('click',function(){
      var hourFiveData = document.querySelector("#hour-17").children[1];
      localStorage.setItem("btn-hour-17",hourFiveData.value);
      })
      btnsix.addEventListener('click',function(){
      var hourSixData = document.querySelector("#hour-18").children[1];
      localStorage.setItem("btn-hour-18",hourSixData.value);
      })



































    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.