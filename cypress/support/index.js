// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
const CONFIG = {
    TESTS: {
      TEST1: {
        FULL_NAME: 'test user',
        EMAIL: 'test@blabla.com',
        CURRET_ADDRESS: 'C. Dobla, 5, 28054 Madrid, Spain',
        PERMANET_ADDRESS: 'Street X, 28013 Madrid, Spain',
      },      
      TEST2: {
        FULL_NAME: 'John Smith',
        EMAIL: 'john.smith@mailinator.com',
        CURRET_ADDRESS: 'Street Smith 3, London, UK',
        PERMANET_ADDRESS: 'Street Smith 6, London, UK',
      },      
      TEST3: {
        FULL_NAME: '',
        EMAIL: 'thisisnotanemail',
        CURRET_ADDRESS: '',
        PERMANET_ADDRESS: '',
      },
    },
  };
  export { CONFIG };