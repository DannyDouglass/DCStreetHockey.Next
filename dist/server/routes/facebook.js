var facebook = require('../social/facebook');

module.exports = function(app){

  app.get('/api/facebook', function(){
    facebook.get('FB_ACCESS_TOKEN', '/DCStreetHockey/feed', function(data){
      console.log(data);
    });
  });
};

