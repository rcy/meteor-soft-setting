meteor-soft-setting
===================

Replace code like:

```
var setting = Meteor.settings.fizzle.somesetting;
```

with

```
var setting = softSetting('fizzle.somesetting');
```

If `Meteor.settings.fizzle.somesetting` isn't defined, your server
will crash with the first version above.  The second one will
`console.warn` a message and `setting` will be `undefined`.  You can
do your own error checking at this point, or just keep rolling.
Sometimes this is how you want to do things.  If so, this package is
for you.

To add this package, run:

```
meteor add rcy:soft-setting
```

Works on both client and server.
