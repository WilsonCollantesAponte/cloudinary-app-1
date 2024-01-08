// import { v2 as cloudinary } from "cloudinary";

// cloudinary.config({
//   cloud_name: "dputhhzyb",
//   api_key: "645242162575664",
//   api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
// });

// cloudinary.uploader
//   .upload(
//     "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
//   )
//   .then((result) => console.log(result));

const imageURL =
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p> Cloudinary</p>
      <img className=" w-96" src={imageURL} alt="no cargó :/" />
    </div>
  );
}
