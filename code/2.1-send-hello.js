///////////////////////////////
// Send HELLOWORLD
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
    provider: 'https://iotanode.us:443'

})   //  provider: 'https://nodes.devnet.thetangle.org:443'

const address =
  'RJKYCCRHVRZCRZZ9AEAGCSRGUBNIHDTPBWVKQRALYHOUGTWSYWFFKMNVAWDASDLFEVDBNHRNQKLTQYZZACHJHONACW'
const seed =
  'DONOTSTOREYOURSEEDONAPUBLICGITHUBSITEASANYONECANSTEALALLYOURIOTAKEEPYOURSEEDSAFE9'

const converter = require('@iota/converter')

const message = "HELLOWORLDFROMJER"

const message_in_trytes = converter.asciiToTrytes(message)

const transfers = [
  {
    value: 0,
    address: address,
    message: message_in_trytes
  }
]

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9)))
  .then(bundle => {
   // console.log(bundle)
    global.myResponse21 = '<h2>2.1-send-hello.js</h2>' + '<pre id="myPre01">'+JSON.stringify(bundle, null, 3)+'</pre>' + '<hr>';  // hopefully this is global

  })
  .catch(err => {
    console.error(err)
  })
