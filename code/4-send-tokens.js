///////////////////////////////
// Send tokens
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://iotanode.us:443'
})

// Replace this with the seed you sent tokens too!
const seed =
  'DONOTSTOREYOURSEEDONAPUBLICGITHUBSITEASANYONECANSTEALALLYOURIOTAKEEPYOURSEEDSAFE9'

const converter = require('@iota/converter')

const message = "Sending 6i hope that works"

const message_in_trytes = converter.asciiToTrytes(message)


// Create a wrapping function so we can use async/await
const main = async () => {
  // Generate a different address from your seed
 // const receivingAddress = await iota.getNewAddress(seed, {
 //   index: 1,
 //   total: 1
 // })

  const receivingAddress = await iota.getNewAddress(seed);
  // Construct a TX to our new address
  const transfers = [
    {
      value: 6,
      address: receivingAddress,
      message : message_in_trytes,
      tag: 'MYMAGIC'
    }
  ]
  console.log('Sending 6i to ' + receivingAddress)

  try {
    // Construct bundle and convert to trytes
    const trytes = await iota.prepareTransfers(seed, transfers)
    // Send bundle to node.
    const response = await iota.sendTrytes(trytes, 4, 14)

    console.log('Completed TXs')
    response.map(tx => {
        console.log(tx);
          global.myResponse4 = '<h2>4-send-tokens.js</h2> Transaction Completed <br>' + '<pre id="myPre01">'+JSON.stringify(tx, null, 3)+'</pre>' + '<hr>';  // hopefully this is global
          console.log("4-send-tokens is finished!")
    })
  } catch (e) {
    console.log(e)
  }
}

main()

