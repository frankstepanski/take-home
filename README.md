# Unit2-Unit3-Web-TakeHome

## Running this project

The front end is set up with [Parcel Bundler](https://parceljs.org/), a library that compiles our assets and comes with an integrated development server with auto-reload. This server runs on port `1234` by default, but will use another if `1234` is being used by another application.

The "quotes" API runs on port `3333` which needs to be free, or this server won't be able to start.

1. Clone the repo.
1. Navigate into the project folder.
1. Run `npm install` to download the project's dependencies.
1. Run `npm run api` to start the "quotes" API locally on `http://localhost:3333/api/quotes`.
1. Open a new terminal window at the same directory and run `npm run react` to build the React project and serve it on `http://localhost:1234`.
1. Run `npm test` to run tests using Cypress (optional).

## Task A

### Task A Summary

Complete eight tasks so the React app is able to work like in [this video](https://youtu.be/IGB39rc4SZA).

### Task A Instructions

- Read `server.js` to understand how each endpoint works. The project has no database, so restarting the `api` script returns the quotes to their original state.

- There is a total of **eight tasks** (tasks 1 through 8) that need to be completed. They are found inside the `Container.js` and `Form.js` components. Each tasks includes a log statement with specific instructions. You can tackle the tasks in any order you wish. You do _not_ need to touch any code outside of the tasks.

## Task B (optional)

### Task B Summary

Use **Redux** to manage application state.

### Task B Instructions

- Add `redux` and `react-redux` to the project, and use them to centralize application state inside a Redux store.
- Connect the `Container.js` component so it receives state and action creators **through props**.
