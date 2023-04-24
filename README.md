# Boxhub Technical Assignment

## Prerequisites

- This application is built using [React](https://reactjs.org/), [Vite](https://vitejs.dev/) and [Typescript](https://www.typescriptlang.org/).
- To open the application run the following:

```bash
yarn
yarn dev
```

- To run the tests of application run the following:

```bash
yarn test # Opens Vitest ui in watch mode
yarn test:coverage # Generates a coverage report
```

## The Main Objectives

**1.** List all orders by order of creation date, showing the photo in an easy-to-understand way

**2.** Those orders with status “pending” should be highlighted so the user can see them effortlessly and focus attention

**3.** Allow the user to filter by the attributes: Status, Size, Condition and Type

**4.** For every order in the list, provide a call to action that will open a popup, showing a map drawing the origin and the destination with markers.

## API Mocking

- The application uses [MSW](https://mswjs.io/) to mock api calls.
- The api mocking is handled in `src/api-mocks`.

## Storybook

- The application uses [Storybook](https://storybook.js.org/) to document components, these can be viewed by running

```bash
yarn storybook
```

## Comments

- If for some reason the map does not render, try adding a new API Key in the env file. (Limit might be hit)

- Components in the `components` folder are components that I have build for personal projects. Only used components that i needed and adjusted them for this application

- Images url's did not work, returned 404 so i replaced them with a fallback
