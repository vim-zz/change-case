var changeCase = require('./change-case.js')
if (!process.browser && typeof module === 'object') {
  module.exports = changeCase
} else if (typeof window.angular === 'object') {
  window.angular.module('change-case', []).value('changeCase', changeCase)
} else {
  window.changeCase = changeCase
}
