define([
  'backbone', 'marionette', '../../templates', './game'], 
  function(Backbone, Marionette, Templates, GameItemView) {
  
  return Marionette.CompositeView.extend ({
    template: Templates.schedule,
    itemView: GameItemView,
    itemViewContainer: 'tbody',
    
    events: {
      "click #show-wednesday": "showWednesday",
      "click #show-sunday": "showSunday",
    },

    showWednesday: function(e){
      $('#schedule-navigation button').removeClass('btn-success');
      $('#' + e.currentTarget.id).addClass('btn-success');
      Dcsh.App.appRouter.navigate('schedule/wednesday', {trigger: true});
    },

    showSunday: function(e){
      $('#schedule-navigation button').removeClass('btn-success');
      $('#' + e.currentTarget.id).addClass('btn-success');
      Dcsh.App.appRouter.navigate('schedule/sunday', {trigger: true});
    }
  });
});