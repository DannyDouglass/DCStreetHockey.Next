define(['backbone', 'marionette', '../templates'], function(Backbone, Marionette, Templates) {
  return Marionette.ItemView.extend ({
    template: Templates.navigation,

    templateHelpers: {
      showBrand: function() {
        return 'DC Street Hockey Mobile';
      }
    }
  });
});