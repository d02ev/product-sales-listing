const SalesService = require('../services/SalesService');
const Comparator = require('../helpers/compare.helpers');

module.exports = class Sales {
    static async APICreateSalesRecord(req, res, next) {
        // check if the product has already been stored
        const existing_prod_rec = await SalesService.getSalesRecordByProductName(req.body.name);

        if (existing_prod_rec) return res.status(400).send('Product Already Exists!');

        try {
            const creation_data = {
                name: req.body.name,
                quantity: req.body.quantity,
                amount: req.body.amount
            };

            const new_sales_record = await SalesService.createSalesRecord(creation_data);
            res.status(200).json(new_sales_record);
        }
        catch (err) {
            res.status(500).json({
                error: err
            });
        }
    }

    static async APIGetTopSellingProducts(req, res, next) {
        try {
            const all_prod_records = await SalesService.getAllSalesRecords();
            
            all_prod_records.sort(Comparator);

            res.status(200).json(all_prod_records.slice(-5));
        }
        catch (err) {
            res.status(500).json({
                error: err
            })
        }
    }
}