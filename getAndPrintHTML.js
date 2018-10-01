var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

var dataString = "";
//callback responses
https.get(requestOptions, function (response) {
//encoding of recieving data
  response.setEncoding('utf8');
//when data received
  response.on('data', function(data){
    dataString += data;
  });
//all data received
  response.on('end', function() {
    console.log(dataString);
  });

})
}

getAndPrintHTML()