import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'

import { getFirestore, addDoc, collection, updateDoc, doc, getDoc, getDocs, query, orderBy } from '@firebase/firestore'
import { getAuth } from '@firebase/auth'
import '../../components/fire'


const db = getFirestore()
const auth = getAuth()

export default function Info() {
    const [ message, setMessage ] = useState('address info')
    const [ comment, setComment ] = useState('')
    const [ myData, setMyData ] = useState(null)
    const [ messageData, setMessageData ] = useState([])
    const router = useRouter()

    // ログインしていなければトップページ
    useEffect(() => {
        if (auth.currentUser == null) {
            router.push('/address')
        }
    }, [])

    // 入力フィールド処理
    const onChangeComment = (e) => {
        setComment(e.target.value)
    }

    // メッセージの投稿
    const doAction = (e) => {
        const time = new Date().getTime()
        const to = {
            comment: 'To: ' + comment,
            time: time
        }
        const from = {
            comment: 'From: ' + comment,
            time: time
        }

        
        
        // 自身のアドレス内にメッセージを追加
        addDoc(collection(db, 'address', auth.currentUser.email, 'address', router.query.id, 'message'), to).then(ref => {
            // 相手のアドレス内にメッセージを追加
            addDoc(collection(db, 'address', router.query.id, 'address', auth.currentUser.email, 'message'), from).then(ref => {
                // 相手のアドレス内のflagを変更
                updateDoc(doc(db, 'address', router.query.id, 'address', auth.currentUser.email), { flag:true }).then(ref => {
                    router.push('/address')
                })
            })
        })
    }

    // topページに戻る
    const goBack = (e) => {
        router.push('/address')
    }

    // アドレス表示とメッセージの取得＋表示
    useEffect(() => {
        if(auth.currentUser != null) {

            // route.query.idのプロフィールをmydataへセット
            getDoc(doc(db, 'address', auth.currentUser.email, 'address', router.query.id)).then(snapshot => {
                setMyData(snapshot.data())
            })
           
            // timeを基準に降順で並べ替え
            const q = query(collection(db, 'address', auth.currentUser.email, 'address', router.query.id, 'message'), orderBy('time', 'desc'))
           
            // メッセージの中身を取得　＋　配列へ入れる
            getDocs(q).then(snapShot => {
                const data = []
                snapShot.forEach((document) => {
                    data.push(
                        <li className="list-group-item px-3 py-1">
                            { document.data().comment }
                        </li>
                    )
                })
                setMessageData(data)
            })

            // フラグの更新
            updateDoc(doc(db, 'address', auth.currentUser.email, 'address', router.query.id), { flag: false })

        }
        else {
            setMessage('no data')
        }
    },[ message ])

    return (
        <div>
            <Layout header="Next.js" title="Info & message.">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{ message }</h5>
                    <div className="text-left">
                        <div>
                            <p>Name: { myData != null ? myData.name : '' }</p>
                            <p>Mail: { myData != null ? myData.mail : '' }</p>
                            <p>Tel: { myData != null ? myData.tel : '' }</p>
                            <p>Memo: { myData != null ? myData.memo : '' }</p>
                        </div>
                        <hr />
                        <div className="form-group">
                            <label>Message:</label>
                            <input type="text" onChange={ onChangeComment } className="form-control" />
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={ doAction }>
                        Send Message
                    </button>
                    <button className="btn btn-secondary" onClick={ goBack }>
                        Go Back
                    </button>
                </div>
                <ul className="list-group">
                    { messageData }
                </ul>
            </Layout>
        </div>
    )
}