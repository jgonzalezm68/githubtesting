$(document).ready(function(){
    var titulosArray=[];
    var valoresArray=[];
    $('.add').click(function(){
        var $parentDiv = $(this).closest('.image-item');
        var title = $parentDiv.find('img').attr('title'); 
        var value=$parentDiv.data('value');
        titulosArray.push(title);
        valoresArray.push(value);
    });
    $('.generarFactura').click(function(){
        if(titulosArray.length>0){
            var total=0;
            var table = '<table><tr><th>Titulo</th><th>valor</th></tr>';
            for(var i=0; i<titulosArray.length; i++){
                table += '<tr><td>'+ titulosArray[i] + '</td><td>'+valoresArray[i]+'</td></tr>';
                total+=valoresArray[i];
            }
            table += '<tr><td>Total</td><td>' + total + '</td></tr>';
            alert("Ya solo debes enviarnos un screenshot de esta factura a cualquiera de nuestros dos canales de comunicacion y seguir las instrucciones. Gracias por tu compra!!");
            table+='<table>';
            $('#factura').html(table);
            
            titulosArray=[];
            valoresArray=[];
        }else{
            $('#factura').html('<p>No hay productos seleccionados</p>')
        }
    });
});