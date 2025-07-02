const mongoose = require("mongoose");

const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = mongoose.model("HoldingsModel", HoldingsSchema);

module.exports = { HoldingsModel };
