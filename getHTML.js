var https = require('https');

function getHTML (options, callback) {

  var dataString = "";
  //callback responses
  https.get(options, function (response) {
  //encoding of recieving data
    response.setEncoding('utf8');
  //when data received
    response.on('data', function(data){
      dataString += data;
    });
//all data received
    response.on('end', function() {
      callback(dataString);
    });
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);