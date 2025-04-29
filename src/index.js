module.exports = function toReadable(number) {
  if (number < 0 && number > 999)
  throw new Error('Number must be between of 1 and 999');
};
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

if (numbers < 20) {
  return ones
}
else if (numbers > 10) {
   return tens
}

else {}

