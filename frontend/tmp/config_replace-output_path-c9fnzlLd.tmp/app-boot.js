/* jshint ignore:start */

define('phember-frontend/config/environment', ['ember'], function(Ember) {
  var prefix = 'phember-frontend';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("phember-frontend/app")["default"].create({"name":"phember-frontend","version":"0.0.0+782e517e"});
}

/* jshint ignore:end */
