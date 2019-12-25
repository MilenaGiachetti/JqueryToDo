if(localStorage.listItems !== ''){
    var localItems = new Array;
    localItems = JSON.parse(localStorage.getItem('listItems'));
    console.log(localItems);
    for(i=0; i < localItems.length; i++){
        console.log(localItems[i]);
        $('ul').append('<li><p>'+localItems[i]+'</p><span class="trash btn"><i class="fas fa-trash-alt"></i></span><span class="check btn"><i class="fas fa-check"></i></span><span class="uncheck btn"><i class="fas fa-times"></i></span></li>'
        );
    }
}

//agregar nuevos li
var listItems = [];
$("input[type='text']").on('keypress', function(event){ 
    if (event.which === 13) {
        var texto = $("input[type='text']").val()
        $('ul').append('<li><p>'+texto+'</p><span class="trash btn"><i class="fas fa-trash-alt"></i></span><span class="check btn"><i class="fas fa-check"></i></span><span class="uncheck btn"><i class="fas fa-times"></i></span></li>'
        );
        $("input[type='text']").val('');
        listItems.push(texto);
        localStorage.setItem('listItems', JSON.stringify(listItems));
    }
});
$('.uncheck').toggleClass('hidden');
//display check or uncheck
//marcar completo e incompleto
function isTouchDevice() {
    return 'ontouchstart' in document.documentElement;
}
if (!isTouchDevice()) {
    $('ul').on('click', 'li', function(){
        $(this).toggleClass('completado');
        $(this).children('.check').toggleClass('hidden');
        $(this).children('.uncheck').toggleClass('hidden');    
    });
}
$('ul').on('click','.check', function(event){
    $(this).parent("li").addClass('completado');
    $(this).addClass('hidden');
    $(this).siblings('.uncheck').removeClass('hidden');    
    event.stopPropagation();
});
$('ul').on('click', '.uncheck', function(event){
    $(this).parent("li").removeClass('completado');
    $(this).addClass('hidden');
    $(this).siblings('.check').removeClass('hidden');    
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
//cambiar entre check y uncheck en cada li
