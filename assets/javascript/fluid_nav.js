$(document).ready(function(){
  $(".toggler").click(function(){
    $("#navig_dropdown").slideToggle()
  })
  
  if ($(".toggler").is(":visible")) {
    $("#navig_dropdown").hide()
  } else {
    $("#navig_dropdown").show()
  }
});
$(window).resize(function(){
  if ($(".toggler").is(":visible")) {
    $("#navig_dropdown").hide()
  } else {
    $("#navig_dropdown").show()
  }
})
