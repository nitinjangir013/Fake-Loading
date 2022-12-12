$(document).ready(function(){
  setInterval(function(){
    $(".image>div").animate({"margin-left":"100%"},1000,function(){
      $(this).css({"margin-left":"-50%"});
    });
  },1000);
});