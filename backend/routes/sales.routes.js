const Router = require('express').Router();
const SalesController = require('../controllers/sales.controllers');

// add a sales record in the db
Router.route('/add').post(SalesController.APICreateSalesRecord);
// top 5 selling products
Router.route('/top').get(SalesController.APIGetTop5SellingProducts);
// today's total revenue generated
Router.route('/revenue').get(SalesController.APIGetRecentTotalRevenueGenerated);

module.exports = Router;