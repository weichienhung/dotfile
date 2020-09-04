/*
 Requires:
 
 "devDependencies": {
    "eslint": "^6.8.0",
    "eslint-plugin-import": "^2.19.1",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-react": "^7.17.0",
    "eslint-plugin-react-hooks": "^1.7.0",
    "@typescript-eslint/eslint-plugin": "^4.0.1",
    "@typescript-eslint/parser": "^4.0.1"
  }
*/


module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
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
    "settings": {
        "react": {
            "version": "detect" // React version. "detect" automatically picks the version you have installed.
        }    
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "rules": {
        "camelcase": 0,
        "arrow-parens": [2, "as-needed"],
        "no-param-reassign": [2, { props: false }],
        "import/prefer-default-export": 0,
        "react/prop-types": 0,
        "react/no-array-index-key": 0,
        "react/destructuring-assignment": 0,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "jsx-a11y/anchor-is-valid": 0
    }
};
