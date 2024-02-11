import { NextApiRequest, NextApiResponse } from "next";
import levels from "../../../../database.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { lvl } = req.query;

    const levelFound = levels.find((level) => level.id === Number(lvl));
    res.status(200).json(levelFound);
}