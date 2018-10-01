module.exports = function getHTML (options, callback) {
  var https = require('https');
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

