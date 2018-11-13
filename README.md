# Accordion
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.6.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<!-- Right now we're not using webpack dev server, if you want to use update package.json -->
## Before execute this command please uncomment first line and comment rest of code.
Run `npm run webpack-dev-server --inline --progress --port 8080` for creating a webpack - `./config/webpack.dev.js`. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Before execute this command please comment first line and uncomment rest of code.
Run `npm run webpack-dev-server` for creating a webpack - `webpack.config.js`.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

<!-- Right now we're not using webpack dev server, if you want to use update package.json -->
Run `npm run rimraf dist && webpack --config config/webpack.prod.js --progress --profile --bail` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. But this build created by webpack - `./config/webpack.prod.js`.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run karma start` to execute the unit tests via [Karma], but using webpack - `./config/karma.conf.js`.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README]

If you don't understand feel free to contact me.
Email - `amitesh.jy.786@gmail.com`
