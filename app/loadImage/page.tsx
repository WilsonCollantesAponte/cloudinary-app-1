"use client";

import { useEffect, useState } from "react";
import { v2 as cloudinary } from "cloudinary";
// import { writeFile } from "fs/promises";

// writeFile

cloudinary.config({
  cloud_name: "dputhhzyb",
  api_key: "645242162575664",
  api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
});

cloudinary.uploader
  .upload(
    "https://static.wikia.nocookie.net/ficcion-sin-limites/images/5/5d/El_Lagarto.png/revision/latest/scale-to-width-down/390?cb=20210608235746&path-prefix=es"
  )
  .then((result) => console.log(result));

function LoadImage() {
  //   const [currensImages, setCurrentImages] = useState<Array<string>>([]);
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
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
            //   .upload(String(ev.target?.result))
            //   .then((result) => console.log(result));

            // cloudinary.uploader
            //   .upload(String(ev.target?.result))
            //   .then((result: any) => console.log(result));

            setCurrentImage(String(ev.target?.result));
          };
        }}
      />
      <img src={currentImage} width="35.5%" alt="failed :/" />
    </div>
  );
}

export default LoadImage;
