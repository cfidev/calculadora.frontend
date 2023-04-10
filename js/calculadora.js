// $(function() {

//   // let displayVal = '';

//   $('.btn').click(function() {
//   let buttonVal = $(this).val();

//   switch(buttonVal) {
//     case 'C':
//       $('#visor').val('');
//       break;
//     case '=':
//       $('#visor').eval()
      

    
//     default:

//   }

//   $('#visor').val($('#visor').val() + buttonVal);
//   console.log(buttonVal)
//   })
  
  
// });

//     $().forEach((value) => {
//     let numbervalue = document.
//     $(`#button${numbervalue}`).on("click",function(){
//         $("#visor").append(value);
//     });
//   })
// 

// $(function() {
//     let result = '';
//     let operacion = '';

    
//     $('.btn').click(function() {
//       let buttonVal = $(this).val();
//       console.log('soy buttonVal', buttonVal);
//       console.log(typeof(buttonVal))
//       console.log(eval('2 * 2')) 
      
//       if ($.isNumeric(buttonVal)) {
//         result += buttonVal;
//         $('#visor').val(result);
//       } else {
//         switch(buttonVal) {
//           case '+':
//             operacion = '+';
//             break;
//           case '-':
//             operacion = '-';
//             break;
//           case '*':
//             operacion = '*';
//             break;
//           case '/':
//             operacion = '/';
//             break;
//           case '=':
//             result = eval(result);
//             $('#visor').val(result);
//             break;
//           case 'C':
//             result = '';
//             $('#visor').val(result);
//             break;
//           // default:
//           //   return result;
//         }
//       }
//     });
//   });

$(function() {
  let result = 0;
  let operacion = '';
  let currentNumber = 0;

  $('.btn').click(function() {
    let buttonVal = $(this).val();
    console.log('soy buttonVal', buttonVal);
    console.log(typeof(buttonVal))
    console.log(eval('2 * 2')) 

    if ($.isNumeric(buttonVal)) {
      currentNumber = parseInt(buttonVal);
      $('#visor').val(currentNumber);
    } else {
      switch(buttonVal) {
        case '+':
          result += currentNumber;
          operacion = '+';
          break;
        case '-':
          result -= currentNumber;
          operacion = '-';
          break;
        case '*':
          result *= currentNumber;
          operacion = '*';
          break;
        case '/':
          result /= currentNumber;
          operacion = '/';
          break;
        case '=':
          switch (operacion) {
            case '+':
              result += currentNumber;
              break;
            case '-':
              result -= currentNumber;
              break;
            case '*':
              result *= currentNumber;
              break;
            case '/':
              result /= currentNumber;
              break;
          }
          $('#visor').val(result);
          break;
        case 'C':
          result = 0;
          currentNumber = 0;
          $('#visor').val('');
          break;
      }
    }
  });
});
  