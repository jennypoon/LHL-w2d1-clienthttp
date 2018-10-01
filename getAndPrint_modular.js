var https = require('https');

function getAndPrintHTML (options) {


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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)