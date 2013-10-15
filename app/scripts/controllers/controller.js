define([
  'backbone', 
  'marionette', 
  '../views/header', 
  '../views/navigation', 
  '../views/schedule/schedule', 
  '../collections/games',
  'moment'], 
  function(
    Backbone, 
    Marionette, 
    HeaderView, 
    NavigationView, 
    ScheduleView,
    GamesCollection,
    Moment) {

    return Marionette.Controller.extend ({

      initialize: function(){
        this.today = new Moment();
        this.headerView = new HeaderView();
        this.navigationView = new NavigationView();
        
      },

      showSchedule: function(){
        var games = new GamesCollection();
        var dateToShow = this.determineDefaultDayToShow();

        games.fetch({ data: { GameDate: dateToShow }});
        this.scheduleView = new ScheduleView({ collection: games });

        Dcsh.App.navigationRegion.show(this.navigationView);
        Dcsh.App.headerRegion.show(this.headerView);
        Dcsh.App.mainRegion.show(this.scheduleView);

        var day = new Moment(dateToShow).format('dddd').toLowerCase();
        $('#show-' + day).addClass('btn-success');
      },

      showScheduleByDay: function(day) {

        if(day === 'sunday' && this.today.weekday() === 3){
          this.today.add('days', 4);
        }
        else if(day === 'wednesday' && this.today.weekday() === 0) {
          this.today.subtract('days', 4);
        }
        else {
          this.determineDefaultDayToShow();
        }
        
        var games = new GamesCollection();

        games.fetch({ data: { GameDate: this.today.format('YYYY-MM-DD') }});
        this.scheduleView = new ScheduleView({ collection: games });
        Dcsh.App.mainRegion.show(this.scheduleView);
        
        var day = this.today.format('dddd').toLowerCase();
        $('#show-' + day).addClass('btn-success');
      },

      toggleActiveLink: function(activeLink) {
        $('#navigationLinks li').removeClass('active');
        $(activeLink).addClass('active');
      },

      determineDefaultDayToShow: function(){
        
        todayNumber = this.today.weekday();

        if(todayNumber === 3 || todayNumber === 7) {
          return this.today.format('YYYY-MM-DD');
        }  
        else if(todayNumber === 1 || todayNumber === 4){
          this.today.subtract('days', 1); // show previous days results
        } 
        else if( todayNumber <= 3){
          while( todayNumber < 3) {
            this.today.add('days', 1) // show next Wednesday schedule
            todayNumber++;
          }
        }
        else {
          while( todayNumber <= 7) {
            this.today.add('days', 1) // show next Wednesday schedule
            todayNumber++;
          }
        }

        return this.today.format('YYYY-MM-DD');
      }
    });
}); 