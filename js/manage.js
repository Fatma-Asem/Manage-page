$(document).ready(function() {

    // add nice scroll to body
    // $('body').niceScroll({
    //     cursorcolor:'#000',
    //     cursorwidth:'10px',
    //     cursorborder:'none'
    // });



    
    if ($(window).width() <= 620 ) {
        $('.slider-img').slick({
                slidesToShow: 1,
                dots: false,
                infinite: true,
                speed: 300,
                touchMove: false,
                slidesToScroll: 1,
                draggable: true,
                centerMode: false,
        });
        
    } 
    else {
        $('.slider-img').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            touchMove: false,
            slidesToScroll: 1,
            draggable: true,
            centerMode: false
        });
    }


    $('.navbar-header .navbar-toggle').on('click', function(){
        $('body').toggleClass('shown-over').toggleClass('hide-over');
        $('.overlay-header').toggleClass('overlay').toggleClass('overlay-show'), 
        $(".navbar-toggle .fas").toggleClass('fa-bars').toggleClass('fa-times');
    });


    $(document).mouseup(function() {
        $('.overlay-header').removeClass('overlay-show').addClass('overlay');
        $('.navbar .navbar-collapse').removeClass('in').addClass('collapse');
        $('body').addClass('shown-over');
    }); 


    
});