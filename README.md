gwm-if
======

gulp-web-modules conditional wrapper plugin based on build type or custom behavior

Usage
-----
```
var uglify = require('gwm-uglify');
  ...
  plugins: [
    base: [
      ...
      gwmIf(uglify(), 'prod')
```
This will include the 'uglify' plugin if the build type is 'prod'