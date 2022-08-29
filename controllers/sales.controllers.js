const SalesService = require('../services/SalesService');

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
}