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

// Create a wrapping function so we can use async/await
const main = async () => {
  const receivingAddress = await iota.getNewAddress(seed);
  // Construct a TX to our new address
  const transfers = [
    {
      value: 5,    // try 0 if you don't yet have confirmed tokens
      address: receivingAddress,
      tag: 'MYMAGIC'
    }
  ]
  console.log('Sending 5i to ' + receivingAddress)

  try {
    // Construct bundle and convert to trytes
    const trytes = await iota.prepareTransfers(seed, transfers)
    // Send bundle to node.
    const response = await iota.sendTrytes(trytes, 4, 14)    // 4, 14 needed for real IOTA  3, 9 for Devnet not real

    console.log('Completed TXs')
    response.map(tx => console.log(tx))
  } catch (e) {
    console.log(e)
  }
}

main()
