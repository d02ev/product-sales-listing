const SalesService = require('../services/SalesService');

module.exports = class SalesController {
    static APICreateSalesRecord = async (req, res, next) => {
        try {
            const new_sales_data = {
                name: req.body.name,
                quantity: req.body.quantity,
                amount: req.body.amount
            };

            const new_sales = await SalesService.createSalesRecord(new_sales_data);
            res.status(200).json({
                'message': 'success',
                'product_name': new_sales.name
            });
        }
        catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    }

    static APIGetTop5SellingProducts = async (req, res, next) => {
        try {
            const top_5_products = await SalesService.getTopSalesRecords();
            res.status(200).json(top_5_products);
        }
        catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    }

    static APIGetRecentTotalRevenueGenerated = async (req, res, next) => {
        try {
            let revenue_generated = 0;
            const records_created_today = await SalesService.getSalesRecordsOfToday();

            records_created_today.forEach(record => {
                revenue_generated += (record.quantity * record.price);
            });

            res.status(200).json({
                'revenue_generated_today': Number(revenue_generated)
            });
        }
        catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    }
}