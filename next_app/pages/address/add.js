import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import { getFirestore, doc, setDoc } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'
import '../../components/fire'


const db = getFirestore()
const auth = getAuth()

export default function Add() {
    const [message, setMessage] = useState('add address')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [tel, setTel] = useState('')
    const [memo, setMemo] = useState('')

    const router = useRouter()

    // ログインしていなければTopページへ
    useEffect(() => {
        if (auth.currentUser == null) {
            router.push('/address')
        }
    }, [])

    // name, mail, tel, memo　の入力処理
    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeMail = (e) => {
        setMail(e.target.value)
    }

    const onChangeTel = (e) => {
        setTel(e.target.value)
    }

    const onChangeMemo = (e) => {
        setMemo(e.target.value)
    }


    // アドレスの登録処理
    const doAction = (e) => {
        
        const object = {
            name: name,
            mail: mail,
            tel: tel,
            memo: memo,
            flag: false
        }

        setDoc(doc(db, 'address', auth.currentUser.email, 'address', mail), object).then(ref => {
            router.push('/address')
        })
    }

    // トップページに戻る
    const goBack = (e) => {
        router.push('/address')
    }

    return (
        <div>
            <Layout header="Next.js" title="Create data.">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{ message }</h5>
                    <div className="text-left">
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text" onChange={ onChangeName } className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Mail: </label>
                            <input type="text" onChange={ onChangeMail } className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Tel: </label>
                            <input type="text" onChange={ onChangeTel } className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Memo: </label>
                            <input type="text" onChange={ onChangeMemo } className="form-control" />
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={ doAction }>
                        Add
                    </button>
                    <button className="btn" onClick={ goBack }>
                        Go Back
                    </button>
                </div>
            </Layout>
        </div>
    )


}