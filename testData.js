const testData = [
  {
    data: [],
    expected: 'err',
  },
  {
    data: [1],
    expected: 1,
  },
  {
    data: [-1],
    expected: 1,
  },
  {
    data: [0],
    expected: 1,
  },
  {
    data: ['a'],
    expected: 'err',
  },
  {
    data: [1, 2],
    expected: 2,
  },
  {
    data: [1, 1],
    expected: 1,
  },
  {
    data: [1, 2, 2],
    expected: 2,
  },
  {
    data: [2, 2, 2],
    expected: 1,
  },
  {
    data: [1, 2, 1],
    expected: 3,
  },
  {
    data: [1, 2, 1, 2],
    expected: 4,
  },
  {
    data: [1, 1, 1, 2, 2, 2, 1, 1, 1],
    expected: 3,
  },
  {
    data: [1, 2, 'a', 3],
    expected: 'err',
  },
  {
    data: [-1, -2, -3, -2, -1],
    expected: 3,
  },
  {
    data: [0, 1, 2, 1, 0, -1, 0, 1, 2, 3, 4, 5, 5, 5, 4, 3, 3, 4],
    expected: 6,
  },
];

module.exports = testData;
