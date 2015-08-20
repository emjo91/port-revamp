$(document).ready(function() {
    var $window = $(window),
        $navMenu = $('.home #nav-menu'),
        $homeHeader = $('.home #header');
        
    // Fade in Navbar
    $window.scroll(function(){
        if ($window.scrollTop() > $homeHeader.height() - $navMenu.height()) {
            $navMenu.addClass('expose').fadeIn();
            $navMenu.removeClass('go-ghost');
        } else {
            $navMenu.addClass('go-ghost').fadeOut();
            $navMenu.removeClass('expose');
        }
    });
    
    // Spin the Cogs
    var $cog = $('.about .content-area i');
    
    $cog.mouseenter(function(){
        $(this).addClass('fa-spin');
    });
    
    $cog.mouseleave(function(){
        $(this).removeClass('fa-spin');
    });
    
    // Width for bars on About page
    var $bar = $('.about .bar');
    
    $window.scroll(function(){
        if ($window.scrollTop() > 120) {
            $bar.eq(0).addClass('width-90');
            $bar.eq(1).addClass('width-50');
            $bar.eq(2).addClass('width-50');
            $bar.eq(3).addClass('width-70');
            $bar.eq(4).addClass('width-90');
            $bar.eq(5).addClass('width-10');
            $bar.removeClass('width-20');
        }
    });
    
    //Go to object
    $('#nav-menu a, .page-buttons a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 900);
        return false;
    });
});