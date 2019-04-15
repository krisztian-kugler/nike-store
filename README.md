# Nike Store

Live version [here](https://krisztian-kugler.github.io/nike-store)

## Notes

I created a small webshop for Nike shoes.

Since I was "free to use any design tool I like", I decided to code down my design idea instead of providing still images/mockups. The reason for this is because I wanted to showcase the UI in "motion", with animations and behaviour and to imitate what it would feel like to actually use the interface.

I created a simple, minimalistic UI, my goal was to help the user navigate easily, without having to "explain" what can be found where. I wanted to make it as intuitive as possible. It's also responsive so it should look okay on smartphones as well, all the way down to 320px screen-width.

The store is functional, meaning that you can select product variations, add them to the cart, change quantity in the cart, and remove items from the cart.

- The cart icon in the header the shows the number of items in the cart.
- A toast message is shown for a few seconds when the user adds an item to the cart. It can be closed at will. Opening the cart also eliminates the toast.
- If we add an item that is already in the cart, the quantity gets incremented by 1, otherwise a new item is created in the cart.
- Changing quantity in the cart recalculates the subtotal and total price.
- Sale price is shown for discounted items.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
