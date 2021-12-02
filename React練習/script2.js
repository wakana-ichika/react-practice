let dom = document.querySelector("#root1")
let message = 'React Component Page.'

//関数コンポーネント

function Welcome(props) {
    return <div className="alert alert-primary">
        <p className="h4">Hello React!!</p>
    </div>
}

//表示するJSX
let element = (
    <div>
        <h5 className="h5">{ message }</h5>
        <Welcome />
    </div>
)

ReactDOM.render(element, dom)

/* two */
//属性を使用してみよう！

let dom2 = document.querySelector('#root2');

//関数コンポーネント

function Welcome2( props ){
    return <div className={ props.alert }>
        <p className={ props.fontSize }>
            Hello { props.name }!!
        </p>
    </div>
}

//表示するJSX

let element2 = (
    <div>
        <h5 className="mb-4">{ message }</h5>
        <Welcome2 name="Taro" fontSize="h2" alert="alert alert-primary" />
        <Welcome2 name="Hanako" fontSize="h5" alert="alert alert-dark" />
    </div>
)

ReactDOM.render(element2, dom2)

/* three */

let dom3 = document.querySelector("#root3");

//関数コンポーネント
function Welcome3(props){
    return (
        <div className="alert alert-primary">
            <Calc classes={ props.classes } number={ props.number }/>
        </div>
    )
};

function Calc(props) {
    let total = 0;
    for(var i = 1; i <= props.number; i++){
        total += i
    }
    return <p className={ props.classes }>
        1から{ props.number }までの合計は、「{ total }」です。
    </p>
};

let element3 = (
    <div>
        <h5 className="mb-4">{ message }</h5>
        <Welcome3 number="10" classes="h3"/>
        <Welcome3 number="100" classes="h5"/>
        <Calc number="50" classes="h4"/>
        <Calc number="500" classes="h6"/>
    </div>
)

ReactDOM.render(element3, dom3)

/* fourth */
//クラスを使用してみる！

let dom4 = document.querySelector('#root4');
 
class Hello extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return <div className="alert alert-primary">
            <p className="h4">Hello!!</p>
        </div>
    };
}

let element4 = (
    <div>
        <h5 className="mb-4">{ message }</h5>
        <Hello />
    </div>
)

ReactDOM.render(element4, dom4);

/* fifth */

let dom5 = document.querySelector('#root5');

class Rect extends React.Component {
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    color = 'white';
    style = {};

    constructor(props){
        super(props);
        this.x = props.x;
        this.y = props.y;
        this.width = props.w;
        this.height = props.h;
        this.color = props.c;
        this.style = {
            backgroundColor: this.color,
            position: 'absolute',
            left: this.x + 'px',
            top: this.y + 'px',
            width: this.width + 'px',
            height: this.height + 'px'
        };
    }

    render(){
        return <div style={ this.style }></div>
    }
}

let element5 = (
    <div>
        <h5>{ message }</h5>
        <div>
            <Rect x="100" y="100" w="200" h="200" c="cyan" />
            <Rect x="200" y="200" w="200" h="200" c="magenta" />
        </div>
    </div>
)

ReactDOM.render(element5, dom5);