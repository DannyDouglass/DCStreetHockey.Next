define(function(require) {

  return {
    header: require('tpl!../templates/header.html'),
    navigation: require('tpl!../templates/navigation.html'),
    schedule: require('tpl!../templates/schedule.html'),
    game: require('tpl!../templates/game.html')
  };
});