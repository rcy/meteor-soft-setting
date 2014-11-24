meteor-soft-setting
===================

Replace calls like:

```
var setting = Meteor.settings.fizzle.somesetting;
```

with

```
var setting = softSetting('fizzle.somesetting');
```

If `Meteor.settings.public.fizzle.somesetting` isn't defined, your
server will crash with the first version above.  The second one will
emit a warning and keep on rolling with `setting` being `undefined`.
Sometimes this is what you want.  If so, this package is for you.