$(document).ready(function(){

    // navbar toggle
    $('#nav-toggle').click(function(){
        $(this).toggleClass('active');
        $('header .top-header nav .nav-container').slideToggle();
    });

});
