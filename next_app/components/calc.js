import { useState, useEffect } from 'react'
import usePersist from './Persist'



export default function Calc(props) {
    const [message, setMessage] = useState('')
    const [input, setInput] = useState('')
    const [data, setData] = usePersist('calc-history', [])
    const [func, setFunc] = useState({func:{}})

    const fetchFunc = (address) => fetch(address).then(res => res.json())
    
    
    //fetcherを作る
    // useEffectとしてデータをjsonに変換し、funcにセットする
    useEffect(() => {
        fetchFunc('/api/func').then((r) => {setFunc(r)})
    }, [data])

    const onChange = (e) => {
        setInput(e.target.value)
    }

    // Enter押したときdoAction(e)を実行処理
    const　onKeyPress = (e) => {
        if( e.key == 'Enter'){
            doAction(e)
        }
    }

    // Enter時の処理
    const doAction = (e) => {
        const res = eval(input));
        setMessage(res)
        data.unshift(input + ' = ' + res)
        setData(data)
        setInput('')
    }

    // 履歴のクリア
    const clear = (e) => {
        setData([])
        setMessage('Clear history')
    }

    // 関数選択ボタン
    const doFunc = (e) => {
        // 入力フォームのデータはinputに入る
        const arr = input.split(',')

        // 関数ボタンで指定されたidからjsonにある関数の種類を特定
        // 更にfunctionにアクセスしstringからfunctionにデータ変更
        const function_id = e.target.id
        const f = func.func[function_id]
        const original_function = eval(f.function)
      
        // 特定したfunctionにフォームのデータを入れる
        const res = original_function(...arr)
        setMessage(res)
        data.unshift(function_id + ' = ' + res)
        setData(data)
        setInput('')

    }

    return (
        <div>
            <div className="alert alert-primary">
                <h5>Result: { message }</h5>
                <div className="form-group">
                    <input type="text" value={ input } className="form-control"
                    onChange={ onChange } onKeyPress={ onKeyPress } />
                </div>
                { Object.entries( func.func ).map((value, key) => (
                    <button className="btn btn-secondary m-1" title={value[1].caption} id={value[0]} key={key} onClick={ doFunc }>
                        { value[0] }
                    </button>
                )) }
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>History:</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((value, key) => (
                        <tr key={key}><td>{ value }</td></tr> 
                    )) }
                </tbody>
            </table>
            <button onClick={ clear } className="btn btn-warning">
            Clear History
            </button>
        </div>
    )


}