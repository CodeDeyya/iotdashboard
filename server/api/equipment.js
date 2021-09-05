// routes/api/EquipDatas.js

const express = require("express");
const router = express.Router();

// Load EquipData model
const EquipData = require("../schema/equipment.js");

//Test EquiData api
router.get("/test", (req, res) => res.send("EquipData route testing!"));

router.get("/", (req, res) => {
  EquipData.find()
    .then((EquipDatas) => {
      var Operational = 0;
      var NonOperational = 0;
      var EquipmentList = {};

      //can use reduce method to count but it would have  O(nX) performance if count is calculated for each prop
      EquipDatas.forEach((equipment) => {
        if (equipment.OperationalStatus === "Operational") {
          Operational++;
        } else {
          NonOperational++;
        }
        var category = equipment.AssetCategoryID;
        //count the number of equipment in each cateogory
        EquipmentList[category] = (EquipmentList[category] || 0) + 1;
      });
      res.json({
        Operational: Operational,
        NonOperational: NonOperational,
        EquipmentList: EquipmentList,
      });
    })
    .catch((err) =>
      res
        .status(404)
        .json({ noEquipDatasfound: "No EquipDatas found", err: err })
    );
});

module.exports = router;
