define(['backbone', '../models/game'], function(Backbone, GamesModel){
  
  return Backbone.Collection.extend({
    model: GamesModel,
    url: 'http://dcsh-mobile.herokuapp.com/api/games'
  });
});