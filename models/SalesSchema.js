const Mongoose = require('mongoose');

const sales_schema = new Mongoose.Schema(
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
);

module.exports = Mongoose.model('SalesModel', sales_schema);