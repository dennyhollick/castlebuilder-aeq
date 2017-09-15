// Rules:
// 1. We will build castles on peaks and valleys

// Assumptions:
// 1. The beginning and end of array are considered either peaks or valleys (provided non empty)
// 2. Integers can be both positive and negative
// 3. Only one caster per valley or peak
// 4. Only integers should be in the data - no strings etc.
// 5. If there are a group of integers that are the same, then the castle will be built on the last number in that series.
// 6. Empty arrays or arrays without the correct data will return an error

// Peak: A series of the same integer, or single integer where the integer before is lower, and the integer after lower.
// Valley: A series of the same integer, or single integer where the integer before and after is higher


// Because this is a simple program, using mocha might be overkill - using some test data here instead to drive my development and console log output.

const land1 = []; // Should return err
const land2 = [1]; // Should return 1
const land3 = [-1]; // Should return 1
const land4 = [0]; // Should return 1
const land5 = ['a']; // Should return err
const land6 = [1, 1]; // Should return 1
const land7 = [1, 2]; // Should return 2
const land8 = [1, 2, 2]; // Should return 2
const land9 = [2, 2, 2]; // Should return 1
const land10 = [1, 2, 1]; // Should return 3
const land11 = [1, 2, 1, 2]; // Should return 4
const land12 = [1, 1, 1, 2, 2, 2, 1, 1, 1]; // Should return 3
const land13 = [1, 2, 'a', 3]; // Should return err
const land14 = [-1, -2, -3, -2, -1]; // Should return 3
const land15 = [0, 1, 2, 1, 0, -1, 0, 1, 2, 3, 4, 5, 5, 5, 4, 3, 3, 4]; // Should return 6

function castleBuilder(array) {
  let castles = 0;

  // Error handling: If nothing in the array, return an error.

  if (array.length <= 0) {
    return console.log('Error: There is no data in the array');
  }

  for (let index = 0; index < array.length; index += 1) {
    const landHeight = array[index];
    const heightBefore = array[index - 1];
    const heightAfter = array[index + 1];

    // Error handling: If the data isn't an integer, return an error message.

    if (typeof (landHeight) !== 'number') {
      return console.log('Error: There is some data in your array that is not a number.');
    }

    // For the first one, build a castle if there isn't another one with the same height after, AND length is greater than 1.
    // If the next one is the same value don't build the castle yet.

    if (index === 0 && heightAfter !== landHeight && array.length > 1) {
      castles += 1;
    }

    // For the last one, build a castle, regardless of length.
    // This will handle edge cases of array being only 1, or all the same integer.

    if (index === array.length) {
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

    console.log(`${heightBefore}|${landHeight}|${heightAfter}|          Castle Count = ${castles}`);
  }
}

castleBuilder(land15);

