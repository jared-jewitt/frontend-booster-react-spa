# Portable React Boilerplate

This codebase is a JavaScript boilerplate for creating [React](https://reactjs.org/) applications. 

It contains the following development tooling:

- [ESLint](https://eslint.org/)
- [Babel](https://babeljs.io/)
- [Webpack](https://nodemon.io/)

#### Developers:

- [Jared Jewitt](https://github.com/jared-jewitt)

## Commands

| Command                     | Description                                                                      |
|-----------------------------|----------------------------------------------------------------------------------|
| npm run lint                | Identifies linting warnings/errors                                               |
| npm run lint:fix            | Fixes linting errors                                                             |

## Deployment

The word "portable" from the repository name derives from the idea of [Code as Infrastructure](https://docs.microsoft.com/en-us/azure/devops/learn/what-is-infrastructure-as-code).
Thus, this application is intended to be used as a [Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Deployment 
logic will sit in a separate "parent" repository. 