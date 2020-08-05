/******************************************/
/** Scroll To Section Button **/
/******************************************/

$(document).ready(function(){

    if($(window).width() > 1){
        $(".scroller").click(function(e){
            e.preventDefault();
            console.log("works");
            var aSelector = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(aSelector).offset().top
            }, 1200);
        })
    } 

    var buttonToTop = $('.back-to-top-container');

    $(window).scroll(function() {    
        var scrolled = $(window).scrollTop(),
        documentHeight = $(document).height(),
        windowHeight = $(window).height(),
        halfWayPoint = (documentHeight - windowHeight) / 2
    
        if (scrolled >= halfWayPoint - 800) {
            $(buttonToTop).fadeIn(300);
        } else {
            $(buttonToTop).fadeOut(300);
        }
    });

/******************************************/
/** Back To Top Button **/
/******************************************/


    $('.back-to-top-container').click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1200);
    })


/******************************************/
/** Scale Service Clicked **/
/******************************************/

    $('.grid-box img').click(function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            console.log('active class removed');
            $(this).removeClass('active');
        } else {
            console.log('active class added');
            $(this).addClass('active');
        }
    })

})

/******************************************/
/** Menu Button Clicked **/
/******************************************/

const menuBtn = document.querySelector('.menu-btn');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const navigationCenter = document.querySelector('.navigation-center');
let menuOpen = false;

$(menuBtn).click(function(e){
    e.preventDefault();
    if(!menuOpen){
        menuBtn.classList.add('open');
        overlay.classList.add('on');
        body.classList.add('mobile-on');
        navigationCenter.classList.add('turn-on')
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        overlay.classList.remove('on');
        body.classList.remove('mobile-on');
        navigationCenter.classList.remove('turn-on')
        menuOpen = false;
    }
})





