// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import lodash from 'lodash';
import database from '../../../databases/cards.json';

export default function handler(req, res) {
  const item = lodash.find(database, { id: req.query.id });
  console.log(item)
  res.status(200).json(item)
}