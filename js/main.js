var bgColors=["red","blue","gray","violet","aqua","darkgreen","darkslateblue","white","chartreuse","rgb(92, 76, 230)","chocolate","gold"]
for(var i=0;i<bgColors.length;i++){
  $(".color-box li").eq(i).css("background-color",bgColors[i])
}


$(".color-box li").click(function(){
 let currentBg=$(this).css("background-color")
$("#change").css("color",currentBg)
$(".change").css("color",currentBg)
})

$(".color-box i").click(function(){
  let options=$(".color-options").outerWidth()
  if($(".color-box").css("right")=="0px")
  {
    $(".color-box").animate({"right":-options},2000)
  }
  else{
    $(".color-box").animate({"right":0},2000)
  }

})



$(window).scroll(function(){
    let currentOffset=$(window).scrollTop();

  if  (currentOffset>100){
 
    $("#nav").css({"background-color":"white", "transition": "all 2s"}) 
 
    $(".nav-link").css({"color":"#8e7754"})
 
    $('.nav-link').hover( function(){
 
      $(this).css('color', 'black');
  },
 
  function(){
    $(this).css('color', '#8e7754');
  });

  $(".imgNav").attr("src","photo/bakery-color.png");
  $("#upBtn").fadeIn(2000)
}else{

  $("#nav").css({"background-color":"transparent"})
  $("#upBtn").fadeOut(2000)

  $(".nav-link").css({"color":"white"})

  $('.nav-link').hover( function(){

    $(this).css('color', '#8e7754');

  },

  function(){

    $(this).css('color', 'white');

  });
  
$(".imgNav").attr("src","photo/bakery-light-1.png");

  }
   
})

$("#upBtn").click(function(){
  $("body,html").animate({scrollTop:0},1000)
})




function myFunction(x) {
    x.classList.toggle("change");
}
    
      

    







    