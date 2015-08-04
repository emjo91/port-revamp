$(document).ready(function() {
    var $window = $(window),
        $navMenu = $('#nav-menu');

    console.log($navMenu);
    
    $window.scroll(function(){
        if ($window.scrollTop() > 200) {
            $navMenu.addClass('expose');
            $navMenu.removeClass('go-ghost');
        } else {
            $navMenu.addClass('go-ghost');
            $navMenu.removeClass('expose');
        }
    });
    
});