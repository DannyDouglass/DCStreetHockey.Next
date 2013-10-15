define(['backbone', 'marionette', 'controllers/controller'], function(Backbone, Marionette, AppController) {
  return Marionette.AppRouter.extend({
    routes: {
      '': 'home',
      'schedule/:day': 'schedule'
    },

    initialize: function() {
      this.controller = new AppController();
    },

    home: function(){
      this.controller.showSchedule();
    },

    schedule: function(day) {
      this.controller.showScheduleByDay(day);
    }
  });
});