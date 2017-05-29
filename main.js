var slideArr,slideIndex;
$(document).ready(function(){
    var scount = 0;
    var translate = 0;

    slideIndex=1;
    slideArr=$('.con');
    showSlides(slideIndex);

    setInterval(function(){
        translate = translate-25;
        scount++;

        if(scount%4===0){
            translate = 0;
        }
        $('.slide-show-slides').css('transform','translateX('+translate+'%)');
    },3000);

});
function showSlides(n){
    if(n>3)
        slideIndex=1;
    if(n<1)
        slideIndex=3;

    for(var i=0;i<3;i++){
        $(slideArr[i]).css({'display':'none'});
    }

    $(slideArr[slideIndex-1]).css({'display':'inline-table'});
}

setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
},3000);
