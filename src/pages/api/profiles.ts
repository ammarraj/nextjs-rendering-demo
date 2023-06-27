import { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/fake-data.json";
import { Profile } from "@/data/types";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Profile[]>
) {
  await sleep(5);
  res.status(200).json(data);
}
