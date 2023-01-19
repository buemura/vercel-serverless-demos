import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  return response.send(new Date());
}
