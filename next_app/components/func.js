export default {
    'func': {
        'tax': {
            'caption': '入力した金額から消費税価格(10%)を計算します。',
            'function': '(...param) => { return Math.floor(param[0] * 1.1) }'
        },
        'tax2': {
            'caption': '入力した金額から消費税価格(8%)を計算します。',
            'function': '(...param) => { return Math.floor(param[0] * 1.08) }'
        },
        'total': {
            'caption': '10,20,30...といったようにカンマで区切った数字の合計を計算します。',
            'function': `(...param) => {
                 let re = 0
                 for(var i in param){ 
                     re += param[i] * 1} 
                     return re
                    }`
        },
        'factorial': {
            'caption': 'ゼロから入力値までの合計を計算します。',
            'function': `(...param) => { 
                var re = 0 
                for(var i = 0; i <= param[0]; i++){ 
                    re += i 
                } 
                return re
            }`
        }
    }
}
