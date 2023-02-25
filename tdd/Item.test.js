const Item = require('../srp/item.js')

const item = new Item()

test('getDescription === ""', () => {
  expect(item.getDescription()).toBe('');
});

test('getAmount === 0', () => {
  expect(item.getAmount()).toBe(0);
});