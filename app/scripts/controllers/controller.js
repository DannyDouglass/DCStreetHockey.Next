define(['backbone', 'marionette', '../views/header', '../views/navigation', '../views/schedule'], 
  function(Backbone, Marionette, HeaderView, NavigationView, ScheduleView, BetaMessageView, FeaturesView) {
    return Marionette.Controller.extend ({

      initialize: function(options){
        this.stuff = options.stuff;
        this.headerView = new HeaderView();
        this.navigationView = new NavigationView();
        this.scheduleView = new ScheduleView();
      },

      showSchedule: function(){
        Dcsh.App.navigationRegion.show(this.navigationView);
        Dcsh.App.headerRegion.show(this.headerView);
        Dcsh.App.mainRegion.show(this.scheduleView);
        this.toggleActiveLink('#scheduleLink');
      },

      toggleActiveLink: function(activeLink) {
        $('#navigationLinks li').removeClass('active');
        $(activeLink).addClass('active');
      }
    });
}); 