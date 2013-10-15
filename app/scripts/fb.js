/*define(['facebook'], function(){
 
  FB.init({
    appId      : 'APP_ID',
    channelUrl : '//localhost:9000/channel.html',
    cookie     : true
  });

  FB.getLoginStatus( function(response) {

    if(response.authResponse) {
      
      FB.api('/159780240709623/feed', function(response) {
        console.log('Pages Feed: ');
        console.log(response);
      });
    }
  }, { scope: 'manage_pages' });
});
*/