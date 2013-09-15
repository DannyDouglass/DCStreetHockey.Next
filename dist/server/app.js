/**
 * Load Dependencies
 */
var express = require('express');
var autoload = require('express-load');
var path = require('path');
var app = express();
process.chdir('server');

// autoload config files
autoload('config').into(app);

for (var config in app.config[app.get('env')]) {
  app.set(config, app.config[app.get('env')][config]);
}

// global config settings
app.configure( function () {
  //defines the view dir and options
  app.set('views', '../client');
  app.set('view engine', 'html');

  //set a custom html view template
  //app.engine('.html', require('ejs').renderFile);

  //server config
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.resolve(__dirname, '..', 'app')));
  //app.use(function(req, res) {
    //res.status(404).render('404', { title: '404' });
  //});
});

// configure the event handler
app.configure('development', function() {
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

// autoload models, controllers and routes
autoload('models').then('controllers').then('routes').into(app);

// start server
app.listen(process.env.PORT || app.get('port'));
console.log('Express running in %s mode on port %s', app.get('env'), app.get('port'));

