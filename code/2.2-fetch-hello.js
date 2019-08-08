///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
    provider: 'https://iotanode.us:443'

})   //  provider: 'https://nodes.devnet.thetangle.org:443'

const address =
  'RJKYCCRHVRZCRZZ9AEAGCSRGUBNIHDTPBWVKQRALYHOUGTWSYWFFKMNVAWDASDLFEVDBNHRNQKLTQYZZACHJHONACW'   // temp1 recieve

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
   // console.log(response)
       global.myResponse22 = '<h2>2.2-fetch-hello.js</h2>' + '<pre id="myPre01">'+JSON.stringify(response, null, 3)+'</pre>' + '<hr>';  // hopefully this is global

  })
  .catch(err => {
    console.error(err)
  })
