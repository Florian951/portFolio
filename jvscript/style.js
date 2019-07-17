
$('a','nav').mouseover(function(){
    $('span','nav').animate({
        'width': $(this).width(),
         'left': $(this).position().left}
    ,'fast')
})

