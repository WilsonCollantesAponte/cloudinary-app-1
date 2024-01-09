import { v2 as cloudinary } from "cloudinary";

export async function GET() {
  cloudinary.config({
    cloud_name: "dputhhzyb",
    api_key: "645242162575664",
    api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
  });

  const lizardMan =
    "https://c0.klipartz.com/pngpicture/754/522/gratis-png-dr-connors-connors-spider-man-art-homo-sapiens-lagarto-hombre-de-escapada-mineral-pantano-mortal-kombat-thumbnail.png";

  try {
    const response = await cloudinary.uploader.upload(lizardMan);

    return Response.json({ ok: "yes", response });
  } catch (error) {
    console.log(error);
    return Response.json({ ok: "No", error });
  }
}
