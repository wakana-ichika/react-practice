/* 14番目 */
// 計算機

import Layout from '../components/layout'
import Calc from '../components/calc'

export default function Home() {
  return (
    <div>
      <Layout header="Next.js" title="Calculator">
        <div className="text-center">
          <Calc />
        </div>
      </Layout>
    </div>
  )
}