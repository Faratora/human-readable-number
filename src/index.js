module.exports = function toReadable(number) {
  if (number < 0 && number > 999)
  throw new Error('Number must be between of 1 and 999');
};
const ones = [];
const tens = [];
const hundreds = [];

if (numbers < 10) {
  return ones
}
else if (numbers > 10) {
   return tens
}

