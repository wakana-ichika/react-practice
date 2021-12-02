import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../components/fire'


export default function Home() {
    let mydata = []
    const [data, setData] = useState( mydata )
    const [message, setMessage] = useState('wait...')

    //　firebase.firestore()が無い為、コレクションも正しく反応せずボツ

    // useEffect(() => {
    //     db.collection("mydata").get().then((snapshot) => {
    //         snapshot.forEach((document) => {
    //             const doc = document.data()
    //             mydata.push(
    //                 <tr key={ document.id }>
    //                     <td><a href={ 'fire.del?id=' + document.id }>{ document.id }</a></td>
    //                     <td>{ doc.name }</td>
    //                     <td>{ doc.mail }</td>
    //                     <td>{ doc.age }</td>
    //                 </tr>
    //             )
    //         })
    //         setData(mydata)
    //         setMessage('Firebase data.')
    //     })
    // }, [])


    // firebase公式「データを読み取る」より参照
    // ただ、awaitが上手く機能しなかったので、then()で対処
    // getDocsの領域内にsetDataを入れないとmydataが消えてしまうので要注意

    useEffect(() => {
        getDocs(collection(db, 'mydata')).then((snapshot) => {
            // ここにArrayを入れないと更新するたびにデータが消える
            mydata = []
            snapshot.forEach((document) => {
                const doc = document.data();
                 mydata.push(
                    <tr key={document.id}>
                        <td><a href={ '/fire/del?id=' + document.id }>{ document.id }</a></td>
                        <td>{ doc.name }</td>
                        <td>{ doc.mail }</td>
                        <td>{ doc.age }</td>
                    </tr>
                )
            })
            setData(mydata)
        })
        setMessage('firebase data.')
    }, [])


    return (
        <div>
            <Layout header="Next.js" title="Top page.">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{ message }</h5>
                    <table className="table bg-white text-left">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    )
}