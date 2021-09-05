var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var EquipSchema = new Schema({
  AssetCategoryID: String,
  AssetID: String,
  OperationalStatus: String,
});

module.exports = EquipData = mongoose.model("EquipData", EquipSchema);
