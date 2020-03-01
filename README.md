# Portable React Boilerplate

This codebase is a JavaScript boilerplate for creating [React](https://reactjs.org/) applications. 

It contains the following development tooling:

- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://nodemon.io/)
- [Jest](https://jestjs.io/)

#### Requirements (If not using Docker):

- [Node](https://nodejs.org/en/)

#### Developers:

- [Jared Jewitt](https://jared-jewitt.github.io/)

## Getting Started

1. Rename the `.env.example` file to `.env` and paste your desired env variables there. If you don't need env 
variables, just delete the file.

2. Run the app via either of the options below. After that, visit your app at `http://localhost:3000`.

##### Without Docker
```
$ npm install
$ npm run start
```
 
##### With Docker
```
$ docker build -f Dockerfile.development -t portable-react .
$ docker run -d -p 3000:3000 portable-react
```

## Commands

| Command                     | Description                                                                  |
|-----------------------------|------------------------------------------------------------------------------|
| npm run start               | Runs the application locally with hot reloading on port 3000                 |
| npm run build               | Builds the application                                                       |
| npm run serve               | Runs the built application on port 3000. Requires ***npm run build*** first  |
| npm run test                | Runs all jest tests                                                          |
| npm run test:update         | Updates jest snapshot files                                                  |
| npm run test:coverage       | Runs all jest tests and displays a coverage report in the console            |
| npm run lint                | Identifies linting warnings/errors                                           |
| npm run lint:fix            | Fixes linting errors                                                         |
| npm run analyze-bundle-size | Generates and serves bundle size stats on port 4200                          |

## Deployment

The word "portable" from the repository name derives from the idea of infrastructure modularization.
Thus, this application is intended to be treated as a "child" repository. Deployment logic will sit in a separate
"parent" repository, which pulls in the child. That being said, to deploy your app, pick an appropriate launchpad from 
[my launchpads](https://github.com/launch-pads) and follow the deployment instructions there.

## License

Code released under the [Apache License, Version 2.0](LICENSE).
