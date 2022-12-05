// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSurvery, initClient } from '../util/qualtricsClient'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const results = await getSurvery(process.env.WAC_SURVEY!)
  res.status(200).json(results)
}
