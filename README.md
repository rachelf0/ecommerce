# E-Commerce Site Back End

## Description
Back end half of an e-commerce website built with node.js, express, mysql2, and sequelize. It contains a MySQL database that is intereacted with by the express server utilizing sequelize to update the data tables.

## Demos
* [VS Code Walkthrough](https://drive.google.com/file/d/12LIgxmhXn4T3BxZX-zRINUZ4iL9UZ5Qd/view)
 
* [Insomnia Core Walkthrough](https://drive.google.com/file/d/1qHKzdIU0VcxjHzERE_ZLIIG_bV75UrSf/view)

* [Schema Usage Walkthrough](https://drive.google.com/file/d/1DWdDydTegOgkPCSq3rsYVIom6uvSwJfQ/view)

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Table of Contents
  - [Description](#description)
  - [Demos](#demos)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Installation
'npm init'
'npm install sequelize'
'npm install mysql2'
'npm install dotenv'

## Usage
Run the following command at the root of your project.
'mysql -u root -p'
Enter your password when prompted.
'source db/schema.sql'
'quit'
'npm run seed'
'npm start'

## Testing
No testing is set up at this moment. Tested externally through Insomnia Core.

## Contributing
Rachel Fritz

## Questions
 - Find me on GitHub: [rachelf0] (https://github.com/rachelf0) 
  - If you have any questions, please email me at: rachelfritz0@gmail.com
  - This README was generated with ❤️ by (https://github.com/rachelf0/ecommerce)
