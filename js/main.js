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
        if ($window.scrollTop() > 1) {
            $bar.eq(0).addClass('width-90');
            $bar.eq(1).addClass('width-50');
            $bar.eq(2).addClass('width-50');
            $bar.eq(3).addClass('width-70');
            $bar.eq(4).addClass('width-90');
            $bar.eq(5).addClass('width-10');
            $bar.removeClass('width-20');
        }
    });
    
    // Go to object
    $('#nav-menu a, .page-buttons a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 70
        }, 1000);
        return false;
    });
    
    // Speech Bubble Sizing & Time of day Calculator
    var $speechBubbleText = $('#header h1.greeting'),
        $currentTime = new Date().getHours();
    
    // console.log($currentTime);
    
    if ($currentTime >= 1 && $currentTime <= 11) {
        $speechBubbleText.html("g'mornin,");
    } else if ($currentTime >= 17 && $currentTime <= 19) {
        $speechBubbleText.html("evenin',");
    }
    
    // console.log($speechBubbleText.text().length);
    
    //This will be a function that determines the height of the body of the page....then will determine if it should use the scroll animated bar widths. It will do this by calculating the position of the footer...this way it's fluid.
    // var $aboutFooter = $('.about #footer');
    //
    // console.log($aboutFooter.position().top + $aboutFooter.height());
    // console.log($window.height());
    
    // TODO
    // if ($window.height >== $aboutFooter.position().top + $aboutFooter.height()) {
    //     console.log('do not scroll, pls!);
    // } else {
    //     console.log('we are good to scroll');
    // }
    
    // TODO
    // Need to make a rule that if the gear is not a link, then it shouldn't spin.
    
});