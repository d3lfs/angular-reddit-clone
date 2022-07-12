# Angular Reddit

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Deploying Angular App in Vercel
Run the command below for the installation of vercel
```$ npm i -g vercel```

make sure that you are already registered and authenticated in vercel.com

Once your are already authenticated go to your terminal and change directory to ```dist``` after building the angular app by running ```$ ng build --configuration production --base-href /``` then ``` $ cd dist```,  and run ```$ vercel --prod```. Your app is now running in the internet. For more information go to [Vercel Documentation](https://vercel.com/docs)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
