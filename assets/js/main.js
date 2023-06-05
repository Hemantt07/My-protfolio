$(document).ready(function(){

    // navbar toggle
    $('#nav-toggle').click(function(){
        $(this).toggleClass('active');
        $('header .top-header nav .nav-container').slideToggle();
    });

    // Back to top

    $('#back-to-top').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100 ) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    
    $("#back-to-top").click(function() {
        $("html, body").animate({scrollTop: 0}, 10);
     });

});
