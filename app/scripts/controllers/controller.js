define(['backbone', 'marionette', '../views/header', '../views/navigation', '../views/schedule', '../views/betaMessage', '../views/features'], 
  function(Backbone, Marionette, HeaderView, NavigationView, ScheduleView, BetaMessageView, FeaturesView) {
    return Marionette.Controller.extend ({

      initialize: function(options){
        this.stuff = options.stuff;
        this.headerView = new HeaderView();
        this.navigationView = new NavigationView();
        this.scheduleView = new ScheduleView();
        this.betaMessageView = new BetaMessageView();
        this.featuresView = new FeaturesView();
      },

      showIndex: function(){
        Dcsh.App.navigationRegion.show(this.navigationView);
        Dcsh.App.headerRegion.show(this.headerView);
        Dcsh.App.mainRegion.show(this.betaMessageView);
        this.toggleActiveLink('#homeLink');
      },

      showSchedule: function(){
        Dcsh.App.navigationRegion.show(this.navigationView);
        Dcsh.App.headerRegion.show(this.headerView);
        Dcsh.App.mainRegion.show(this.scheduleView);
        this.toggleActiveLink('#scheduleLink');
      },

      showFeatures: function() {
        Dcsh.App.navigationRegion.show(this.navigationView);
        Dcsh.App.headerRegion.show(this.headerView);
        Dcsh.App.mainRegion.show(this.featuresView);
        this.toggleActiveLink('#featuresLink');
      },

      toggleActiveLink: function(activeLink) {
        $('#navigationLinks li').removeClass('active');
        $(activeLink).addClass('active');
      }
    });
}); 