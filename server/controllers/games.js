var dcshApiClient = require('../dcsh-api-client');

exports.getBySeason = function(req, res, next) {
  
  var filter = '';

  if(req.query.SeasonId)
    filter += 'SeasonId eq ' + req.query.SeasonId;

  if(req.query.GameDate) {
    filter === '' ? 
      filter = 'GameDate eq datetime\'' + req.query.GameDate + '\' &$orderby=GameTime' :
      filter += ' and GameDate eq datetime\'' + req.query.GameDate + '\' &$orderby=GameTime';
  }

  dcshApiClient.requestWrapper(
    'vw_dcsh_ActiveGames', 
    filter,
    function(games){ 
      res.json(games);
    });
};
