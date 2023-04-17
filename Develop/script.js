// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


$(function () {
  //Updates the time every second
setInterval(()=>{
  /* $('#currentDay').text(dayjs()); */
  $('#currentDay').text(dayjs().format('ddd, MMM D, YYYY h:mm A'));
  updateTimeBlocks();
},1000);


//Changes the color of the time blocks depending on the hour
//Uses .each() from jQuery we can loop through the DOM 
//For every element with the class "time-block" the function will run
//The keyword "this" refers to the element in this case
function updateTimeBlocks(){
  $('.time-block').each(function(){
    let currentHour = dayjs().hour();
    let timeBlock = parseInt ($(this).attr('id').split('-')[1])
    if (timeBlock > currentHour){
      $(this).addClass('future');
    }else if(timeBlock < currentHour){
      $(this).removeClass('future');
      $(this).addClass('past');
    }else{
      $(this).addClass('present');
    }
  })
}
//Calls the function so that it renders on page-load
updateTimeBlocks();
//updates the time block colors every 5 minutes
setInterval(updateTimeBlocks, 300000)


//TODO: EVENT LISTENER IN THE SAVE BUTTON THAT SAVES THE DATA FROM THE DESCRIPTION
$('.saveBtn').on('click', function(){

})

//TODO: GETTING AND RENDERING THE SAVED DATA IN THE CORRESPONDING TEXTBLOCK
});

