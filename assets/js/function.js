//agregar nuevos li
$("input[type='text']").on('keypress', function(event){ 
    if (event.which === 13) {
        var texto = $("input[type='text']").val()
        $('ul').append('<li><span class="trash btn hidden"><i class="fas fa-trash-alt"></i></span><span class="check btn hidden"><i class="fas fa-check"></i></span><span class="uncheck btn hidden"><i class="fas fa-times"></i></span><p>'+texto+'</p></li>'
        );
        $("input[type='text']").val('');
    }
});
//display check or uncheck
//marcar completo e incompleto
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completado');
});
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
$('.fa-plus').on('click',  function(event){
    $("input[type='text']").fadeToggle(300);
});

fa-plus