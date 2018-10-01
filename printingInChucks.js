//require http module
var https = require('https');

function getAndPrintHTMLChunks () {

//defining host and path
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
//callback responses
https.get(requestOptions, function (response) {
//encoding of recieving data
  response.setEncoding('utf8');
//when data received
  response.on('data', function(data){
    console.log(data, '/n');
  });
//all data received
  response.on('end', function() {
    console.log('Response stream complete.');
  });

})
}

getAndPrintHTMLChunks()