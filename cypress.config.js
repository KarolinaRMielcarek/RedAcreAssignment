const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://airmalta.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    
  }
})