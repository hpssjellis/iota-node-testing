///////////////////////////////
// Environment Check
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://iotanode.us:443'
  
})

iota
  .getNodeInfo()
  .then(response => {

     // console.log(response)
      global.myResponse1 = '<h2>1-hello-world.js</h2>' + '<pre id="myPre01">'+JSON.stringify(response, null, 3)+'</pre>' + '<hr>';  // hopefully this is global
   })
  .catch(err => {
    console.error(err)
  })
