module.exports = {
    "env": {
        "node": true,
        "es6": true
    },

    "parserOptions": {
        "ecmaVersion": 2017
    },

    "extends": "eslint:recommended",

    "rules": {
        // basics
        "indent": [ "error", 2 ], // it forces 2 spaces indentation
        "linebreak-style": [ "error", "unix" ], // CRLF is evil
        "quotes": [ "error", "single" ], // quotes must be single
        "eqeqeq": [ "error", "smart" ], // fuck you, `==`

        // variables
        "no-unused-vars": [ "off" ], // unused vars are okay
        "no-undef": [ "warn" ], // draws yellow line below undefined vars

        // omittables
        "semi": [ "error", "always" ], // semicolon is required
        "curly": [ "error" ], // it kills `if (foo) bar++;`
        "arrow-parens": [ "error", "always" ], // it kills `arg => { func(); }`

        // force spacing (I prefer super sparse code!)
        "array-bracket-spacing": [ "error", "always" ], // it kills `[val1, val2]`
        "arrow-spacing": [ "error", { "before": true, "after": true } ], // it kills `( arg )=>{ func(); }`
        "block-spacing": [ "error", "always" ], // it kills `if ( cond ) {func();}`
        "comma-spacing": [ "error", { "before": false, "after": true } ], // it kills `func( arg1,arg2 )`
        "computed-property-spacing": [ "error", "always" ], // it kills `arr[i]`
        "key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ], // it kills `{ key:val }`
        "keyword-spacing": [ "error", { "before": true, "after": true } ], // it kills `}else{`
        "object-curly-spacing": [ "error", "always" ], // it kills `{key: val}`
        "semi-spacing": [ "error", { "before": false, "after": true } ], // it kills `func1();func2();`
        "space-before-blocks": [ "error", "always" ], // it kills `if (cond){`
        "space-in-parens": [ "error", "always" ], // it kills `func(arg)`
        "space-infix-ops": [ "error" ], // it kills val1+val2
        "space-unary-ops": [ "error", { "words": true, "nonwords": false, "overrides": { "++": true, "--": true } } ], // it kills `val++`
        "spaced-comment": [ "error", "always" ], // it kills `//this is comment`

        // ban spacing
        "no-trailing-spaces": [ "error" ], // no-trailing-spaces. yea.
        "no-whitespace-before-property": [ "error" ], // it kills `obj .key`

        // others
        "no-eval": [ "warn" ], // wow, are you really going to use `eval()`? are you mad lol
        "no-implied-eval": [ "warn" ], // ok don't
        "no-console": [ "off" ], // here is nodejs, console.log is innocent
    }
};