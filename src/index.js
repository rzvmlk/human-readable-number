module.exports = function toReadable (number) {
  
    
    num1 = {
    "": " ",
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    
  }, 

  num2 = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }, 

  num3 = {
    "" : " ",
    "": " ",
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  let num3_1 =  Math.floor(number/10);
  let num4 = Math.floor(number/100);
  let num4_1 = number/100
  let rest = number%100;
  let numStr = number.toString();

   
        if (number === 0){
            return 'zero';
        }  else if (number >=1 && number < 10){
            return (num1[number])
        } else if (number >= 10 && number < 20 ){
            return (Object.values(num2)[number-10])
        } else if (number >= 20 && number % 10 === 0 && number < 100){
            return (Object.values(num3)[number/10 - 2])
        } else if (number > 20 && number <= 99){
            return (Object.values(num3)[num3_1 - 2] + ' ' + num1[number%10])
        }  ;
        
        if (number > 99 && number % 100 === 0){
                return (num1[num4_1] + ' hundred')
            } else if (number > 100 && numStr[1] == 0 && numStr[2] <= 9 ){
                return (num1[num4] + ' hundred ' + Object.values(num1)[rest - 1])
            } else if (number > 100 && number.toString().slice(-2)>=10 && number.toString().slice(-2) < 20){
                return (num1[num4] + ' hundred ' + Object.values(num2)[rest-10] )
            } else if (number > 100 && numStr[1] >= 2 && numStr[2] == 0){
                return (num1[num4] +' hundred ' + Object.values(num3)[numStr[1]-2])
            }   else {
                return (num1[num4] + ' hundred ' + Object.values(num3)[numStr[1]-2] + ' ' + Object.values(num1)[numStr[2]-1] )
            }   
        
        
}

