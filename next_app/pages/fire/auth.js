import { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import '../../components/fire'


// ログインしてログインユーザーの情報を取得、書き出し

const auth = getAuth()
const provider = new GoogleAuthProvider()

export default function Home() {
    const [message, setMessage] = useState('wait...')

    useEffect(() => {
        signInWithPopup(auth, provider).then(result => {
            setMessage('logined: ' + result.user.displayName)
        })
    }, [])

    return (
        <div>
            <Layout header="Next.js" title="Top page.">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{ message }</h5>
                    <p className="h6 text-center">
                        uid: { auth.currentUser != null ? auth.currentUser.uid
                        : '' }<br />
                        displayName: { auth.currentUser != null ? auth.currentUser.displayName : 
                        '' }<br/>
                        email: { auth.currentUser != null ? auth.currentUser.email : 
                        ''}<br/>
                        phoneNumber: { auth.currentUser != null ? auth.currentUser.phoneNumber : 
                        '' }
                    </p>
                </div>
            </Layout>
        </div>
    )
}
