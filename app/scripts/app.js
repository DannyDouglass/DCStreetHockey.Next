define(['jquery', 'backbone', 'marionette', 'underscore', 'router', 'controllers/controller'],
  function ($, Backbone, Marionette, _, AppRouter, AppController) {
    var App = new Backbone.Marionette.Application();

    function isMobile() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        return ((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(userAgent));
    }

    App.addRegions({
        headerRegion: '#header',
        navigationRegion: '#navigation',
        mainRegion: '#container'
    });

    App.appRouter = new AppRouter();
    
    App.on("initialize:after", function(options){
      if (Backbone.history)
        Backbone.history.start();
    });

    App.isMobile = isMobile();

    return App;
});