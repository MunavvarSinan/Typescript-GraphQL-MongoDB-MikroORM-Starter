# Typescript-GraphQL-MongoDB-MikroORM Starter

A starter project for building GraphQL APIs with Node.js, Typescript, MongoDB, and MikroORM. It provides a basic folder structure and starter files to help you get started with your own GraphQL API quickly and easily.

## Features
 - Typescript for type safety
 - GraphQL for building APIs
 - MongoDB for data storage
 - MikroORM for ORM
 - GraphQL Playground for testing the API

## Getting Started

### Prerequisites
 - Node.js (v14 or later)
 - MongoDB

### Installation

 1. Initialize the project:``` npm install typescript-graphql-mongodb-starter```
 2. Install dependencies: ```npm install```

### Setting Up Environment Variables

 create a  .env file in the root folder and add : 
 ``` DATABASE_URL = 'your_mongodb_url' ```
 ``` PORT : --- ```
 
### Running the Application

 1. Start the server: npm start
 2. Open GraphQL Playground at http://localhost:4000/graphql

### Testing

 1. Run tests: npm test

### Folder Structure

- `src` folder contains the source code
  - `entities` folder contains MikroORM entities
  - `resolvers` folder contains GraphQL resolvers
  - `utils` folder contains utility functions
  - `index.ts` file contains the main application entry point
- tests folder contains the unit tests

### License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MunavvarSinan/Typescript-GraphQL-MongoDB-MikroORM-Starter/blob/master/License) file for details.
