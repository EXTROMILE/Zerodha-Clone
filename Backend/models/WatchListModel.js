const mongoose = require("mongoose");

const { WatchListSchema } = require("../schemas/WatchListSchema");

const WatchListModel = mongoose.model("WatchListModel", WatchListSchema);

module.exports = { WatchListModel };
