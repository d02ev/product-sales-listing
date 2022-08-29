const Route = require('express').Router();
const SalesController = require('../controllers/sales.controllers');

// add a sales record in the db
Route.post('/add', SalesController.APICreateSalesRecord);

module.exports = Route;
