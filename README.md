#Description
The version Prestashop 1.6 introduce the Sass Compass technology to the project. You can use all of the awesome SASS features like variables, nested rules, mixins, inline imports and more to make your life much easier.

![gulp sass build process](https://raw.githubusercontent.com/StarpTech/gulp-prestashop/master/prestashop-sass.gif)
## Getting Started

Install dependencies:

+ Install Ruby (For windows http://rubyinstaller.org/)
+ ```gem install sass```  
+ ```gem install compass```  
+ ```npm install```

Install gulp globally to run the tasks instantly in the console ```npm install -g gulp```

## Usage

### 1. Specifiy your project paths in the gulpfile.js
+ ```var psProjectDir; // Your root prestashop dir (e.g prestashop)```
+ ```var themeName; // Your active theme (e.g default-bootstrap)```

### Tasks

#### Run the default task and watch all files
```bash
$ gulp
```

#### Run just linting
```bash
$ gulp lint
```

#### Run just sass
```bash
$ gulp sass
```

## Copyright

Copyright 2014 [Dustin Deus](http://blog.starptech.de/). See [MIT-LICENCE](https://github.com/StarpTech/gulp-prestashop/blob/master/LICENSE) for details.
