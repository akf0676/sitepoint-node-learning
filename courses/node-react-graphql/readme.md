# Build a GraphQL server

## Talk to MongoDB, SQL and REST with these simple steps

Example of building a production ready Graph QL server, based on the blog article gound here. <https://blog.apollographql.com/tutorial-building-a-graphql-server-cddaa023c035>.

Inital project setup
We will user [Babel](https://babeljs.io/) to compile ES6 to browser compatible code.

* npm install --save express body-parser mongoose graphql graphql-tools
  * express = https://expressjs.com/ - Fast, unopinionated, minimalist web framework for Node.js
  * body-parser = https://www.npmjs.com/package/body-parser - body parsing middleware
  * mongoose = https://www.npmjs.com/package/mongoose - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
  * graphql = http://graphql.org/ - A query language for your API
  * graphql-tools = https://www.apollographql.com/docs/graphql-tools/ || https://www.npmjs.com/package/graphql-tools ways to create a GraphQL schema
* npm install --save--dev babel-cli babel-preset-env babel-eslint eslint
  * babel-cli - https://babeljs.io/docs/en/babel-cli/ = Babel command line
  * babel-preset-env - = Babel command line
  * babel-eslint - https://www.npmjs.com/package/babel-preset-env = A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments.
  * eslint- = https://www.npmjs.com/package/eslint - a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
