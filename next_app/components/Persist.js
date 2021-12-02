import { useState } from 'react'

export default function usePersist(ky, initVal) {
    var key = 'Hooks: ' + ky

    const value = () => {
        try {
            const item = localStorage.getItem(key)

            return item ? JSON.parse(item):initVal
        }
        catch(error) {
            return initVal
        }
    }

    const setValue = (val) => {
        try {
            setSaveValue(val)
            localStorage.setItem(key, JSON.stringify(val))
        }
        catch(error) {
            console.log(error)
        }
    }

    const [saveValue, setSaveValue] =useState(value)
    
    //　ステートが第一引数で、関数が第二以降
    return [saveValue, setValue]
}
