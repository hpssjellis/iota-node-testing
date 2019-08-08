


var express = require('express');
var app = express();

// Routes




app.get('/', function(req, res) {
  
  const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

iota
  .getNodeInfo()
  .then(response => {
  
    console.log(response)
   // res.send(JSON.stringify(response, null, 3));      
    res.send('<pre id="myPre01">'+JSON.stringify(response, null, 3)+'</pre>');                           
   })
  .catch(err => {
    console.error(err)
  })

  
  
  
  

});





// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
