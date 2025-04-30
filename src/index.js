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

  let numbers = '';

  if (number < 20) {
    numbers = ones[number];
  } else if (number < 100) {
    numbers =
      tens[Math.floor(number / 10) - 2] +
      (number % 10 ? ` ${ones[number % 10]}` : '');
  } else if (number < 1000) {
    const remainder = number % 100;
    numbers = `${ones[Math.floor(number / 100)]} hundred`;
    if (remainder > 0) {
      numbers += ` ${toReadable(remainder)}`;
    }
  }
  return numbers;
};
console.log(toReadable(140));
