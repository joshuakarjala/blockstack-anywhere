# blockstack-anywhere
interact with blockstack storage - given credentials

```javascript
const loadBlockstack = require('./')

// this is the data form your browser local storage - with the same keys
const blockstack = loadBlockstack({
  "blockstack": " ... secret stuff ... ",
  "blockstack-gaia-hub-config": " ... secret stuff ... ",
  "blockstack-transit-private-key": " ... secret stuff ... "
})

blockstack.loadUserData()

blockstack.getFile('file.json').then(console.log)
```
