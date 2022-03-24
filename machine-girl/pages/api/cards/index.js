// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import lodash from 'lodash';
import database from '../../../databases/cards.json';

export default function handler(req, res) {
 console.log(database)
  res.status(200).json(database)
}