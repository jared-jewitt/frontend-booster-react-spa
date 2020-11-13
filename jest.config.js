module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(ico|bmp|gif|png|jpg|jpeg|svg|woff|woff2|eot|ttf|otf)$": "jest-transform-stub",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    "\\@/(.*)$": "<rootDir>/src/$1",
  },
};
