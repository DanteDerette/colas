// funcão em jQuery para deixar somente numeros e virgulas em um input 
$('.so_n_e_virgula').on('input', function () {
    $(this).val(function (_, currentValue) {
      
      var newValue = currentValue.replace(/,/g, function (match, offset, input) {
        return offset === input.lastIndexOf(',') ? match : '';
      });
      
      
      return newValue.replace(/[^0-9,]/g, '');
    });
  });
