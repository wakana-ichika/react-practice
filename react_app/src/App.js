import logo from './logo.svg';
import React, { Component, useEffect, useState } from 'react'
import './App.css';
import { render } from 'react-dom';


/* 1番目 */

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


/* 2番目 */
//クラスコンポーネントの作り方

// class App extends Component {
//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">
//           React
//         </h1>
//         <div className="container">
//           <p className="subtitle">This is sample component.</p>
//           <p>これはサンプルのコンポーネントです。</p>
//           <p>簡単なメッセージを表示します。</p>
//         </div>
//       </div>
//     )
//   }
// }


/* 3番目 */
//コンストラクターに変数を代入して使用する！

// class App extends Component {
//   constructor( props ){
//     super()
//     this.title = props.title
//     this.message = props.message
//   }

//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">
//           React
//         </h1>
//         <div className="container">
//           <p className="subtitle">{ this.title }</p>
//           <p className="subtitle">{ this.message }</p>
//         </div>
//       </div>
//     )
//   }
// }


/* 4番目 */
//新しいJSファイルを作成して反映させる！

// import Rect from './Rect'

// class App extends Component {

//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <p className="subtitle">draw rectangle</p>
//           <Rect x='200' y="200" w="200" h="200" c="#6ff9" r="20" />
//           <Rect x='300' y="300" w="200" h="200" c="#f6f9" r="75" />
//           <Rect x='400' y="400" w="200" h="200" c="#6669" r="100" />
//         </div>
//       </div>
//     )
//   }
// }


/* 5番目 */
//ステート（コンポーネントの状態を操作できる）を使用する。

// class App extends Component {
//   constructor( props ){
//     super( props )
//     this.state = {
//       msg: 'Hello, Component.',
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <p className="subtitle">Show message.</p>
//           <p className="alert alert-warning">{ this.state.msg }</p>
//           <p className="alert alert-dark">{ this.props.msg }</p>
//         </div>
//       </div>
//     )
//   }
// }


/* 6番目 */
//ステートを更新する

// class App extends Component {
//   constructor( props ) {
//     super( props )

//     this.state = {
//       msg: 'Hello',
//       count: 0,
//     }

//     let timer = setInterval(() => {
//       this.setState({
//         count: this.state.count + 1,
//         msg: '[count:' + this.state.count + ']'
//       })
//     }, 1000)
//   }

//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <p className="subtitle">Count number.</p>
//           <p className="alert alert-warning">{ this.state.msg }</p>
//           <p className="alert alert-dark">{ this.props.msg }</p>
//         </div>
//       </div>
//     )
//   }
// }


/* 7番目 */
//　イベントをバインドする。
//　メソッドをバインド　＆　ステートをマウスで変更。

// class App extends Component {
  
//   constructor( props ){
    
//     super( props )
   
//     this.state = {
//       counter: 0,
//       msg: 'Count start!',
//     }
//     this.doAction = this.doAction.bind( this )
//   }

//   doAction( event ) {
//     this.setState({
//       counter: this.state.counter + 1,
//       msg: '*** count:' + this.state.counter + ' ***'
//     })
//   }

//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <p className="subtitle">Count number.</p>
//           <div className="alert alert-primary text-center">
//             <p className="h5 mh-4">{ this.state.msg }</p>
//             <button className="btn btn-primary" onClick={ this.doAction }>
//               Click
//             </button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


/* 8番目 */
// ステートの値によって表示する内容を変える。

// class App extends Component {
  
//   constructor( props ){
//     super( props )
    
//     this.state = {
//       counter: 0,
//       msg: 'Count start!',
//       flg: true
//     }
//     this.doAction = this.doAction.bind( this )
//   }

//   doAction( e ){
//     this.setState({
//       counter: this.state.counter + 1,
//       msg:this.state.counter,
//       flg: !this.state.flg
//     })
//   }

//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <p className="subtitle">Count number.</p>
//           { this.state.flg ?
//             <div className="alert alert-primary text-right">
//               <p className="h5">{ this.state.msg }</p>
//             </div>
//           :
//             <div className="alert alert-warning text-left">
//               <p className="h5">{ this.state.msg }です。</p>
//             </div>
//         }
//         <div className="text-center">
//           <button className="btn btn-primary" onClick={ this.doAction }>
//             Click
//           </button>
//         </div>
//         </div>
//       </div>
//     )
//   }
// }


/* 9番目 */
// プロパティとステートの連携。

// class App extends Component {
//   data = []

//   area = {
//     width:'500px',
//     height: '500px',
//     border: 'solid 1px blue'
//   }

//   constructor(props) {
//     super(props)
//     this.state = {
//       list: this.data
//     }
//     this.doAction = this.doAction.bind(this)
//   }

//   doAction(e){
//     var x = e.pageX
//     var y = e.pageY
//     this.data.push({x:x, y:y})
//     this.setState({
//       list: this.data
//     })
//   }

//   draw(d){
//     var s = {
//       position: 'absolute',
//       left: (d.x - 25) + 'px',
//       top: (d.y - 25) + 'px',
//       width: '50px',
//       height: '50px',
//       backgroundColor: '#66f3'
//     }

//     return <div style={s}></div>
//   }

//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <p className="subtitle">draw rectangle.</p>
//           <div style={ this.area } onClick={ this.doAction }>
//             {this.data.map((value) => this.draw(value) )}
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


/* 10番目 */
//　配列データを取り出して１つづつ加工する

// class App extends Component {
  
//   data = [
//     'This is list sample.',
//     'これは　リスト　サンプルです',
//     '配列をリストに変換します。'
//   ]

//   constructor( props ) {
//     super( props )

//     this.state = {
//       list: this.data
//     }
//   }

//   render(){
//     return (
//       <div>
//         <h1 className="bt-primary text-white display-4">React</h1>
//         <div className="container">
//           <p className="subtitle">Show List.</p>
//           <List title="サンプルリスト"　data={ this.data } />
//         </div>
//       </div>
//     )
//   }
// }

// class List extends Component {

//   number = 1

//   render(){
//     var data = this.props.data;

//     return (
//       <div>
//         <p className="h5 text-container">{ this.props.title }</p>
//         <ul className="list-group">
//           { data.map((item, key) => 
//             <li className="list-group-item" key={ key }>
//               <Item number={ key + 1 } value={ item } />
//             </li>
//             ) }
//         </ul>
//       </div>
//     )
//   }
// }

// class Item extends Component {
//   itm = {
//     fontSize: '16px',
//     color: '#00f',
//     textDecoration: 'underline',
//     textDecorationColor: '#ddf'
//   }

//   num = {
//     fontWeight: 'bold',
//     color: 'red'
//   }

//   render(){
//     return (
//       <p style={ this.itm }>
//         <span style={ this.num }>
//           [{ this.props.number }]&nbsp;
//         </span>
//         { this.props.value }
//       </p>
//     )
//   }
// }


/* 11番目 */
// コンポネント表記をHTMLタグみたいにする！
// this.props.childrenで中身を取り出す。

// class App extends Component {
//   input = ''

//   constructor(props) {
//     super(props)
//   }

//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <Message title="Children">
//             これはコンポーネント内のコンテンツです。
//             マルでテキストを分割し、リストにして表示します。
//             改行は必要ありません。
//           </Message>
//         </div>
//       </div>
//     )
//   }
// }

// class Message extends Component {
  
//   li = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '##090'
//   }

//   render() {
//     var content = this.props.children
//     var arr = content.split('。')
//     var arr2 = []
//     for(var i = 0; i < arr.length; i++){
          //　trim()は文字列両端の空白を削除する

//       if (arr[i].trim() != ''){
//         arr2.push(arr[i]);
//       }
//     }

//     var list = arr2.map((value, key) => (
//       <li className="list-group-item" style={ this.li } key={ key }>
//         { key + 1 }.{ value }.
//       </li>
//     ))

//     return (
//       <div>
//         <h2>{ this.props.title }</h2>
//         <ol className="list-group">{ list }</ol>
//       </div>
//     )
//   }
// }


/* 12番目 */
// フォームの利用

// class App extends Component {
//   input = ''

//   constructor( props ) {
//     super( props )

//     this.state = {
//       title: 'input form',
//       message: 'type your name.'
//     }

//     this.doChange = this.doChange.bind( this )
//     this.doSubmit = this.doSubmit.bind( this )

//   }

//   doChange( event ) {
//     this.input = event.target.value
//   }

//   doSubmit( event ) {
//     this.setState({
//       title: 'send form',
//       message: 'Hello,' + this.input + '!'
//     })
//     event.preventDefault()
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <h4>{ this.state.title }</h4>
//           <p className="card h5 p-3">{ this.state.message }</p>
//           <div className="alert alert-primary mt-3">
//             <form action="" onSubmit={ this.doSubmit }>
//               <div className="formgroup">
//                 <label>Message:</label>
//                 <input type="text" className="form-control" pattern="[A-Za-z_,.]+" required onChange={ this.doChange } />
//               </div>
//               <input type="submit" className="btn btn-primary" value="Click" />
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }


/* 13番目 */
//　onCheckイベントを持ったコンポーネント

// class App extends Component {
//   input = ''

//   constructor( props ) {
//     super( props )
    
//     this.state = {
//       title: 'input form',
//       message: 'type your name.',
//       max: 10
//     }

//     this.doCheck = this.doCheck.bind( this )
//   }

//   doCheck( event ) {
//     alert(event.target.value + 'は長すぎます。（最大' + this.state.max + '文字）')
//   }

//   render() {
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <h4>{ this.state.title }</h4>
//           <Message maxlength={ this.state.max } onCheck={ this.doCheck } />
//         </div>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   li = {
//     fontSize: '14px',
//     fontWeight: 'bold',
//     color: '#090'
//   }

//   constructor( props ){
//     super( props )
//     this.doChange = this.doChange.bind(this)
//   }

//   doChange( e ){
//     if(e.target.value.length > this.props.maxlength){
//       this.props.onCheck(e)
//       e.target.value = e.target.value.substr(0, this.props.maxlength)
//     }
//   }

//   render(){
//     return (
//       <div className="form-group">
//         <label>input:</label>
//         <input type="text" className="form-control" onChange={ this.doChange } />
//       </div>
//     )
//   }
// }


/* 14番目 */
//コンテキストを使用する

// var data = {
//   title: 'React-Context',
//   message: 'This is sample message.'
// }

// const SampleContext = React.createContext(data)

// class App extends Component {
//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">React</h1>
//         <div className="container">
//           <Title />
//           <Message />
//         </div>
//       </div>
//     )
//   }
// }

// class Title extends Component {
//   static contextType = SampleContext

//   render(){
//     return (
//       <div className="card p-2 my-3">
//         <h2>{ this.context.title }</h2>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   static contextType = SampleContext

//   render(){
//     return (
//       <div  className="alert alert-primary">
//         <p>{ this.context.message }</p>
//       </div>
//     )
//   }
// }


/* 15番目 */
// コンテキストを大体はこれでいいんだけど、
// 特定のコンポーネント一ヶ所だけ変更したい場合

// var data = {
//   title: 'React-Context',
//   message: 'This is sample message.'
// }

// const SampleContext = React.createContext(data)

// class App extends Component {
//   new_data = {
//     title: '新しいタイトル',
//     message: 'これは新しいメッセージです。'
//   }

//   render(){
//     return (
//       <div>
//         <h1 className="bg-primary text-white display-4">
//           React
//         </h1>
//         <div className="container">
//           <Title />
//           <Message />
//           <hr />
//           <SampleContext.Provider value={ this.new_data }>
//             <Title />
//             <Message />
//           </SampleContext.Provider>
//           <hr />
//           <Title />
//           <Message />
//         </div>
//       </div>
//     )
//   }
// }

// class Title extends Component {
//   static contextType = SampleContext

//   render(){
//     return (
//       <div className="card p-2 my-3">
//         <h2>{ this.context.title }</h2>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   static contextType = SampleContext

//   render(){
//     return (
//       <div className="alert alert-primary">
//         <h2>{ this.context.message }</h2>
//       </div>
//     )
//   }
// }


/* 16番目 */
// コンテキストでテーマを作る
// コンテキストこ切り替えると模様がえ

// var theme = {
//   light: {
//     styles: {
//       backgroundColor: '#f0f9ff',
//       color: '#00f'
//     },
//     head: 'bg-primary text-white display-4 mb-4',
//     alert: 'alert alert-primary my -3',
//     text: 'text-primary m-3',
//     foot: 'py-4'
//   },
//   dark: {
//     styles: {
//       backgroundColor: '#336',
//       color: '#eef'
//     },
//     head: 'bg-secondary text-white display-4 mp-4',
//     alert: 'alert alert-dark my-3',
//     text: 'text-light m-3',
//     foot: 'py-4'
//   }
// }

// const ThemeContext = React.createContext(theme.dark)

// class App extends Component {
//   static contextType = ThemeContext

//   render(){
//     return (
//       <div style={ this.context.styles }>
//         <h1 className={ this.context.head }>React</h1>
//         <div className="container">
//           <Title value="Content page" />
//           <Message value="This is Content sample." />
//           <Message value="*これはテーマのサンプルです。" />
//           <div className={ this.context.foot }></div>
//         </div>
//       </div>
//     )
//   }
// }

// class Title extends Component {
//   static contextType = ThemeContext

//   render(){
//     return (
//       <div className={ this.context.alert }>
//         <h2>{ this.props.value }</h2>
//       </div>
//     )
//   }
// }

// class Message extends Component {
//   static contextType = ThemeContext

//   render(){
//     return (
//       <div style={ this.context.styles }>
//         <p className={ this.context.text }>{ this.props.value }</p>
//       </div>
//     )
//   }
// }


/* 17番目 */
// ステートフック
//　クラスコンポーネントを大量に作ると中のステートを忘れるので
//　関数コンポーネントでシンプルに構成したい場合

// function App(){
//   const [ message ] = useState('Welcome to Hooks!')

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <p className="h5">{ message }</p>
//       </div>
//     </div>
//   )
// }


/* 関数コンポーネント */

/* 18番目 */
// ステートフックで数字をカウントする

// function App() {
//   const [count, setCount] = useState(0)
//   const clickFunc = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-4">Hooks sample</h4>
//         <div className="alert alert-primary text-center">
//           <p className="h5 mb-3">click: { count } times!</p>
//           <div>
//             <button className="btn btn-primary" onClick={ clickFunc }>
//               Click me
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


/* 19番目 */
// ステートフックを複数同時操作
// チェックボックスでスタイル変更

// function App() {
//   const [count, setCount] = useState(0)
//   const[flag, setFlag] = useState(false)
//   const clickFunc = () => {
//     setCount(count + 1)
//   }
//   const changeFlag = (e) => {
//     setFlag(e.target.checked)
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hook sample</h4>
//         {flag ?
//         <div className="alert alert-primary text-center">
//           <p className="h5 mb-3">click: { count } times!</p>
//           <div>
//             <button className="btn btn-primary" onClick={ clickFunc }>
//               Click Me
//             </button>
//           </div>
//         </div>
//         :
//         <div className="card p-3 border-primary text-center">
//           <p className="h5 mb-3 text-left text-primary">
//             click: { count } times!
//           </p>
//           <div>
//             <button className="btn btn-primary" onClick={ clickFunc }>
//               Click Me
//             </button>
//             </div>
//         </div>
//       }

//       <div className="form-group h6 text-center pt-3">
//         <input type="checkbox" className="form-check-input" id="check1" onChange={changeFlag} />
//         <label className="form-check-label" htmlFor="check1">
//           Change form style.
//         </label>
//       </div>
//       </div>
//     </div>
//   )
// }


/* 20番目 */
// 関数コンポーネントに関数コンポーネントを入れる

// function AlertMessage() {
//   return <div className="alert alert-primary h5 text-primary">
//       This is Alert message!
//     </div>
// }

// function CardMessage() {
//   return <div className="card p-3 h5 border-primary text-center">
//     This is Card message!
//   </div>
// }

// function App() {
//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage />
//         <CardMessage />
//       </div>
//     </div>
//   )
// }


/* 21番目 */
//クラスコンポーネンtのconstructor(props){}で属性を取得していた動作を
//関数コンポーネントで同じことをする

// function AlertMessage(props) {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//       { props.message }
//     </div>
//   )
// }

// function CardMessage(props) {
//   return (
//     <div className="card p-3 border-primary text-center">
//       { props.message }
//     </div>
//   )
// }

// function App() {
//   const [msg] = useState('This is sample message!')

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage message={msg} />
//         <CardMessage message={msg} />
//       </div>
//     </div>
//   )
// }


/* 22番目 */
//　コンポーネントが表示された後で属性の値を変更したら更新されるか？
// されます。

// function AlertMessage(props) {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//       { props.message }
//     </div>
//   )
// }

// function CardMessage(props) {
//   return (
//     <div className="card p-3 h5 border-primary text-center">
//       { props.message }
//     </div>
//   )
// }

// function App() {
//   const [msg, setMsg] = useState('This is sample message!')

//   const doAction = () => {
//     // window.prompt()はテキストを入力するダイアログを表示するもの。
//     // 入力した値が戻り値として返ってくる。

//     let res = window.prompt('Type your name:')
//     setMsg('Hello ' + res + '!!')
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage message={msg} />
//         <CardMessage message={msg} />
//       </div>
//       <div className="text-center">
//         <button className="btn btn-primary" onClick={doAction}>
//           Click me!
//         </button>
//       </div>
//     </div>
//   )
// }


/* 23番目 */
// 子コンポーネントからAppのステートに干渉して変更する

// function AlertMessage(props) {
//   const data = ['Hello', 'Welcome', 'Good-bye?']

//   const actionAlert = () => {
//     const re = data[Math.floor(Math.random() * data.length)]
//     props.setAlert('message: "' + re + '".')
//   }

//   return (
//     <div className="alert alert-primary h5 text-primary">
//       <h5>{ props.alert }</h5>
//       <button onClick={actionAlert} className="btn btn-primary">
//         Click me!
//       </button>
//     </div>
//   )
// }

// function CardMessage(props) {
//   const [count, setCount] = useState(0)

//   const actionCard = () => {
//     setCount(count + 1)
//     props.setCard('card counter:' + count + 'count.')
//   }

//   return (
//     <div className="card p-3 border-dark text-center">
//       <h5>{props.card}</h5>
//       <button className="btn btn-secondary" onClick={actionCard}>
//         Click me!
//       </button>
//     </div>
//   )
// }

// function App() {
//   const [alert, setAlert] = useState('This is alert message!')
//   const [card, setCard] = useState('This is card message!')

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage alert={alert} setAlert={setAlert} />
//         <CardMessage card={card} setCard={setCard} />
//         <hr />
//         <div className="text-right">
//           <p>{ alert }</p>
//           <p>{ card }</p>
//         </div>
//       </div>
//     </div>
//   )
// }


/* 24番目 */
// 関数コンポーネントでフォーム活用する

// function AlertMessage(props) {
//   const data = props.data

//   //オブジェクトをJSON形式のテキストに変換する
//   const msg = JSON.stringify( data )

//   return (
//     <div className="alert alert-primary h5 text-primary">
//       <h5>{ msg }</h5>
//       <hr />
//       <table className="table h6">
//         <tbody>
//           <tr>
//             <th>Name</th>
//             <td>{ data.name }</td>
//           </tr>
//           <tr>
//             <th>Mail</th>
//             <td>{ data.mail }</td>
//           </tr>
//           <tr>
//             <th>Age</th>
//             <td>{ data.age }</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }

// function App() {
//   const [name, setName] = useState('')
//   const [mail, setMail] = useState('')
//   const [age, setAge] = useState(0)
//   const [form, setForm] = useState({
//     name: 'no name', mail: 'no mail', age: 0
//   })

//   const doChangeName = (e) => {
//     setName(e.target.value)
//   }

//   const doChangeMail = (e) => {
//     setMail(e.target.value)
//   }

//   const doChangeAge = (e) => {
//     setAge(e.target.value)
//   }

//   const doSubmit = (e) => {
//     setForm({
//       name: name, mail: mail, age: age
//     })

//     e.preventDefault()
//   }

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage data={form} setData={setForm} />
//         <form onSubmit={ doSubmit }>
//           <div className="form-group">
//             <label>Name:</label>
//             <input type="text" className="form-control"
//             onChange={ doChangeName } />
//           </div>
//           <div className="form-group">
//             <label>Mail:</label>
//             <input type="text" className="form-control"
//             onChange={ doChangeMail } />
//           </div>
//           <div className="form-group">
//             <label>Age:</label>
//             <input type="text" className="form-control"
//             onChange={ doChangeAge } />
//           </div>
//           <input type="submit" className="btn btn-primary" 
//           value="Click" />
//         </form>
//       </div>
//     </div>
//   )
// }


/* 25番目 */
// 副作用フック
//　useEffect()

// function AlertMessage(props) {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//       <h5>{ props.msg }</h5>
//     </div>
//   )
// }

// function App() {
//   const [val, setVal] = useState(0)
//   const [msg, setMsg] = useState('set a number...')

//   const doChange = (event) => {
//     setVal(event.target.value)
//   }

//   useEffect(() => {
//     let total = 0
//     for(var i = 0; i <= val; i++) {
//       total += i
//     }
//     setMsg('total:' + total + '.')
//   })

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage msg={ msg } />
//         <div className="form-group">
//           <label>Input: </label>
//           <input type="number" className="form-control" onChange={ doChange } />
//         </div>
//       </div>
//     </div>
//   )
// }


/* 26番目 */
//　副作用フックを複数使う

// function AlertMessage (props) {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//       <h5>{ props.msg }</h5>
//     </div>
//   )
// }

// function App() {
//   const [val, setVal] = useState(1000)
//   const [tax1, setTax1] = useState(0)
//   const [tax2, setTax2] = useState(0)
//   const [msg, setMsg] = useState(<p>set a price...</p>)

//   const doChange = (event) => {
//     setVal(event.target.value)
//   }

//   const doAction = () => {
//     var res = <div>
//       <p>軽減税率（8%） { tax1 }</p>
//       <p>通常税率（10%）　{ tax2 }</p>
//     </div>
//     setMsg(res)
//   }

//   useEffect(() => {
//     setTax1(Math.floor(val * 1.08))
//   })

//   useEffect(() => {
//     setTax2(Math.floor(val * 1.1))
//   })

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage msg={ msg } />
//         <div className="form-group">
//           <label>Input: </label>
//           <input type="number" className="form-control" onChange={ doChange } />
//         </div>
//         <button className="btn btn-primary" onClick={ doAction }>Click</button>
//       </div>
//     </div>
//   )
// }


/* 27番目 */
//　副作用フックのスキップ
//　ボタンの廃止・フォームに入力したら即計算

// function AlertMessage(props) {
//   return (
//     <div className="alert alert-primary h5 text-primary">
//       <h5>{ props.msg }</h5>
//     </div>
//   )
// }

// function App() {
//   const [val, setVal] = useState(1000)
//   const [tax1, setTax1] = useState(0)
//   const [tax2, setTax2] = useState(0)
//   const [msg, setMsg] = useState(<p>set a price</p>)
  
//   const doChange = (event) => {
//     setVal(event.target.value)
//   }

//   //　新たに追加したフック

//   useEffect(() => {
//     var res = <div>
//       <p>軽減税率（8%）　{ tax1 }</p>
//       <p>通常税率（10%）　{ tax2 }</p>
//     </div>
//     setMsg(res)

//     // useEffect内にJSXがあると永遠と中のJSXを呼び出し続けるエラーが発生する
//     //　第2引数に配列を入れてやると、それらが変更された時のみ
//     //　再びuseEffectが呼び出される
//   }, [tax1, tax2])

//   useEffect(() => {
//     setTax1(Math.floor(val * 1.08))
//   })

//   useEffect(() => {
//     setTax2(Math.floor(val * 1.1))
//   })

//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage msg={ msg }/>
//         <div className="form-group">
//           <label>Input: </label>
//           <input type="number" className="form-control" onChange={ doChange } />
//         </div>
//       </div>
//     </div>
//   )
// }


/* 28番目 */
//　独自フックの作り方
//　クラスコンポーネントは普通のクラスを継承という形で使える
//　関数コンポーネントでも似たことをする

// function useCounter() {
//   const [num, setNum] = useState(0)

//   const count = () => {
//     setNum(num + 1)
//   }

//   return [num, count]
// }

// function AlertMessage(props) {

//   //useCounter()での戻り値が配列内に入る
//   const [counter, plus] = useCounter()

//   return (
//     <div className="alert alert-primary h5 text-center">
//       <h4>count: { counter }</h4>
//       <button className="btn btn-primary" onClick={ plus }>
//         count
//       </button>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <h1 className="bg-primary text-white display4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage />
//       </div>
//     </div>
//   )
// }


/* 29番目 */
//　より複雑な独自フック
//　独自フックの戻り値を増やす

// function useTax(t1, t2) {
//   const [price, setPrice] = useState(1000)
//   const [tax1] = useState(t1)
//   const [tax2] = useState(t2)

//   const tax = () => {
//     return Math.floor(price * (1.0 + tax1 / 100))
//   }

//   const reduced = () => {
//     return Math.floor(price * (1.0 + tax2 / 100))
//   }

//   return [price, tax, reduced, setPrice]
// }

// function AlertMessage(props) {
//   const [price, tax, reduced, setPrice] = useTax(10, 8)

//   const doChange = (e) => {
//     var p = e.target.value
//     setPrice(p)
//   }

//   return (
//     <div className="alert alert-primary h5">
//       <p className="h5">通常税率：　{ tax() }</p>
//       <p className="h5">軽減税率：　{ reduced() }</p>
//       <div className="form-group">
//         <label className="form-group-label">
//           Price: 
//         </label>
//         <input type="number" className="form-control" onChange={ doChange } value={ price } />
//       </div>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <AlertMessage />
//       </div>
//     </div>
//   )
// }


/*　30番目　*/
//　独自フックの中にあった計算用の関数自体をフックにする

// //　数値を計算したメッセージを返す独自フック
// function useCalc(num=0, func = (a)=>{return a}) {
//   const [msg, setMsg] = useState(null)

//   const setValue = (p) => {
//     var res = func(p)
//     setMsg(<p className="h5">* { p }の結果は、{ res }です。</p>)
//   }

//   return [msg, setValue]
// }

// // 合計計算の関数
// var total = (a) => {
//   var re = 0
//   for(var i = 0; i <= a; i++) {
//     re += i
//   }
//   return re
// }

// //　消費税計算の関数
// var tax = (a) => {
//   return Math.floor(a * 1.1)
// }

// //　デフォルトのコンポーネンt
// function PlainMessage(props) {
//   const [msg, setValue] = useCalc()

//   const doChange = (e) => {
//     setValue(e.target.value)
//   }

//   return (
//     <div className="p-3 h5">
//       <h5>{ msg }</h5>
//       <input type="number" onChange={ doChange } className="form-control" />
//     </div>
//   )
// }

// //　合計計算のコンポーネント
// function AlertMessage(props) {
//   const [msg, setValue] = useCalc(0, total)

//   const doChange = (e) => {
//     setValue(e.target.value)
//   }

//   return (
//     <div className="alert alert-primary h5 text-primary">
//       <h5>{ msg }</h5>
//       <input type="number" onChange={ doChange }
//       min="0" max="10000" className="form-control" />
//     </div>
//   )
// }

// //　消費税計算コンポーネント
// function CardMessage(props) {
//   const [msg, setValue] = useCalc(0, tax)

//   const doChange = (e) => {
//     setValue(e.target.value)
//   }

//   return (
//     <div className="card p-3 h5 border-primary">
//       <h5>{ msg }</h5>
//       <input type="range" min="0" max="10000" step="100"
//       className="form-control" onChange={ doChange } />
//     </div>
//   )
// }

// //　ベースコンポーネント
// function App() {
//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">Hooks sample</h4>
//         <PlainMessage />
//         <AlertMessage />
//         <CardMessage />
//       </div>
//     </div>
//   )
// }


/* 31番目 */
//　ローカルストレージに保管するフックを作る
//　Persist.jsというファイルを作って記入する

// import usePersist from './Persist'

// function AlertMessage(props) {
//   const [name, setName] = useState('')
//   const [mail, setMail] = useState('')
//   const [age, setAge] = useState(0)
//   const [mydata, setMydata] = usePersist('mydata', null)

//   const onChangeName = (e) => {
//     setName(e.target.value)
//   }
//   const onChangeMail = (e) => {
//     setMail(e.target.value)
//   }
//   const onChangeAge = (e) => {
//     setAge(e.target.value)
//   }

//   const onAction = (e) => {
//     const data = {
//       name: name,
//       mail: mail,
//       age: age
//     }

//     setMydata(data)
//   }

//   return (
//     <div className="alert alert-primary">
//       <h5 className="mb-4">{JSON.stringify(mydata)}</h5>
//       <div className="form-group">
//         <label className="form-group-label h6">Name</label>
//         <input type="text" onChange={ onChangeName } className="form-control" />
//       </div>
//       <div className="form-group">
//         <label className="form-group-label h6">Mail</label>
//         <input type="text" onChange={ onChangeMail } className="form-control" />
//       </div>
//       <div className="form-group">
//         <label className="form-group-label h6">Age</label>
//         <input type="text" onChange={ onChangeAge } className="form-control" />
//       </div>
//       <button className="btn btn-primary" onClick={ onAction }>
//         Save it!
//       </button>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <h1 className="bg-primary text-white display-4">React</h1>
//       <div className="container">
//         <h4 className="my-3">
//           Hooks sample
//         </h4>
//         <AlertMessage />
//       </div>
//     </div>
//   )
// }


/* 32番目 */
//　ローカルストレージを使ってメモアプリの作成

import MemoPage from './memo/MemoPage'

function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Memo.</h4>
        <MemoPage />
      </div>
    </div>
  )
}
export default App;