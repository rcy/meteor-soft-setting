softSetting = function (path) {
  var value = Meteor._get.apply(null, [Meteor].concat('settings', path.split('.')));
  if (typeof value === 'undefined')
    console.warn("Meteor.settings." + path + " missing");
  return value;
};
