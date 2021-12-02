import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signOut, signInWithPopup } from 'firebase/auth'
import '../../components/fire'

const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider()

// ログアウト処理
auth.signOut()

export default function Home() {
    let mydata = []
    const [data, setData] = useState(mydata)
    const [message, setMessage] = useState('wait...')

    useEffect(() => {
        signInWithPopup(auth, provider).then((result) => {
            setMessage('login: ' + result.user.displayName)
        }).catch((error) => {
            setMessage('not logined.')
        })
    }, [])

    useEffect(() => {
        if (auth.currentUser != null){
            getDocs(collection(db, 'mydata')).then(snapShot => {
                mydata = []
                snapShot.forEach((document) => {
                    const doc = document.data()
                    mydata.push(
                        <tr key={ document.id }>
                            <td>
                                <a href={ '/fire/del?id=' + document.id }>
                                    { document.id }
                                </a>
                            </td>
                            <td>{ doc.name }</td>
                            <td>{ doc.mail }</td>
                            <td>{ doc.age }</td>
                        </tr>
                    )
                })
                setData(mydata)
            })
        }
        else {
            mydata.push(
                <tr key="1">
                    <th colSpan="4">can't get data.</th>
                </tr>
            )
        }
    }, [message])

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
                            { data }
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    )
}