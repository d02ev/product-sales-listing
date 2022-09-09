# Product Sales Listing

## Table of Contents

- [Project Info](#project-info)
  - [Introduction](#introduction)
  - [Models](#models)
  - [Backend Endpoints](#backend-endpoints)
- [Project Structure](#project-structure)
- [What I Learned](#what-i-learned)
- [env File Configuration](#env-file-configuration)
- [Project Running Instructions](#project-running-instructions)

### Project Info

  - #### Introduction

    This is a basic full stack web app to create a sales record, access top 5 selling products and access revenue generated in a day.

  - #### Models

    - *Sales Model*

      ```js
      {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
      },
      {
        collection: 'product_sales',
        timestamps: true
      }
      ```

  - #### Backend Endpoints

    - **Add a sales record**

      - Endpoint: ```/api/v1/sales/add```
      - Request type: ```POST```
      - Request body:
      ```js
      {
        name: <PROD_NAME>,
        quantity: <PROD_QTY>,
        amount: <PROD_AMT>
      }
      ```
      - Response:
      ```js
      {
        message: success,
        product_name: <PROD_NAME>
      }
      ```

    - **Get top 5 selling products**

      - Endpoint: ```/api/v1/sales/top```
      - Request type: ```GET```
      - Response:
      ```js
      [{
        _id: <PROD_ID>,
        name: <PROD_NAME>,
        quantity: <PROD_QTY>,
        amount: <PROD_AMT>,
        createdAt: <PROD_CREATED_AT>,
        updatedAt: <PROD_UPDATED_AT>
      }]
      ```

    - **Get today's revenue generated**

      - Endpoint: ```/api/v1/sales/revenue```
      - Request type: ```GET```
      - Response: ```calculated revenue of recent records```

- ### Project Structure

```bash
.
├── backend
│   ├── config
│   │   └── db.config.js
│   ├── controllers
│   │   └── sales.controllers.js
│   ├── models
│   │   └── SalesSchema.js
│   ├── package.json
│   ├── package-lock.json
│   ├── routes
│   │   └── sales.routes.js
│   ├── server.js
│   └── services
│       └── SalesService.js
├── frontend
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.css
│       ├── App.js
│       ├── App.test.js
│       ├── components
│       │   ├── AddSales.js
│       │   ├── Home.js
│       │   ├── NavBar.js
│       │   ├── SalesRevenue.js
│       │   └── TopSales.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       └── setupTests.js
├── LICENSE
└── README.md
```

- ### What I Learned

  - Sorting an JSON object array using a key.
  - Limiting the number of returned documents from the db.
  - Using the ```new Date()``` effectively.
  - Aggregations in mongodb.
  - Using aggregations to access specific records.
  - Working with ReactJS components and routers.
  - Using ```concurrently``` to startup both the frontend and backend servers together.

- ### env File Configuration

  - ```NODE_ENV```: name of the node environment (development/production).
  - ```PORT```: backend server port.
  - ```DB_URI```: mongodb connection string.

- ### Project Running Instructions

  1. Clone or download the project.

  2. Open the terminal in the root directory, then use the command ```cd backend``` to move into the ```backend``` directory.

  3. Within the ```backend``` directory run the command ```npm start``` which will fireup both the node and react servers together, as the project is already configured with ```concurrently```.

  4. If the project configures itself correctly, you will see ```Your App is Listening at http://localhost:<PORT>``` and ```Connected to DB Successfully!``` printed in the terminal window.
