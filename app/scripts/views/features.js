define(['backbone', 'marionette', '../templates'], function(Backbone, Marionette, Templates) {
  return Marionette.ItemView.extend ({
    template: Templates.features,
  });
});