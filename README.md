# gulp-prestashop-boilerplate

## Getting Started

Install dependencies:

+ Install Ruby (For windows http://rubyinstaller.org/)
+ ```gem install sass```
+ ```gem install compass```
+ ```npm install```

## Usage

### 1. Specifiy your project paths in the gulpfile.js
```var psProjectDir; // Your root prestashop dir (e.g prestashop)```
```var themeName; // Your active theme (e.g default-bootstrap)```

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
```v