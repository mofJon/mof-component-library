"use server";
import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (imagePath: string) => {
  "use server";
  try {
    const imageReq: any = await fetch(`${process.env.API_URL}${imagePath}`);
    const imageBuff = Buffer.from(await imageReq.arrayBuffer());

    if (!imageBuff) return null;

    const { base64 } = await getPlaiceholder(imageBuff);
    return base64;
  } catch (error: unknown) {
    return null;
  }
};
