function so_aceita_num_e_virgula(id) {
    document.getElementById(id).addEventListener('input', function () {
      this.value = this.value.replace(/,/g, function (match, offset, input) {
        return offset === input.lastIndexOf(',') ? match : '';
      });
      this.value = this.value.replace(/[^0-9,?]/g, '');
    });
  }
