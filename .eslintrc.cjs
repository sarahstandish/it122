module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": "off",
        "prefer-arrow-callback": "warn",
        "no-var": "warn",
        "no-undef": "off"
    }
};
