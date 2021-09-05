var http = require("http");
var EquipData = require("../schema/equipment.js");
var events = require("events");

//Setting up eventEmmiter to monitor rowid
var logger = new events.EventEmitter();

function equipmentExists(id) {
  //function to check whether equipment is already there in the database.
  return EquipData.findOne({ AssetID: id }).then(function (result) {
    return result !== null;
  });
}

var rowid = 0; //set initial rowid to zero

//main callback function once a response is received
function OnResponse(response) {
  var data = ""; //This will store the page we're downloading.
  response.on("data", function (chunk) {
    //Executed whenever a chunk is received.
    data += chunk; //Append each chunk to the data variable.
  });

  response.on("end", function () {
    var body = JSON.parse(data);
    //Check if there was an error in receiving data or is the total data loaded
    if (body && !!body.length) {
      body.forEach((equipment) => {
        rowid = equipment.__rowid__;
        equipmentExists(equipment.AssetID).then(function (exists) {
          if (exists) {
            //If equipment is already in the database update the new Status
            EquipData.findOneAndUpdate(
              { AssetID: equipment.AssetID },
              {
                OperationalStatus: equipment.OperationalStatus,
              }
            );
          } else {
            //if the equipment is not in the database create a new Equipment log
            var newEquip = EquipData({
              AssetCategoryID: equipment.AssetCategoryID,
              AssetID: equipment.AssetID,
              OperationalStatus: equipment.OperationalStatus,
            });
            newEquip.save();
          }
        });
      });
      logger.emit("next", rowid);
    } else {
      logger.emit("next", 0);
    }
  });
}

logger.on("next", function (id) {
  //refresh the data of all equipment once all data is loaded.
  if (id === 0) {
    rowid = 0;
  }
  var nextUrl = {
    host: "ivivaanywhere.ivivacloud.com",
    path: `/api/Asset/Asset/All?apikey=SC:demo:64a9aa122143a5db&max=100&last=${id}`,
    port: "80",
    method: "GET",
  };
  http.request(nextUrl, OnResponse).end();
});

module.exports = logger;
