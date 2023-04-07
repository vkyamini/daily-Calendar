var now = dayjs().hour();
// Display clock
setInterval(function() {
  $('#time').text(dayjs().format('dddd, MMMM D YYYY, h:mm:ss a'));
}, 1000);
for (i=9;i<19;i++){
  // display current task
  var task = localStorage.getItem("btn-hour-"+[i]);
  document.querySelector("#hour-"+[i]).children[1].value = task;

  // add event listener for save button
  addBtnEventListener(i);

  // change css based on time
  var finalBlock = document.querySelector('#hour-'+i);
  if(now === i) {
    finalBlock.setAttribute("class","row time-block present");
  } else if(now > i) {
    finalBlock.setAttribute("class","row time-block past");
  } else if(now < i) {
    finalBlock.setAttribute("class","row time-block future");
  }
}

// function that handles save click
function addBtnEventListener (idx) {
  var btn = document.querySelector("#btn-hour-"+ idx);
  btn.addEventListener("click", function () {
    var textArea = document.querySelector("#hour-" + idx).children[1];
    localStorage.setItem("btn-hour-" + idx, textArea.value);
  });
}