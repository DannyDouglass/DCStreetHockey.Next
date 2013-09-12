module.exports = function (app) {
  app.get('/api/games', app.controllers.games.get);
  app.get('/api/games/:seasonid', app.controllers.games.getBySeason);
};