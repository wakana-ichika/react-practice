import React, { useState, useEffect, memo } from 'react'
import usePersist from '../Persist'

function DeleteForm(props) {
    const [memo, setMemo] = usePersist('memo', [])
    const [num, setNum] = useState(0)
    const [mode, setMode] = usePersist('mode', 'default') // 追加

    const doChange = (e) => {
        setNum(e.target.value)
    }
    
    const doAction = (e) => {
        var res = memo.filter((item, key) => {
            return key != num
        })
        setMemo(res)
        setNum(0)
        setMode('default') //追加
    }

    var items = memo.map((value, key) => (
            <option key={ key } value={ key }>
                { value.message.substring(0, 10) }
            </option>
        ))

    return (
        <form onSubmit={ doAction }>
            <div className="form-group row">
                <select onChange={ doChange } className="form-control-sm col"
                defaultValue="-1">
                    { items }
                </select>
                <input type="submit" value="Delete" className="btn btn-primary btn-sm col-2" />
            </div>
        </form>
    )
}

export default DeleteForm