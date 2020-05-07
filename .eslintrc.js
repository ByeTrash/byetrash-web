module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  // plugins: [
  //   '@typescript-eslint',
  // ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'react-app', // Uses recommended rules from react-scripts
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // eslint rules: https://eslint.org/docs/rules/
    // @typescript-eslint rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/explicit-function-return-type': 'off', // with this we won't need to specify functions return types. Typescript will infer it for us
    'no-console': 'warn', // Lets not leave console.logs all over
    curly: 'warn', // forces { and } after ifs, while, for, etc
    indent: ['warn', 2],
    'sort-imports': 'error',
    quotes: 'off', // forces single quotes
    '@typescript-eslint/quotes': ['warn', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'eol-last': 'warn', // adds an empty line at the end of the file
    '@typescript-eslint/member-ordering': 'warn', // forces a specific order for class members
    '@typescript-eslint/member-delimiter-style': ['warn'], // forces us to use semicollon when separating members of types
    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': 'warn', // forces no spaces before a comma and at least one after a comma
    'comma-dangle': ['warn', 'always-multiline'], // forces us to leave a comma after the last item of an array and object literal, function, etc, when they span multiple lines
    'comma-style': 'warn', // when we need to break lines around a comma, this will force us to leave a comma before the line break
    'no-multiple-empty-lines': ['warn', {
      max: 2,
      maxEOF: 1,
      maxBOF: 0,
    }], // allows us to have at most 2 consecutives empty lines 
    'no-trailing-spaces': 'warn', // no whitespaces after lines
  },
};
