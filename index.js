module.exports = function(plugin, buildTypeOrCallback) {
  return function(options) {
    var doIt;
    if (typeof buildTypeOrCallback === 'function') {
      doIt = buildTypeOrCallback(options);
    } else {
      doIt = (options.buildType === buildTypeOrCallback);
    }
    if (doIt) {
      return plugin;
    } else {
      return {};
    }
  };
};
