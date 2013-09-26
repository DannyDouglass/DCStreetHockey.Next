var https = require('https');

exports.get = function(accessToken, apiPath, callback){

  var options = {
    host: 'graph.facebook.com',
    port: 443,
    path: apiPath + '?access_token=' + access_token,
    method: 'GET'
  };

  var buffer = '';

  var request = https.get(options, function(result){
    result.setEncoding('utf8');
    
    result.on('data', function(chunk){
      buffer += chunk;
    });  

    result.on('end', function(){
      callback(buffer);
    });
  });

  request.on('error', function(err){
    console.log('ERROR from facebook.get(): ' + e.message);
  });

  request.end();
}