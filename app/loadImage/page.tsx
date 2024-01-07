"use client";

import { v2 as cloudinary } from "cloudinary";
import { useEffect, useState } from "react";

// cloudinary.config({
//   cloud_name: "dputhhzyb",
//   api_key: "645242162575664",
//   api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
// });

function LoadImage() {
  //   const [currensImages, setCurrentImages] = useState<Array<string>>([]);
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    // console.log(currentImage);
    console.log("image");
  }, [currentImage]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p> LoadImage</p>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(event) => {
          const { files } = event.target;
          if (!files) return;

          const readImage = new FileReader();
          readImage.readAsDataURL(files[0]);
          readImage.onload = (ev) => {
            setCurrentImage(String(ev.target?.result));
          };
        }}
      />
      <img src={currentImage} width="35.5%" alt="failed :/" />
    </div>
  );
}

export default LoadImage;
