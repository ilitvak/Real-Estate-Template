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
let menuOpen = false;

$(menuBtn).click(function(e){
    e.preventDefault();
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})





