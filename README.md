# Portable Frontend Boilerplate - React

This codebase is a boilerplate for creating React applications. It is intended to be used as a module for 
my [Launch pads](https://github.com/launch-pads). However, that being said, it can still be used completely on its own.

In order for a portable boilerplate to work with a Launch pad, it must abide by the following guidelines:
> <https://github.com/portable-boilerplates/guidelines>

This boilerplate contains the following development tooling:

- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://nodemon.io/)
- [Jest](https://jestjs.io/)

#### Requirements (If not using Docker):

- [Node](https://nodejs.org/en/)

#### Developers:

- [Jared Jewitt](https://jared-jewitt.github.io/)

## Getting Started

> Run the app via either option below, then visit your client at `http://localhost:3000`

##### With Docker
 
 ```
 docker-compose up
 ```

##### Without Docker

```
npm install
npm run start
```

## Commands

| Command                     | Description                                                        |
|-----------------------------|--------------------------------------------------------------------|
| npm run build               | Builds the application                                             |
| npm run start               | Runs the application locally with hot reloading on port 3000       |
| npm run serve               | Builds the application then runs the application on port 3001      |
| npm run test                | Runs all jest tests                                                |
| npm run test:update         | Updates jest snapshot files                                        |
| npm run test:coverage       | Runs all jest tests and displays a coverage report in the console  |
| npm run lint                | Identifies linting warnings/errors                                 |
| npm run lint:fix            | Fixes linting errors                                               |
| npm run analyze-bundle-size | Generates and serves bundle size stats on port 4200                |

> Note: To use these commands with Docker, run them like such: \
> `docker-compose exec -it client npm run ...` (make sure the container is running).

## License

Code released under the [Apache License, Version 2.0](LICENSE).
