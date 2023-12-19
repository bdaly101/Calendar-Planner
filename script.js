

$(document).ready(function () {
  
  var currTime = dayjs().format("HH");
  console.log(currTime);
  var hrEl = $("container-lg").children;  
  
  var time = dayjs();
  $('#currentDay').text(time);
  
  var tasks = [];


  var saveBtn = $('.saveBtn');
  
  
  
  function saved(event) {
    var clicked = $(event.target);
    var keyName = clicked.parent("div").attr("time");
    var txtBox = clicked.siblings('input[type="text"]');
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


  
  

  saveBtn.each(function() {
    var time = $(this).parent('div').attr('time');
    
    if (currTime < time) {
      $(this).parent('div').attr('id','future');
    }
    else if (currTime > time) {
      $(this).parent('div').attr('id','past');
    }
    else {
      $(this).parent('div').attr('id','present');
    }
  })
  
})