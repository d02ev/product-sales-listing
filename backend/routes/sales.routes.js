const Route = require('express').Router();
const SalesController = require('../controllers/sales.controllers');

// add a sales record in the db
Route.post('/add', SalesController.APICreateSalesRecord);
// top 5 selling products
Route.get('/top', SalesController.APIGetTopSellingProducts);
// today's total revenue generated
Route.get('/revenue', SalesController.APIGetTotalRevenueOfToday);

module.exports = Route;