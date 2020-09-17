$(document).ready(function () {
    $("#sidebar1").mCustomScrollbar({
        theme: "minimal"
    });

    $('.dismiss, .overlay').on('click', function () {
        $('#sidebar1').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.layer1').on('click', function () {
        $('#sidebar1').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $("#sidebar2").mCustomScrollbar({
        theme: "minimal"
    });

    $('.dismiss, .overlay').on('click', function () {
        $('#sidebar2').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('.layer2').on('click', function () {
        $('#sidebar2').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});