define(['backbone', '../models/game'], function(Backbone, GamesModel){
  
  return Backbone.Collection.extend({
    model: GamesModel,
    url: 'http://localhost:9001/api/games', //http://dcsh-mobile.herokuapp.com
    
    renderAll: function(){
      
    }

  });
});