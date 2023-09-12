// funcão em jQuery para deixar somente numeros e virgulas em um input 
$('.myClass').on('input', function () {
    $(this).val(function (_, currentValue) {
      
      var newValue = currentValue.replace(/,/g, function (match, offset, input) {
        return offset === input.lastIndexOf(',') ? match : '';
      });
      
      
      return newValue.replace(/[^0-9,]/g, '');
    });
  });
