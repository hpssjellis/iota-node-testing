// destroy the online build by the next comment. remove to work

//var express = require('express');



var app = express();


var my1 = require('./code/1-hello-world.js');
var my2point1 = require('./code/2.1-send-hello.js');
var my2point2 = require('./code/2.2-fetch-hello.js');   // to much info

var my3point1 = require('./code/3.1-create-address.js');
var my3point2 = require('./code/3.2-check-balance.js');
var my4 = require('./code/4-send-tokens.js');



/*
var my5point1 = require('./code/5.1-send-data.js');
var my5point2 = require('./code/5.2-fetch-data.js');
var my6 = require('./code/6-zmq-listen.js');
*/


//var my7point1 = require('./code/7.1-mam-public-send.js');
//var my7point2 = require('./code/7.2-mam-public-fetch.js');
//var my7point3 = require('./code/7.3-mam-private-send.js');
//var my7point4 = require('./code/7.4-mam-private-fetch.js');
//var my7point5 = require('./code/7.5-mam-public-watch.js');


//var my8point1 = require('./code/8.1-detailed-transaction-creation.js');






app.get('/', function(req, res) {
   let myCombined = global.myResponse1 + '<br>' +
       global.myResponse21 + '<br>' +        // needs seed
       global.myResponse22 + '<br>' +      // assume address but prints too much information
       global.myResponse31 + '<br>' +        // needs seed
       global.myResponse32 + '<br>' +        // needs address to check, is that a seed??
       global.myResponse4 + '<br>'           // needs seed with tokens



   res.send(myCombined);

});





// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);

