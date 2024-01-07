// import { Cloudinary } from "@cloudinary/url-gen";

// export default function Home() {
//   const cld = new Cloudinary({ cloud: { cloudName: "dputhhzyb" } });

//   function handleSomething() {
//     cld.image("dputhhzyb");
//   }

////////////////////////////////////////////////////////////

// const cloudinary = require("cloudinary");

// cloudinary.v2.config({
//   cloud_name: "dputhhzyb",
//   api_key: "645242162575664",
//   api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
//   secure: true,
// });

// cloudinary.v2.api
//   .resource_by_asset_id("79f7d49e950f31452c07b706bd95b1d2")
//   .then(console.log);

////////////////////////////////////////////////////////////

import { v2 as cloudinary } from "cloudinary";

const imageURL =
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg";

cloudinary.config({
  cloud_name: "dputhhzyb",
  api_key: "645242162575664",
  api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
});

// cloudinary.v2.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result);
//   }
// );

// cloudinary.uploader.upload(imageURL).then((result) => console.log(result));

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p> Cloudinary</p>
      <img className=" w-96" src={imageURL} alt="no cargó :/" />
    </div>
  );
}
