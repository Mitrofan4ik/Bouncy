$(document).ready(function() {
    $("#accordion").zAccordion({
        tabWidth: "26%",
        width: "100%",
        height: "319px"
        });
});

new AnimOnScroll( document.getElementById( 'grid' ), {
    minDuration : 0.4,
    maxDuration : 0.7,
    viewportFactor : 0.2
});

$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    auto: true,
    infiniteLoop: true
});

$('.bxtestimonilas').bxSlider({
    mode: 'horizontal',
    captions: true,
    adaptiveHeight: true,
    auto: true,
    pause: 8000,
    infiniteLoop: true
});

$('.bxblog').bxSlider({
    mode: 'horizontal',
    adaptiveHeight: true,
    auto: true,
    pause: 6000,
    infiniteLoop: true
});

jQuery(function($) {
   $(window).scroll(function(){
        if($(this).scrollTop()>140){
            $('.navbar').addClass('fixed');
        }
        else if ($(this).scrollTop()<140){
            $('.navbar').removeClass('fixed');
        }
    });
});

$(document).ready(function(){
        $(".navbar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

$('.hidden_map').click(function(){

    $('.map_banner').toggleClass('open_map');

});

$('.map_banner').click(function(){

    $('.open_map').remoClass('map_banner');

});



/* open menu*/
 
var main = function() {
 
    $('.icon-menu').click(function() {  
        $('.navbar').animate({ 
            left: '0px'  
        }, 200);
         
        $('body').animate({ 
            left: '180px'
        }, 200);

    });
 
/* close menu */
 
    $('.dr-trigger').click(function() {  
        $('.navbar').animate({  
            left: '-180px' 
        }, 200); 
         
    $('body').animate({  
            left: '0px'
        }, 200); 
    });
};     
 
$(document).ready(main); 