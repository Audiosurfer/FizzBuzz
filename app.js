$(document).ready(function() {
    var fizzBuzz = function() {
       var number = prompt("What number should we count to?"); 
       number = +number;
       while (isNaN(number)) {
            number = prompt("Please input a number");
        }
       while (number % 1 != 0) {
           number = prompt("Please choose a whole number");
       }
        for (i=1; i <= number; i++) {
           if (i % 3 === 0 && i % 5 === 0) {
                $('body').append("<p>FizzBuzz</p>");
                  }
            else if (i % 3 === 0) {
                  $('body').append("<p>Fizz</p>");
                    }
            else if (i % 5 === 0) {
                 $('body').append("<p>Buzz</p>");
                   }
            else {
                   $('body').append("<p>" + i + "</p>");
                   }   
        }
    }
    fizzBuzz();
});