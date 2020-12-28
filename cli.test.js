const main = require('./cli')

test('CLI main function prints out a hello world', () => {
  expect(main()).toBe('Hello World')
})