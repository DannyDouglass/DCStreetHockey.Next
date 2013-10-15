define([
  'backbone', 'marionette', '../../templates', 'moment'], 
  function(Backbone, Marionette, Templates, Moment) {
  
  return Marionette.ItemView.extend ({
    template: Templates.game,
    tagName: 'tr',

    templateHelpers: {
      displayFriendlyDate: function(){
        return new Moment(this.GameTime).format('MMM Do [@] h:mma');
      }
    }
  });
});