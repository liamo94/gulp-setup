# Gulp project

This is a project to hold some local gulp set up with some useful plugins.

## Plugins
### Dev
- **watch** - Checks to see if any changes have been made to specified files in specified paths
- **sass** - transpiles the sass into css
- **browser-sync** - Creates a local server on port 8080

### Build
- **clean** - Deletes the dist folder and all contents to make a clean fresh build
- **browserify** - compile node.js modules for use in browser. Also requires **babel** to convert back to es5.
- **uglify** - minifies all the js files (and combines the files should you choose)

### Others
- **copy** - copies folders and files to other location
- **replace** - Replaces strings using string literals or regular expressions

The gulp file is split up so all components can be under the *gulp* folder. This is because of the plugin **load-gup-config**, with all grunt tasks registered in the gulpfile.js

### Once started:
    npm install

### Grunt tasks
| Command                   | Info
|:-------------------------|:---------------------------------------------------------------|
| **`gulp dev`**            | creates a local server on port 8080, and watches files          |
| **`gulp build`**           | creates dist folder with all production ready files             |
| **`gulp PLUGIN_NAME`**     | run just one plugin                                             |