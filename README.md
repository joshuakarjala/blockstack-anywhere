# blockstack-anywhere
Interact with Blockstack from a non browser environment - like *node* or *WebWorkers*

**!! This is a hack until Blockstack has an official soluion !!**

```javascript
// Should be initialized at the beginning of your app. Before any calls to blockstack are made

const loadBlockstack = require('blockstack-anywhere')
// this is the data form your browser local storage - with the same keys
loadBlockstack({
  "blockstack": " ... secret stuff ... ",
  "blockstack-gaia-hub-config": " ... secret stuff ... ",
  "blockstack-transit-private-key": " ... secret stuff ... "
})

const blockstack = require('blockstack')

blockstack.loadUserData()
blockstack.getFile('file.json').then(console.log)

```
