let dom = document.getElementById('root');

let element = React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, 'Hello Idea'
        ),
        React.createElement(
            'h3', {className: 'alert alert-primary'}, 'React sample page.'
        ),
        React.createElement(
            'ul', {className: 'list-group'}, [
                React.createElement(
                    'li', {className: 'list-group-item'}, 'First item'
                ),
                React.createElement(
                    'li', {className: 'list-group-item'}, 'Second item'
                ),
                React.createElement(
                    'li', {className: 'list-group-item'}, 'Third item'
                )
            ]
        )
    ]
)

ReactDOM.render(element, dom)

/* second */

let dom2 = document.querySelector('#root2');

let element2 = (
    <div>
        <h2>JSX sample</h2>
        <p>
            This is sample message.
        </p>
    </div>
)

ReactDOM.render(element2, dom2)

/* third */

let dom3 = document.querySelector('#root3');

var title = '新タイトル';
var message = '新しいメッセージです';

let element3 = (
    <div className="alert alert-primary">
        <h3>{ title }</h3>
        <p>{ message }</p>
        </div>
)

ReactDOM.render(element3, dom3)

/* four*/

let dom4 = document.getElementById('root4');

var message2 = '新しいメッセージ';
var link = 'https://google.com';

let element4 = (
    <div className="alert alert-primary">
        <h4>{ message2 }</h4>
        <h5><a href={ link }>this is link!</a></h5>
    </div>
)

ReactDOM.render(element4, dom4)

/* fifth */

const dom5 = document.querySelector('#root5');

let title2 = '新しいタイトル';
let message3 = '新しいメッセージ';

const msg_s = {
    fontSize:'20px',
    color:'red',
    border: 'solid 1px blue'
}

let element5 = (
    <div className="alert alert-primary">
        <h4>{ title2 }</h4>
        <p style={ msg_s }>{ message3 }</p>
    </div>
)

ReactDOM.render(element5, dom5)

/* sixth */

let dom6 = document.querySelector('#root6');

let title3 = 'React page.';
let message4 = 'メッセージを表示';

const msg1 = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'red',
    border: 'solid 2px green'
}

let printMsg = (msg2, size, color) => {
    const style = {
        fontSize: size + 'pt',
        fontWeight: '700',
        color: color,
        border: 'solid 1px' + color
    }
    return <p style={ style }>{ msg2 }</p>
};

let element6 = (
    <div>
        <h4>{ title }</h4>
        <h6 style={ msg1 }>{ message4 }</h6>
        <div className="alert alert-secondary mt-3">
            { printMsg('最初のメッセージ', 36, '#fff') }
            { printMsg('次のメッセージです', 24, '#aaa') }
            { printMsg('最後のメッセージでした', 12, '#666') }
        </div>
    </div>
)

ReactDOM.render(element6, dom6)

/* seventh */

let dom7 = document.querySelector('#root7');

let title4 = 'React page.';
let message5 = 'メッセージを表示します';
let true_message = 'これがTrueの時に表示されるメッセージです';

let flag = true; //表示用フラグ

let element7 = (
    <div>
        <h4>{ title4 }</h4>
        <h6>{ message5 }</h6>
        {flag &&
        <div className="alert alert-primary mt-3">
            <p>{ true_message }</p>
        </div>
        }
    </div>
)

ReactDOM.render(element7, dom7)

/* eighth */

let dom8 = document.querySelector('#root8');

let title5 = 'React page.';
let message6 = 'メッセージが表示されます';

let true_content = 'Trueの時のメッセージです';
let false_content = 'Falseの時のメッセージです';

let flag2 = false //表示用フラグ

let element8 = (
    <div>
        <h4>{ title }</h4>
        <h6>{ message6 }</h6>
        {flag2 ?
            <div className='alert alert-primary mt-3'>
                <p>{ true_content }</p>
            </div>
        :
            <div className='alert alert-primary mt-3'>
                <p>{ false_content }</p>
            </div>
        }
    </div>
)

ReactDOM.render(element8, dom8)

/* nein */

let dom9 = document.querySelector('#root9');

let title6 = 'React page.';
let message7 = 'メッセージを表示します。'

let data = [
    <li className="list-group-item">one</li>,
    <li className="list-group-item">two</li>,
    <li className="list-group-item">three</li>
]

let data2 = [
    <div>aa</div>,
    <p>bb</p>,
    <p>ccc</p>
]

let element9 = (
    <div>
        <h4>{ title }</h4>
        <h6>{ message7 }</h6>
        <ul className="list-group mt-4">
            { data }
        </ul>
        { data2 }
    </div>
)

ReactDOM.render(element9, dom9)

/* tenth */

let dom10 = document.querySelector('#root10');

let title7 = 'React page.';
let message8 = 'データを表示する';

let data3 = [
    {name: 'Taro', mail: 'taro@yamada', age: 45},
    {name: 'Hanako', mail: 'hanako@flower', age: 37},
    {name: 'Sachiko', mail: 'sachiko@happy', age: 29},
    {name: 'Jiro', mail: 'jiro@ychange', age: 18},
    {name: 'Kumi', mail: 'Kumi@class', age: 56},
]

let element10 = (
    <div>
        <h4>{ title7 }</h4>
        <h6>{ message8 }</h6>
        <table className="table table-striped mt-4">
            <thead className="thead-dark">
                <tr>
                    <th>name</th>
                    <th>mail</th>
                    <th>age</th>
                </tr>
            </thead>

            <tbody>
                {data3.map((value) => ( 
                <tr>
                    <td>{ value.name }</td>
                    <td>{ value.mail }</td>
                    <td>{ value.age }</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
);

ReactDOM.render(element10, dom10);

/* eleventh */

let dom11 = document.getElementById('root11');

let title8 = 'React page.';
let message9 = 'データを表示する';

let data4 = {
    url: 'https://google.com',
    title: 'Google',
    caption: 'this is google search engin web site.'
}

let element11 = (
    <div>
        <h4>{ title8 }</h4>
        <h6>{ message9 }</h6>
        {(() => 
        <div className="card mt-4">
            <div className="card-header">
                { data4.title }
            </div>
            <div className="card-body">
                { data4.caption }
            </div>
            <div className="card-footer">
                <a href={ data4.url }>{ data4.title }へ移動</a>
            </div>
        </div>
        )()}
    </div>
)

ReactDOM.render(element11, dom11)

/* twelve */

let dom12 = document.querySelector('#root12');

let title9 = 'React page.';
let message10 = 'メッセージを表示します';

var count = 0;

setInterval(() => {
    count++;

    let element12 = (
        <div>
            <h4>{ title9 }</h4>
            <h6>{ message10 }</h6>
            <h5 className="alert alert-primary">
                count: { count }.
            </h5>
        </div>
    )
    ReactDOM.render(element12, dom12)}, 1000
);

/* thirteen */

let dom13 = document.querySelector('#root13');

var count2 = 0;

let doAction = (event)=>{
    count2++;

    let element13 = (
        <div>
            <h4>{ title9 }</h4>
            <h6>{ message10 }</h6>
            <h5 className="alert alert-primary" onClick={ doAction }>
                    count: { count2 }.
            </h5>
        </div>
    )
    ReactDOM.render(element13, dom13)
}

doAction();

/* fourteen */

let dom14 = document.querySelector('#root14');

let title10 = 'React page.';
let message11 = 'お名前をどうぞ';
let in_val = '';

let doChange = (event) => {
    in_val = event.target.value
    message11 = 'こんにちは、' + in_val + 'さん！！';
}

let doAction2 = (event2) => {
    let element14 = (
        <div>
            <h4>{ title10 }</h4>
            <h6>{ message11 }</h6>
            <div className="alert alert-primary">
                <div className="form-group">
                    <label>Input:</label>
                    <input type="text" className="form-control" id="input" onClick={ doChange }/>
                </div>
                <button onClick={ doAction2 } className="btn btn-primary">Click</button>
            </div>
        </div>
    )
    ReactDOM.render(element14, dom14)
}

doAction2();