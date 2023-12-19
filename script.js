// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//localStorage.clear();

$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var currTime = dayjs().format("HH");
  console.log(currTime);
  var hrEl = $("container-lg").children;  
  
  var time = dayjs();
  $('#currentDay').text(time);
  
  var tasks = [];


  var saveBtn = $('.saveBtn');
  //value = text input
  // key = button.parent.id
  //save local storage
  //currTime = 17;
  
  
  function saved(event) {
    var clicked = $(event.target);
    var keyName = clicked.parent("div").attr("time");
    var txtBox = clicked.siblings('input[type="text"]');
    //console.log(txtBox);
    console.log(keyName);
    var inputValue = txtBox.val();

    
  
    localStorage.setItem(keyName, inputValue);
    
  }
  
  saveBtn.on('click',saved);
  
  

saveBtn.each(function() {
  var keyName = $(this).parent('div').attr('time');
  var storedVal = localStorage.getItem(keyName);
  if (storedVal) {
    $(this).siblings('input[type="text"]').val(storedVal);
  }
  
  });


  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  saveBtn.each(function() {
    var time = $(this).parent('div').attr('time');
    console.log(time);
    if (currTime < time) {
      $(this).parent('div').attr('id','future');
    }
    else if (currTime > time) {
      $(this).parent('div').attr('id','past');
    }
    else {
      $(this).parent('div').attr('id','present');
    }
    console.log( $(this).parent('div').attr('id'));
  })
  console.log(currTime);
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding input elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
})