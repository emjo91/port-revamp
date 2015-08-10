$(document).ready(function() {
    var $window = $(window),
        $navMenu = $('.home #nav-menu');

    console.log($navMenu);
    
    $window.scroll(function(){
        if ($window.scrollTop() > 200) {
            $navMenu.addClass('expose').fadeIn();
            $navMenu.removeClass('go-ghost');
        } else {
            $navMenu.addClass('go-ghost').fadeOut();
            $navMenu.removeClass('expose');
        }
    });
    
});