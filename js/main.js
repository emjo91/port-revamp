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
    
});