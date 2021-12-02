// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

/* 2番目 */
// componentsにdata.jsを作成
// JSONデータとしてapiに登録

import apidata from '../../components/data'

export default function handler(req, res) {
  var id = req.query.id
  if( id == undefined ) {
    id = 0
  }
  if( id >= apidata.length ) {
    id = 0
  }

  res.json(apidata[id])
}