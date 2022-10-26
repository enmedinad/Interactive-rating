$(document).ready(function(){
    $('.submit-after-box').hide()
});
$('.option').click(function(){
    //reset class
    $('.submit-options').find('.option').attr('class', 'option');
    //class add for visual interaction
    $(this).addClass('checked');

    //Value selected printed in html xd
    $('#selected-value').html(
        $(this).html()
    );
});


$('.submit-button').click(function(){
    //check if empty
    if($('#selected-value').html() == ''){
        alert('Debe seleccionar su puntuacion primero')
    }else(
        $('.submit-after-box').show(),
        $('.submit-box').hide()
    )
});




