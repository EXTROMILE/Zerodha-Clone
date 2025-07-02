const mongoose = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = mongoose.model("PositionsModel", PositionsSchema);

module.exports = { PositionsModel };
