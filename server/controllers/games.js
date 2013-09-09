var scheduleData = require('../db/games-schedules');

exports.index = function(req, res, next) {
  res.json(scheduleData);
};