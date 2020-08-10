$(document).ready(function(){

    $(window).scroll(function(){
        var navbar = $('header nav'),
            navHeight = navbar.height(),
            scrollPos = $(this).scrollTop();

        if(scrollPos > navHeight){
            navbar.addClass('fixed');
            $('header').css('padding-top', navHeight + 'px')
        }
        else {
            navbar.removeClass('fixed');
            $('header').css('padding-top', '0')
        }

    })

})