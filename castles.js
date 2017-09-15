// Because this is a simple program, using mocha might be overkill - using some test data here instead to drive my development.
// Comment or uncomment the forEach at the end to run/disable the tests I created.

const colors = require('colors');
const testData = require('./testData.js');

function castleBuilder(array) {
  let castles = 0;

  // Error handling: If nothing in the array, return an error.

  if (array.length <= 0) {
    return 'Error: There is no data in the array';
  }

  for (let index = 0; index < array.length; index += 1) {
    const landHeight = array[index];
    const heightBefore = array[index - 1];
    const heightAfter = array[index + 1];

    // Error handling: If the data isn't a number, return an error message.

    if (typeof (landHeight) !== 'number') {
      return 'Error: There is some data in your array that is not a number.';
    }

    // For the first one, build a castle if there isn't another one with the same height after,
    // AND length is greater than 1.
    // If the next one is the same value, don't build the castle yet.

    if (index === 0 && heightAfter !== landHeight && array.length > 1) {
      castles += 1;
    }

    // For the last one, build a castle, regardless of length.
    // This will handle edge cases of array being only 1, or all the same integer.

    if (index === array.length - 1) {
      castles += 1;
    }

    // If the it's a peak, build a castle

    if (landHeight >= heightBefore && landHeight > heightAfter) {
      castles += 1;
    }

    // If it's a valley, build a castle

    if (landHeight <= heightBefore && landHeight < heightAfter) {
      castles += 1;
    }
  }
  return castles;
}

// Uncomment or Comment to run test based on test data.

testData.forEach((test, index) => {
  const result = castleBuilder(test.data);
  if (result === test.expected || (typeof (result) === 'string' && typeof (test.expected) === 'string')) {
    console.log(`${(`Test #${index}:`.yellow) + 'PASSED'.green} - Result: ${result} | Expected: ${test.expected}`);
  } else {
    console.log(`${(`Test #${index}:`.yellow) + 'FAILED'.red} - Result: ${result} | Expected: ${test.expected}`);
  }
});

