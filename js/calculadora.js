$(function() {
  let result = '';
  let operation = '';

  $('.btn').click(function() {
    let buttonVal = $(this).val();

    if ($.isNumeric(buttonVal)) {
      result += buttonVal;
      $('#visor').val(result);
    } else {
      switch(buttonVal) {
        case '+':
          result += ' + ';
          operation = '+';
          break;
        case '-':
          result += ' - ';
          operation = '-';
          break;
        case '*':
          result += ' * ';
          operation = '*';
          break;
        case '/':
          result += ' / ';
          operation = '/';
          break;
        case '=':
          result = eval(result);
          $('#visor').val(result);
          break;
        case 'C':
          result = '';
          $('#visor').val(result);
          break;
        default:
          return result;
      }
    }
  });
});

