var currentDate = moment().format("dddd, MMMM DD YYYY");
$("#currentDay").text(currentDate);

$(document).ready(function() {

function updateHours() {
    var currentHour = moment().format('H');
    console.log(currentHour);

    var allHours = [9, 10, 11, 12, 13, 14, 15, 16 , 17];
            
    for (var i = 0; i < allHours.length; i++) {    
       
    var timeEl = allHours[i];
       console.log(timeEl);
    var currentTime = parseInt(currentHour);
       console.log(currentTime);
         
    $("#"+currentHour+"t").addClass("present")
    if (currentHour < timeEl) {
    $("#" +allHours[i]+"t").addClass("future")
    } else if( currentHour > timeEl){
    $("#" +allHours[i]+"t").addClass("past")
    }  
    }
}
  
updateHours();

$(".saveBtn").on("click", function() {
    event.preventDefault();
    var hourEl = $(this).siblings(".hour").attr("id")
    var plan =  $(this).prev().val();
    localStorage.setItem(hourEl, plan);

   
})

function retrieveData () {

    $("#9t").text(localStorage.getItem("9AM"));
    $("#10t").text(localStorage.getItem("10AM"));
    $("#11t").text(localStorage.getItem("11AM"));
    $("#12t").text(localStorage.getItem("12PM"));
    $("#13t").text(localStorage.getItem("1PM"));
    $("#14t").text(localStorage.getItem("2PM"));
    $("#15t").text(localStorage.getItem("3PM"));
    $("#16t").text(localStorage.getItem("4PM"));
    $("#17t").text(localStorage.getItem("5PM"));
}

retrieveData();



})







