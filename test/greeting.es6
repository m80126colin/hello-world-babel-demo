import chai from 'chai';
import greeting from '../lib/greeting';

chai.should()

describe('Test greeting', () => {
  const test = [
    ['Anne', 'Hello Anne!'],
    ['Karinsu', 'Hello Karinsu!']
  ]
  test.forEach(([name, ans]) => it(`greeting(${name}) should be equal "${ans}"`, () => {
    greeting(name).should.be.equal(ans)
  }))
})