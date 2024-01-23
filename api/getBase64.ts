import { getPlaiceholder } from "plaiceholder";

export default async (req: Request, res: Response | any) => {
  const { body } = req;
  const { url }: any = body;

  const { base64 }: any = getPlaiceholder(url);
  res.status(200).send(base64);
};
