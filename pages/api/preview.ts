import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.writeHead(307, { Location: "/blog" });
  res.end();
}
