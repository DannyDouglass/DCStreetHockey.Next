module.exports = function (app) {
  app.get('/api/games', app.controllers.games.getBySeason);
};