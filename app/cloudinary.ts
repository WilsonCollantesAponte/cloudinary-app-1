// import { v2 as cloudinary } from "cloudinary";

// import { v2 as cloud_W } from "cloudinary";

var cloudinary = require("cloudinary").v2;

// v2.c

cloudinary.config({
  cloud_name: "dputhhzyb",
  api_key: "645242162575664",
  api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
});

// cloudinary.config({
//   cloud_name: "dputhhzyb",
//   api_key: "645242162575664",
//   api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
// });

export default cloudinary;
