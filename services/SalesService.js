const SalesModel = require('../models/SalesSchema');

module.exports = class SalesService {
    static async createSalesRecord(creationData) {
        try {
            const new_sales_record = {
                name: creationData.name,
                quantity: creationData.quantity,
                amount: creationData.amount
            }

            const response = await new SalesModel(new_sales_record).save();
            return response;
        }
        catch (err) {
            console.error(err);
        }
    }

    static async getSalesRecordByProductName(productName) {
        try {
            const record_by_prod_name = await SalesModel.findOne({ name: productName });
            return record_by_prod_name;
        }
        catch (err) {
            console.error(err);
        }
    }
}