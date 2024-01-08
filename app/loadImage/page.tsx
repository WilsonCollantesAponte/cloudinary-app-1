"use client";

import { useEffect, useState } from "react";

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

            setCurrentImage(String(ev.target?.result));
          };
        }}
      />
      <img src={currentImage} width="35.5%" alt="failed :/" />
    </div>
  );
}

export default LoadImage;
