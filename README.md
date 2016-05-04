# Change Case

[![Bower version](https://badge.fury.io/bo/change-case.svg)](http://badge.fury.io/bo/change-case)

Convert strings between `camelCase`, `PascalCase`, `Title Case`, `snake_case`, `param-case`, `lowercase`, `UPPERCASE`, `CONSTANT_CASE` and more.

# Attention

This is a fork of [blakeembrey/change-case](https://github.com/blakeembrey/change-case) created specifically to add support for bower, angular and just dropping script on the page.
If you are interested in NPM package and want to use it either in Node.js environment or with Browserify - please visit original package's page.
If you are looking for documentation or want to submit an issue which is not specific to in-browser usage please proceed to aforementioned page as well.

# Usage

## Installation
```
bower install change-case --save
```

Or just include ```./dist/change-case.js``` script on your page.

## Angular
If you use ```angular``` than you than have to include module 'change-case' in your module's dependencies:
```js
angular.module('yourApp', ['change-case'])
```
Now you can use changeCase service like that:
```js
angular.module('yourApp').controller('yourController',
  function($scope, changeCase)
    <...>
    $scope.paramCaseString = changeCase.paramCase('TestString');
    //$scope.paramCaseString will equal 'test-string'
  })
```

## Not angular
Global variable ```changeCase``` will be available for your use.

```js
var paramCaseString = changeCase.paramCase('TestString');
//paramCaseString will equal 'test-string'
```
