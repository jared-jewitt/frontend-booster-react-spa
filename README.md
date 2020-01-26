# Portable React Boilerplate

This codebase is a JavaScript boilerplate for creating [React](https://reactjs.org/) applications. 

It contains the following development tooling:

- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://nodemon.io/)

#### Developers:

- [Jared Jewitt](https://jared-jewitt.github.io/)

## Getting Started

1. Rename the `.env.example` file to `.env` and add paste your desired env variables there. If you don't need env
 variables, just delete the file.

2. Start the app locally by running `npm install` (if you haven't already), then the command `npm run start` in the
 root project directory.
 
3. You should be see the app by visiting `http://localhost:3000`.

## Commands

| Command                     | Description                                                                      |
|-----------------------------|----------------------------------------------------------------------------------|
| npm run start               | Runs the application locally with hot reloading on port 3000                     |
| npm run build               | Builds the application                                                           |
| npm run serve               | Runs the built application on port 3000. Requires ***npm run build*** first      |
| npm run analyze-bundle-size | Generates and serves bundle size stats on port 4200                              |
| npm run test:bundle-size    | Displays a bundle size report in the console. Requires ***npm run build*** first |
| npm run test:jest           | Runs all jest tests                                                              |
| npm run test:jest:update    | Updates jest snapshot files                                                      |
| npm run test:jest:coverage  | Runs all jest tests and displays a coverage report in the console                |
| npm run lint                | Identifies linting warnings/errors                                               |
| npm run lint:fix            | Fixes linting errors                                                             |

## Deployment

The word "portable" from the repository name derives from the idea of [Infrastructure as Code](https://docs.microsoft.com/en-us/azure/devops/learn/what-is-infrastructure-as-code).
Thus, this application is intended to be used as a [Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Deployment 
logic will sit in a separate "parent" repository. 
