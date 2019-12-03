//agregar nuevos li
$("input[type='text']").on('keypress', function(event){ 
    if (event.which === 13) {
        var texto = $("input[type='text']").val()
        $('ul').append('<li><p>'+texto+'</p><span class="trash btn hidden"><i class="fas fa-trash-alt"></i></span><span class="check btn hidden"><i class="fas fa-check"></i></span><span class="uncheck btn hidden"><i class="fas fa-times"></i></span></li>'
        );
        $("input[type='text']").val('');
    }
});
//display check or uncheck
//marcar completo e incompleto
if(window.matchMedia("(min-width: 700px)")){
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('completado');
    });
}
$('ul').on('click','.check', function(event){
    $(this).parent("li").addClass('completado');
    event.stopPropagation();
});
$('ul').on('click', '.uncheck', function(event){
    $(this).parent("li").removeClass('completado');
    event.stopPropagation();
});
//eliminar list items
$('ul').on('click', '.trash', function(event){
    $(this).parent("li").slideUp(300, function(){
        remove();
    });
    event.stopPropagation();
});
$('#toggleInput').on('click', '.fa-plus', function(event){
    $("input[type='text']").fadeIn(300);
    $('#toggleInput').html('<i class="fas fa-minus"></i>')
});
$('#toggleInput').on('click','.fa-minus', function(event){
    $("input[type='text']").fadeOut(300);
    $('#toggleInput').html('<i class="fas fa-plus"></i>')
});

