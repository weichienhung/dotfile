/*
 Requires:
 
 "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-plugin-import": "^2.19.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-react": "^7.17.0",
    "eslint-plugin-react-hooks": "^1.7.0"
  }
*/


module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "camelcase": 0,
        "arrow-parens": [2, "as-needed"],
        "no-param-reassign": [2, { props: false }],
        "import/prefer-default-export": 0,
        "react/prop-types": 0,
        "react/no-array-index-key": 0,
        "react/destructuring-assignment": 0,
        "jsx-a11y/anchor-is-valid": 0
    }
};
