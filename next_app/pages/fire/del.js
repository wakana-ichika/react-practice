import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getDoc, doc, deleteDoc } from '@firebase/firestore'
import { getAuth } from '@firebase/auth'
import { db } from '../../components/fire'
import Layout from '../../components/layout'

const auth = getAuth()

export default function  Delete(props) {
    const [message, setMessage] = useState('wait...')
    const [data, setData] = useState(null)
    const router = useRouter()

    useEffect(() => {
        if( router.query.id != undefined && auth.currentUser != null ){
            setMessage('Delete id =' +  router.query.id)
            getDoc(doc(db, 'mydata', router.query.id)).then(docSnap => { setData(docSnap.data()) })
        }
        else{
            setMessage(message + '.')
        }
    }, [message])

    const doAction = (e) => {
        deleteDoc(doc(db, 'mydata', router.query.id)).then(ref => {
            router.push('/fire')
        })
    }

    return (
        <div>
            <Layout header="Next.js" title="Top page.">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{ message }</h5>
                    <pre className="card p-3 m-3 h5 text-left">
                        Name: {data != null ? data.name : '...'}<br/>
                        Mail: {data != null ? data.mail : '...'}<br/>
                        Age: {data != null ? data.age : '...'}
                    </pre>
                    <button className="btn btn-primary" onClick={doAction}>
                        Delete
                    </button>
                </div>
            </Layout>
        </div>
    )
}