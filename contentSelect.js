$(function(){
    $('#profiletabs ul li a').on('click', function(e){
        e.preventDefault();
        let newContent = $(this).attr('href');

        $('#profiletabs ul li a').removeClass('sel');
        $(this).addClass('sel');

        $('#content section').each(function(){
            if(!$(this).hasClass('hidden')) {$(this).addClass('hidden');}
        });

        $(newContent).removeClass('hidden');
    });
})