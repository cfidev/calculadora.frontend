$(function() {
    let result = '';
    let numMinusSigns = 0;
    let numPlusSigns = 0;
    let finalResult = null;

    $('#visor').val(0);

    $('.btn').click(function() {
        let buttonVal = $(this).val();

        if ($.isNumeric(buttonVal)) {
            if (result === '0') {
                result = buttonVal;
            } else {
                result += buttonVal;
            }
            $('#visor').val(result);
            numMinusSigns = 0;
            numPlusSigns = 0;
        } else {
            switch(buttonVal) {
                case '+':
                    if (
                        result === '' ||
                        result.endsWith('* ') ||
                        result.endsWith('/ ') ||
                        numPlusSigns === 1) {
                        break;
                    }
                    result += ' + ';
                    $('#visor').val(result)
                    numMinusSigns = 0;
                    numPlusSigns++;
                    break;
                case '-':
                    if (result === '' ||
                        result.endsWith('* ') ||
                        result.endsWith('/ ') ||
                        numMinusSigns === 2) {
                        break;
                    }
                    result += ' - ';
                    $('#visor').val(result)
                    numPlusSigns = 0;
                    numMinusSigns++;
                    break;
                case '*':
                    if (result === '' ||
                        result.endsWith('* ') ||
                        result.endsWith('/ ')) {
                        break;
                    }
                    result += ' * ';
                    $('#visor').val(result)
                    numMinusSigns = 0;
                    numPlusSigns = 0;
                    break;
                case '/':
                    if (result === '' ||
                        result.endsWith('* ') ||
                        result.endsWith('/ ')) {
                        break;
                    }
                    result += ' / ';
                    $('#visor').val(result)
                    numMinusSigns = 0;
                    numPlusSigns = 0;
                    break;
                case '=':
                    finalResult = eval(result);
                    $('#visor').val(finalResult);
                    result = finalResult.toString();
                    numMinusSigns = 0;
                    numPlusSigns = 0;
                    break;
                case 'C':
                    result = '0';
                    $('#visor').val(result);
                    numMinusSigns = 0;
                    numPlusSigns = 0;
                    break;
                default:
                    return result;
            }
        }
    });
});

