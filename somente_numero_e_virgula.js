$('#').on('input', function () {
    $(this).val(function (_, currentValue) {
      // Remove all commas except the first one
      var newValue = currentValue.replace(/,/g, function (match, offset, input) {
        return offset === input.lastIndexOf(',') ? match : '';
      });
      
      // Remove any characters other than numbers and commas
      return newValue.replace(/[^0-9,]/g, '');
    });
  });
