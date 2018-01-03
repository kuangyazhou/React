import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            isKing:true
        };
        this.handleClick=this.handleClick.bind(this);
    }
    componentDidMount(){
        console.log('组件渲染完毕')
    }
    handleClick(){
        this.setState({
          isKing: !this.state.isKing
        })
    }
    render() {
        console.log('组件正在渲染')
        const level = '最强王者';
        // const isKing=true;
        const title=this.state.isKing?<p>早睡早起</p>:<h2>我们的目标是{level}</h2>
        const wordList=['fuck','the','king'];
        return (
            <div>
            <button onClick={this.handleClick}>点我</button>
            {title}
            {this.state.isKing?<p>我就是王者</p>:''}
            <ul>
                {wordList.map(v=>
                    <li key={v}>{v}</li>
                )}
            </ul>
            <Tank name="程咬金"></Tank>
            </div>
        )
        // return ( <
        //     div >
        //     <
        //     h1 > 我们的目标是 {
        //         level
        //     } <
        //     /h1> <
        //     /
        //     div >
        // )
    }
}

class Tank extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}是一个坦克</h1>
            </div>
        )
    }
}

export default App;