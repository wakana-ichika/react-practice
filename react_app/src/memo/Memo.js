import React, {useState, useEffect} from 'react'
import usePersist from '../Persist'

import Item from './Item'


function Memo(props) {
    const [memo, setMemo] = usePersist('memo', [])
    const [fmemo, setFMemo] = usePersist('findMemo', [])
    const [mode, setMode] = usePersist('mode', 'default')

    var data = []

    switch　(mode){
        case 'default':
            data = memo.map((value, key) => (
                <Item key={ value.message } value={ value } index={ key + 1 } />
            ))
            //setMode('default')が走るとcase 'default'の内容が走ってしまう
            //そして再びsetMode('default')が走るのでエンドレスループエラーが発生する。
            //setMode('default') ＜＝　正規の記述
            break
        
        case 'find':
            data = fmemo.map((value, key) => (
                <Item key={ value.message } value={ value } index={ key + 1 } />
            ))
            break;
        
        default:
            data = memo.map((value, key) => (
                <Item key={ value.message } value={ value } index={ key + 1 } />
            ))
    }

    return (
        <table className="table mt-4">
            <tbody>{ data }</tbody>
        </table>
    )
}

export default Memo