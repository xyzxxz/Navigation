$('.toolbar .toggle').on('click', function() {
    console.log('toolbar');
    if($('body').hasClass('dark')) {
        $(this).children('span').text(' ');
        $('body').removeClass('dark');
    } else {
        $(this).children('span').text(' ');
        $('body').addClass('dark');
    }
})