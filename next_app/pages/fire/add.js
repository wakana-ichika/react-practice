import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { addDoc, collection } from '@firebase/firestore'
import { useRouter } from 'next/router'
import { db } from '../../components/fire'

export default function Add() {
    const [message, setMessage] = useState('add data')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [age, setAge] = useState(0)

    const router = useRouter()


    // event処理
    const onChangeName = (e) => {
        setName(e.target.value)
    }
    
    const onChangeMail = (e) => {
        setMail(e.target.value)
    }

    const onChangeAge = (e) => {
        setAge(e.target.value)
    }

    const doAction = (e) => {
        const ob = {
            name: name,
            mail: mail,
            age: age
        }
        addDoc(collection(db, 'mydata'), ob).then(ref => {router.push('/fire')})
        // collection(db, 'mydata').add(ob).then(ref => {
        //     router.push('/fire')
        //})
    }

    return (
        <div>
            <Layout header="Next.js" title="Top page.">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{ message }</h5>
                    <div className="text-left">
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" onChange={ onChangeName } className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Mail:</label>
                            <input type="text" onChange={ onChangeMail } className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input type="number" onChange={ onChangeAge } className="form-control" />
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={ doAction }>
                        Add
                    </button>
                </div>
            </Layout>
        </div>
    )

    
}