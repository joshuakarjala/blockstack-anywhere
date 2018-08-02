const blockstack = require('blockstack')
const fakeLocalStorage = require('./utils/fakeLocalStorage')

module.exports = function loadBlockstack (blockstackData) {
  blockstackData = blockstackData || {
    'blockstack': process.env.BLOCKSTACK,
    'blockstack-gaia-hub-config': process.env.BLOCKSTACK_GAIA_HUB_CONFIG,
    'blockstack-transit-private-key': process.env.BLOCKSTACK_TRANSIT_PRIVATE_KEY
  }
  localStorage = fakeLocalStorage.createLocalStorage(blockstackData)
  window = {
    localStorage: localStorage,
    location: {
      origin: ''
    }
  }
  return blockstack
}
