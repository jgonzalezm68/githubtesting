//jQuery
$(document).ready(function(){
    $('#select').on('change', function(){
        var selectedValue = $(this).val();
        if(selectedValue){
            window.location.href=selectedValue;
        }
    });
});

