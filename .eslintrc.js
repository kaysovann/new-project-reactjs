module.exports = {
    "globals": {
        "process": true
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6 ,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "no-console-log"
    ],
    "rules": {
        "no-consol":"off",
        "react/prefer-stateless-function":0,
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-filename-extension": [
            2,
            {
              "extensions": [
                ".js",
                ".jsx"
              ]
            }
          ],
    }
};