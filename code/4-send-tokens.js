///////////////////////////////
// Send tokens
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
    provider: 'https://iotanode.us:443'

})   //  provider: 'https://nodes.devnet.thetangle.org:443'

// Replace this with the seed you sent tokens too!
const seed =
  'DONOTSTOREYOURSEEDONAPUBLICGITHUBSITEASANYONECANSTEALALLYOURIOTAKEEPYOURSEEDSAFE9'    

// Create a wrapping function so we can use async/await
const main = async () => {
  // Generate a different address from your seed
  const receivingAddress = await iota.getNewAddress(seed, {
    index: 2,
    total: 1
  })

  // Construct a TX to our new address
  const transfers = [
    {
      value: 0,
      address: receivingAddress[0],
      tag: 'MYMAGIC'
    }
  ]
  console.log('Sending 3i to ' + receivingAddress)

  try {
    // Construct bundle and convert to trytes
    const trytes = await iota.prepareTransfers(seed, transfers)
    // Send bundle to node.
    const response = await iota.sendTrytes(trytes, 3, 9)

    //console.log('Completed TXs')
    response.map(tx => {
      
       //console.log(tx)
       global.myResponse4 = '<h2>4-send-tokens.js</h2>' + '<pre id="myPre01">'+JSON.stringify(tx, null, 3)+'</pre>' + '<hr>';  // hopefully this is global

    })

      
  } catch (e) {
    console.log(e)
  }
}

main()
