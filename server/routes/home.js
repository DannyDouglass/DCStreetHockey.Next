module.exports = function (app) {
  app.get( '/api', app.controllers.home.index );
};
