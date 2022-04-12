//JavaScript Document

$(document).ready(function(){

   /* $('button:nth(0)').click(function(){
        $('ol').prepend('<li>sssss')
    });
    $('button:nth(1)').click(function(){
        $('ol').append('<li>sssss')
    });*/
    setInterval(function(){
        movenext()},3000);
    var w=$('#slider ol li').width();
    var h=$('#slider ol li').height();
    var counter=$('#slider ol li').length;
    
     var total=w*counter;

    $('#slider img').css({width:w,height:h});
   $('#slider ol').css({width:total,marginLeft:-w});
   $('#slider').css({width:w,height:h});
    
    function movenext(){ 
        $('#slider ol').animate({left:w}
        ,2000,function(){ $('#slider ol').css('left','');
            $('#slider ol li:last-child').prependTo('#slider ol'); })}
  
    function movepre(){ 
        $('#slider ol').animate({left:-w}
        ,2000,function(){ $('#slider ol').css('left','');
            $('#slider ol li:first-child').appendTo('#slider ol'); })}
    
    
   $('#next').click(function(){movenext();});
    $('#pre').click(function(){movepre();});
});