var scheduleData = require('../db/games-schedules');

exports.get = function(req, res, next) {
  res.json(scheduleData);
};

exports.getBySeason = function(req, res, next) {
  res.send('seasonid passed');
};
