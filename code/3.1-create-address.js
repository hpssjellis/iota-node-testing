///////////////////////////////
// Create an address from a new seed
/////
// First: run this code in a unix based terminal to generate an 81 Tryte seed.
// 'cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1'
// Paste the output of the above code into the 'seed' section below.
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
    provider: 'https://iotanode.us:443'

})   //  provider: 'https://nodes.devnet.thetangle.org:443'

const seed =
  'DONOTSTOREYOURSEEDONAPUBLICGITHUBSITEASANYONECANSTEALALLYOURIOTAKEEPYOURSEEDSAFE9'  

iota
  .getNewAddress(seed, { index: 0, total: 1 })
  .then(address => {
    console.log('Your address is: ' + address)
    console.log('Paste this address into https://faucet.devnet.iota.org')

   global.myResponse31 = '<h2>3.1-create-address.js</h2> Your address is: ' + '<pre id="myPre01">'+JSON.stringify(address, null, 3)+'</pre>Paste this address into https://faucet.devnet.iota.org' + '<hr>';  // hopefully this is global


  })
  .catch(err => {
    console.log(err)
  })
