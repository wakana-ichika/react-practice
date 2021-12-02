import React, {useState, component, useEffect} from 'react'

function usePersist(ky, initVal) {
    const key = 'Hooks: ' + ky

    const value = () => {
        try {
            const item = localStorage.getItem(key)
            //　JSON.parseでJSON形式のテキストを元にオブジェクトを生成する
            return item ? JSON.parse(item)
            :
            initVal
        }
        catch(err) {
            return initVal
        }
    }

    const setValue = (val) => {
        try {
            setSaveValue(val)
            localStorage.setItem(key, JSON.stringify(val))
        }
        catch(err) {
            console.log(err)
        }
    }

    const [saveValue, setSaveValue] = useState(value)

    return [saveValue, setValue]
}

export default usePersist