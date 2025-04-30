module.exports = function toReadable(number) {
  if (number < 0 || number > 999){
  throw new Error('Number must be between of 1 and 999');
}
const ones = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen',
    'nineteen'];
const tens = ['twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];
const hundreds = ['one hundred', 'two hundred', 'three hundred',
    'four hundred', 'five hundred', 'six hundred',
    'seven hundred', 'eight hundred', 'nine hundred'];

    if (number < 20) {
      word = ones[number];
  } else if (number < 100) {
     word = tens[Math.floor(number / 10)] + (number % 10 ? ' ' + ones[number % 10] : '');
  } else {
      let hundredPart = hundreds[Math.floor(number / 100) - 1];
      let remainder = number % 100;

      if (remainder === 0) {
        word =  hundredPart;
      } else {
        word =  hundredPart + ' ' + toReadable(remainder);
      }
  };
  console.log(toReadable(10));
