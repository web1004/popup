$(document).ready(function(){

	$(".btn_close").click(function(){

    $(this).stop(true,true).animate({marginTop:"-132px"},500); //close버튼
    $(".pop_box").stop(true,true).animate({marginTop:"-132px"},500); //popup내용
    $(".btn_dayclose").stop(true,true).animate({marginTop:"-132px"},500);  //오늘하루열지않기
    $("#wrap").stop(true,true).animate({marginTop:"0"},500); //컨텐츠

  });

});
