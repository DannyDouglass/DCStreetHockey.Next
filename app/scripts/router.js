define(['backbone', 'marionette', 'controllers/controller'], function(Backbone, Marionette, AppController) {
  return Marionette.AppRouter.extend({
    routes: {
      '': 'schedule'
    },

    initialize: function() {
      this.controller = new AppController();
    },

    schedule: function() {
      //this.controller.showSchedule();
    }
  });
});