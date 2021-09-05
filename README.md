
<p align="center">
    <img width="auto" height="auto" src="https://i.ibb.co/LCjNvpw/logo.jpg" alt="logo" />
</p>

## **Equipment Dashboard**

The dashboard shows the following pieces of information:

1. Number of operational equipment
2. Number of non-operational equipment
3. A column chart where each bar represents an equipment type and the height of the bar
   represents how many equipment of that type are present.

<p align="center">
    <img width="1000" height="auto" src="https://i.ibb.co/k9LBsV6/screenshot.jpg" alt="screenshot" />
</p>

- [System requirements](#system-requirements)
- [Features](#features)
- [File Structure](#file-structure)
- [Installing](#installing)
- [API Structure](#api-structure)

## System requirements

- Unix-like OS / Windows;

- Database (MongoDB with no password protection running on 27017 port)

- Node

- Yarn Package Manager

## Features

- Fully responsive mobile view.
- Load data from no CORS enabled server.
- Mirror data to localhost to improve speed (Cache).
- Refresh data stream and continously update DB to monitor operational status of equipment.
- Scalable Node JS server.
- Automated data update on client (every 1 minute).
- Reusable stateless components.

## File Structure

```bash

├── public
├── server
│   ├── api
│   ├── config
│   ├── logger
│   ├── schema
│   └── server.js
└── src
    ├── axios
    ├── components
    ├── pages
    ├── styled-components
    └── App.js

```

- **public** contains all images and icons inculding html

- **server** contains all files for the server connected to the DB

- **src** contains all create-react app files for frontend

- **api** contains api routes for the REST API server

- **config** contains detaild of the MongoDB connection default URL is "mongodb://localhost:27017/test"
- **logger** contains event logic to update the database from the CORS less server
- **schema** contains mongoose schema used to retreive and send data from MongoDB
- **axios** contains axios configuration to call API to the frontend
- **components** contains reusable stateless components
- **pages** stateful components representing pages in the application
- **styled-components** components amped up by styled-components library to produce awsome UI/UX

## Installing

- Go to the server directory `./server`:

```bash
cd .\iotdashboard\server\
```

- Install all dependencies for server with yarn

```bash
yarn install
```

- Start server with yarn (Ensure Port 8085 is free)

```bash
yarn start-server
```

- If Server properly initiated you will get the following log

```bash
$ node server.js
Server running on port 8085
MongoDB is Connected...
```

- Open a new terminal or powershell and go to client directory and install dependecies

```bash
cd .\iotdashboard\
yarn install
```

- Start client (frontEnd).

```bash
yarn start
```

- The webpage will load in http://localhost:3000/

## API Structure

## **LOAD EQUIPMENT DATA**

Get data from the cors disabled server. API used by backend to log data to the DB

- **URL**

  http://ivivaanywhere.ivivacloud.com/api/Asset/Asset/All

- **Method:**

  `GET`

- **Query Params**

  **Required:**

  `apikey = "SC:demo:64a9aa122143a5db"`

  **Query:**

  `max = {number}`

  `last = {number}`

- **Example Success Response:**

  - **Code:** 200 <br />
    **Content:**

  ```javascript
  [
    {
      AssetID: "12341234",
      AssetCategoryKey: "50",
      Description: "Test AC Asset",
      OperationalStatus: "Operational",
      OperationalStatusChangeComment: "",
      InstalledLocationKey: "5",
      Make: "",
      Model: "",
      SerialNumber: "",
      BarCode: "",
      InstalledDate: "",
      CommissionedDate: "",
      Ownership: "",
      IsMobile: "0",
      ParentAssetKey: "",
      PurchasedDate: "",
      CurrentAmount: "",
      CurrentDepreciationAmount: "",
      UpdatedTime: "",
      PurchasedAmount: "",
      SalvageValue: "",
      DisposalDate: "",
      WarrantyExpiry: "",
      WarrantyStatus: "0",
      ClassKey: "",
      Specification: "",
      OwnerKey: "0",
      OwnerType: "",
      AssigneeAddedDate: "",
      AssigneeKey: "",
      AssigneeType: "",
      IsSold: "0",
      IsBackup: "0",
      CurrentLocationKey: "",
      Manufacturer_VendorKey: "",
      Supplier_VendorKey: "",
      EndofUsefullLifeDate: "",
      Hidden: "0",
      CreatedDateTime: "20200430:124909",
      CreatedUserKey: "141",
      ModifiedDateTime: "",
      ModifiedUserKey: "",
      IsLocked: "0",
      LockedUserKey: "",
      LockedDateTime: "",
      AssetKey: "389",
      ObjectKey: "389",
      __key__: "389",
      ObjectID: "12341234",
      InstalledLocationName: "Singapore.Office",
      AssetCategoryID: "Access Control",
      AssetGroupKey: "0",
      AssigneeID: "",
      ClassID: "",
      LoginID: "",
      DisplayName: "",
      LocationKey: "5",
      TimeZone: "SING",
      AssetGroupName: "",
      __rowid__: "1",
    },
  ];
  ```

- **Error Response:**

- **Code:** 401 Unauthorized <br />
  **Content:** `{ Unable to retrieve login details }`

- **Sample Call:**

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://ivivaanywhere.ivivacloud.com/api/Asset/Asset/All?apikey=SC:demo:64a9aa122143a5db&max=2&last=0',
  headers: {},
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

});
```

## **Load Data From Local Cache**

Get data from the cors disabled server. API used by backend to log data to the DB

- **URL**

  http://localhost:8085/api/equipment

- **Method:**

  `GET`

- **Example Success Response:**

  - **Code:** 200 OK<br />
    **Content:**

  ```javascript
  {
  Operational: 298,
  NonOperational: 1,
  EquipmentList: {
    "Access Control": 3,
    "Air Handling Unit": 36,
    "BACnetPanel": 1,
    "Chair": 2,
    "CCTV": 3,
    "Chilled Water Header": 2,
    "Chilled Water Pump": 6,
    "Chiller": 8,
    "Centrifugal Chiller": 2,
    "Sensor Panel": 3,
    "CHWP": 2,
    "Condenser Water Header": 1,
    "Condenser Water Pump": 3,
    "Cooling Tower": 8,
    "COWP": 2,
    "Digital Power Meter": 6,
    "Elevator": 2,
    "Escalator": 1,
    "Electric Meter": 27,
    "Gas Meter": 26,
    "Water Meter": 26,
    "FCU": 4,
    "Room Lighting": 5,
    "Fan Coil Unit": 16,
    "Fire Alarm": 4,
    "Fire Press": 2,
    "Gate Seating": 1,
    "Light Bulb": 1,
    "Generator": 1,
    "Smart Light": 1,
    "Heat Exchanger": 2,
    "Fire Pump": 6,
    "Knitting Machine": 20,
    "Lighting System": 10,
    "BMS": 1,
    "Television": 1,
    "PAHU": 2,
    "HVAC": 1,
    "Power Socket": 1,
    "Projector": 3,
    "Security Vehicle": 2,
    "Smoke Detector": 8,
    "Chilled Water Meter": 24,
    "Comfort Sensor": 2,
    "Weather Sensor": 1,
    "Waste Meter": 6,
    "Lift": 3,
    "Variable Air Volume": 1,
  },
  };
  ```

- **Error Response:**

- **Code:** 404 <br />
  **Content:** `{ noEquipDatasfound: "No EquipDatas found", err: err }`

- **Sample Call:**

```javascript
var axios = require("axios");

var config = {
  method: "get",
  url: "http://localhost:8085/api/equipment",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

## Technologies

<p align="center">
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/es6/es6.png" alt="ES6" height = "100px" >
  <img src="https://i.ibb.co/YyKgb2d/download.png" alt="NodeJS" height = "100px" >
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png" alt="NodeJS" height = "100px">
  <img src="https://expressjs.com/images/express-facebook-share.png" alt="NodeJS" height = "100px">
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--IwFcphyV--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/vb6ai56xqgpc0bcfn92y.png" alt="NodeJS"height = "100px" >
  <img src="https://www.styled-components.com/atom.png" alt="NodeJS" height = "100px">
</p>
