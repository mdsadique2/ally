### Heroku url




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the dependencies


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.



## Code details in `SRC` directory


### `Components`
Contains the reusable componets that can be used across the app. The components are loosely coupled entities and doesn't manage any state of their own. They just use the state of the app passed to demonstrate their behaviour
Each component directory has its own
    - index
    - style
    - mobile-style if mobile optimisation is needed



### `Pages`
Contains the pages that are loaded with different URL. A Page is logical combination of componets.
It has its own reducer to mange the state of the page.
Each Page directory has its own
    - index
    - style
    - mobile-style if mobile optimisation is needed
    - actionCreators
    - actionDispatchers
    - reducers
Kept it this way as it makes easy to navigate to the file and debug.



### `Router`
Routing logic of app. At present only search page is available, other path will lead to 404.


### `Store`
Global stora configuration of the file


### `Style`
Global styles applicable on entire app


### `Utilities`
Contains various files used commonly across the app
    - `ApiLayer` : Layer written by using axios to create an api layer with default configuration for the app. Api call uses this

    - `ApiUrls` : All the various api urls used in the app

    - `StringConst`: Static strings used across the app

    - `Utils`: Library of functions used across app


### `App.js`
    - Contains the App header and content area where different pages are rendered.


### `index.js`
    - Entry point for the app wrapped around the provider.
