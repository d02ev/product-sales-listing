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
            console.error('Error: ' + err.message);
        }
    }

    static async getTopSalesRecords() {
        try {
            const top_records = await SalesModel.find().sort({ quantity: -1 }).limit(5);
            return top_records;
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
            console.error('Error: ' + err.message);
        }
    }

    static async getSalesRecordsOfToday() {
        try {
            let now = new Date();
            let then = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                0, 0, 0
            );

            const records_by_date = await SalesModel.find({
                createdAt: { $gte: then, $lte: now }
            });
            
            return records_by_date;
        }
        catch (err) {
            console.error('Error: ' + err.message);
        }
    }
}