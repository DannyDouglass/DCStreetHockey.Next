var request = require('request');

(function(){

  var requestWrapper = function(entity, filter, next) {

    if(!entity)
      throw Error('entity are required')

    if(!filter)
      throw Error('filter is required');

    var options = {
      method: 'GET',
      url: 'http://api.dcstreethockey.com/dcshapi.svc/' + entity + '?$format=json&$filter=' + filter.replace(/ /g, '%20')
    };

    request.get(options, function(err, res, body) {
      var bodyObject = JSON.parse(body);
      next(bodyObject.value);
    }).on('error', function(e) {
      throw Error('problem with request: ' + e.message);
    });
  };

  module.exports.requestWrapper = requestWrapper;
})();