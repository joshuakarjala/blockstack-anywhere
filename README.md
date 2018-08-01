# blockstack-anywhere
interact with blockstack storage - given credentials

```
const loadBlockstack = require('./')

const blockstack = loadBlockstack({
  "blockstack": " ... secret stuff ... ",
  "blockstack-gaia-hub-config": " ... secret stuff ... ",
  "blockstack-transit-private-key": " ... secret stuff ... "
})

blockstack.loadUserData()

blockstack.getFile('file.json').then(console.log)
```
