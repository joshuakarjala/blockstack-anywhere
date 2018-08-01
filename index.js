const blockstack = require('blockstack');
const fakeLocalStorage = require('./utils/fakeLocalStorage');

module.exports = function loadBlockstack (blockstackData) {
  localStorage = fakeLocalStorage.createLocalStorage(blockstackData)
  window = {
    localStorage: localStorage,
    location: {
      origin: ''
    }
  };
  return blockstack;
}
