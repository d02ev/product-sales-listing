const Route = require('express').Router();
const SalesController = require('../controllers/sales.controllers');

// add a sales record in the db
Route.post('/', SalesController.APICreateSalesRecord);

module.exports = Route;
