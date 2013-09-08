define(['backbone', 'marionette', 'controllers/controller'], function(Backbone, Marionette, AppController) {
  return Marionette.AppRouter.extend({
    routes: {
      '': 'index',
      'schedule': 'schedule',
      'features': 'features'
    },

    initialize: function() {
      this.controller = new AppController();
    },

    index: function() {
      this.controller.showIndex();
    },

    schedule: function() {
      this.controller.showSchedule();
    },

    features: function() {
      this.controller.showFeatures();
    }
  });
});