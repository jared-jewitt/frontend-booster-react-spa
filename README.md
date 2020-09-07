# Client Booster - React

This codebase is a boilerplate for a React client. It is intended to be used as a
[Booster](https://github.com/jared-jewitt/booster-guidelines) for my [Launchpad](https://github.com/jared-jewitt/launchpad).
However, that being said, it can still be used completely on its own - CI/CD and infrastructure come pre-configured.

#### Requirements:

- [Docker](https://www.docker.com/) (Optional)
- [Node](https://nodejs.org/en/) (Optional if Docker is used)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) (Windows users only)

#### Features:

- [TypeScript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Stylelint](https://stylelint.io/)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/)

#### Developers:

- [Jared Jewitt](https://jared-jewitt.github.io/)

## Getting Started

Run the client via either option below, then visit it at `http://localhost:3000`

**_Docker:_**

```
make run
```

**_NPM:_**

```
npm install
npm start
```

## Commands

**_Docker:_**

| Command        | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| make run       | Launches the client                                                 |
| make close     | Closes the client                                                   |
| make purge     | Purges the client containers, images, networks, volumes             |
| make workspace | Shells into the client to run one-off commands. e.g. `npm run test` |

**_NPM:_**

| Command                     | Description                                                       |
| --------------------------- | ----------------------------------------------------------------- |
| npm run build               | Builds the client                                                 |
| npm run start               | Runs the client locally with hot reloading on port 3000           |
| npm run serve               | Runs the built client on port 4000                                |
| npm run test                | Runs all jest tests                                               |
| npm run test:update         | Updates jest snapshot files                                       |
| npm run test:coverage       | Runs all jest tests and displays a coverage report in the console |
| npm run lint                | Identifies `js, jsx, ts, tsx` linting warnings/errors             |
| npm run lint:fix            | Fixes `js, jsx, ts, tsx` linting errors                           |
| npm run stylelint           | Identifies `sass, scss` linting warnings/errors                   |
| npm run stylelint:fix       | Fixes `sass, scss` linting errors                                 |
| npm run analyze-bundle-size | Generates and serves bundle size stats on port 4200               |

## Deployment

[Instructions here](DEPLOYMENT.md).

## License

Code released under the [MIT License](LICENSE).
