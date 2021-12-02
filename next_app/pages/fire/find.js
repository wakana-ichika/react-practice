import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'

import { getDocs, query, collection, where, orderBy, startAt, endAt } from 'firebase/firestore'
import { db } from '../../components/fire'


export default function find() {
    const [message, setMessage] = useState('find data')
    const [find, setFind] = useState('')
    const [data, setData] = useState([])
    let mydata = []

    const onChange = (e) => {
        setFind(e.target.value)
    }

    const doAction = (e) => {
        getDocs(query(collection(db, 'mydata'), orderBy('name'), startAt(find), endAt(find + '¥uf8ff'))).then(
            snapShot => {
                mydata = []
                snapShot.forEach((document) => {
                    const doc = document.data()
                    mydata.push(
                        <tr key={ document.id }>
                            <td>
                                <a href={ '/fire/del?=id?' + document.id }>
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
                setMessage('find: ' + find)
            }
        )
    }

    return (
        <div>
            <Layout header="Next.js" title="Top page.">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{ message }</h5>
                    <div className="text-left">
                        <div className="form-group">
                            <label>Find:</label>
                            <input type="text" onChange={ onChange } className="form-control"/>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={ doAction }>
                        Find
                    </button>
                </div>
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
            </Layout>
        </div>
    )
}