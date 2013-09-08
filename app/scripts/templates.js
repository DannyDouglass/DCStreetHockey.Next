define(function(require) {

  return {
    header: require('tpl!../templates/header.html'),
    navigation: require('tpl!../templates/navigation.html'),
    schedule: require('tpl!../templates/schedule.html'),
    betaMessage: require('tpl!../templates/betaMessage.html'),
    features: require('tpl!../templates/features.html')
  };
});