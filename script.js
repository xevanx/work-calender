$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  $("#1st-hour .description").val(localStorage.getItem("1st-hour"));
  $("#2nd-hour .description").val(localStorage.getItem("2nd-hour"));
  $("#3rd-hour .description").val(localStorage.getItem("3rd-hour"));
  $("#4th-hour .description").val(localStorage.getItem("4th-hour"));
  $("#5th-hour .description").val(localStorage.getItem("5th-hour"));
  $("#6th-hour .description").val(localStorage.getItem("6th-hour"));
  $("#7th-hour .description").val(localStorage.getItem("7th-hour"));
  $("#8th-hour .description").val(localStorage.getItem("8th-hour"));
  $("#9th-hour .description").val(localStorage.getItem("9th-hour"));
  $("#10st-hour .description").val(localStorage.getItem("10th-hour"));
  $("#12nd-hour .description").val(localStorage.getItem("11th-hour"));
  $("#13rd-hour .description").val(localStorage.getItem("12th-hour"));

  function hourUpdater() {
    var currentHour = moment().hours();
    $(".save-time").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  var interval = setInterval(hourUpdater, 15000);

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
