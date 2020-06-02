$(document).ready(function() {
  $(".clickJava").click(function() {
    $("#javaName").toggle();
    $("#javaDef").toggle();
  })

  $(".clickOperator").click(function(){
    $("#operatorName").toggle();
    $("#operatorDef").toggle();
  })
})