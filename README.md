![gulp prestashop power](https://raw.githubusercontent.com/StarpTech/gulp-prestashop/master/gulp-ps.png)

# Description

Gulp-prestashop makes the development of high quality themes much easier. Prestashop delivers all css files with it's SASS equivalent. You can develop your theme in a productive way (since Prestashop 1.6). The problem, however, nobody has used it before and the workflow isn't documented. I want to provide an easy way to build your SASS files instantly. You can watch for changes and gulp will automatically recompiles your files. Also linting of javascript files is supported. The project is at a very early stage but I hope you can see the benefits.

![gulp sass build process](https://raw.githubusercontent.com/StarpTech/gulp-prestashop/b9ed5e9f8d89cd5ac26378d170a95cb69199b8aa/prestashop-sass.gif)
## Getting Started

Install dependencies:

+ Install Ruby (For windows http://rubyinstaller.org/)
+ ```gem install sass```  
+ ```gem install compass```  
+ ```npm install```

Install [Gulp](https://github.com/gulpjs/gulp/) globally to run the tasks instantly in the console ```npm install -g gulp```

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
