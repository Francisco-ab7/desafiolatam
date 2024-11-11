const Calculator = (function() {
    // Variable privada
    let result = 0;
    return {
      add: function(x) {
        result += x;
      },
      subtract: function(x) {
        result -= x;
      },
      getResult: function() {
        return result;
      }
    };
   })();
   // Uso
   Calculator.add(5);
   Calculator.subtract(2);
   console.log(Calculator.getResult()); // Output: 3
  