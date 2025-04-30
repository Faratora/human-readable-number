module.exports = function toReadable(number) {
  if (number < 0 || number > 999) {
    throw new Error('Number must be between of 1 and 999');
  }

  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const tens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const hundreds = [
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];

  let numbers = '';

  if (number < 20) {
    numbers = ones[number];
  } else if (number < 100) {
    numbers =
      tens[Math.floor(number / 10) - 2] +
      (number % 10 ? ` ${ones[number % 10]}` : '');
  } else {
    const hundredPart = hundreds[Math.floor(number / 100) - 1];
    const remainder = number % 100;

    if (remainder === 0) {
      numbers = hundredPart;
    } else {
      numbers = `${hundredPart} ${toReadable(remainder)}`;
    }
  }

  return numbers;
};
console.log(toReadable(140));
