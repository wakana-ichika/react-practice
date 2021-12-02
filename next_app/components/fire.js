import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// firebaseの設定入力
// プロジェクトで表示されるnpmのコマンドを入力
const firebaseConfig = {
    apiKey: "AIzaSyDCKUV6Xaiy1lC2Fsto3AYXRXAu8Z8ugiw",
    authDomain: "kana-react-f9b91.firebaseapp.com",
    projectId: "kana-react-f9b91",
    storageBucket: "kana-react-f9b91.appspot.com",
    messagingSenderId: "367754695614",
    appId: "1:367754695614:web:a9ca052684259212061fef"
}

 /* initializeAppで作成されたアプリのオブジェクトは
    firebase.appsプロパティに配列として保存される。
    プロパティが空の時のみinitializeApp()が呼び出されるようにする。 */

const app = initializeApp(firebaseConfig)
const db = getFirestore(app, {})

export { db }