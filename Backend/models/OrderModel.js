const mongoose = require("mongoose");

const { OrderSchema } = require("../schemas/OrderSchema");

const OrderModel = mongoose.model("OrderModel", OrderSchema);

module.exports = { OrderModel };
