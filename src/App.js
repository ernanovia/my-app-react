import React, {Component } from 'react';
// import logo from './logo.svg';
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom';
import './App.css';
// import List from './List';

// function Biodata(props){
//   return <span> Umurnya {props.age} </span>
// }

// function Greeting(props) {
//   return <h1>Hallo {props.name} - <Biodata age={props.age} /></h1>
// }

// class Timer extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       time : props.state
//     }
//   }

//   //Lifecycle
//   componentDidMount(){
//     this.addInterval = setInterval( () =>this.increase() , 1000)
//   }

//   //
//   componentWillUnmount(){
//     clearInterval(this.addInterval)
//   }

//   increase() {
//     //update state time setiap detik
//     this.setState((state,props) => ({
//       time: parseInt(state.time) + 1
//     }));
//   }

//   render(){
//     return(
//       <div>{this.state.time} Detik</div>
//     );
//   }
// }

// function  Clicker() {
//   function handleClick(e) {
//     alert('berhasil mengeklik')
//     e.preventDefault()
//   }

//   return (
//     <a href="#" onClick={handleClick}> Klik disini</a>
//   )
// }

// class Toggle extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       toggleStatus: true
//     }

//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState(state => ({
//       toggleStatus: !state.toggleStatus
//     }))
//   }

//   render(){
//    return(
//      <button onClick={this.handleClick}>
//         {this.state.toggleStatus ? 'ON' : 'OFF'}
//         <p>Kondisi sekarang {this.state.toggleStatus ? 'menyala' : 'mati'} </p>
//      </button>
//    )
//  }
// }

//routing react router dom 
function Home() {
  return <h2>Halaman Home</h2>
}

function ListView() {
  return (
    <div>
      <h2>Semua User</h2>
        <ul>
          <Link to='user/hilman'>hilman</Link><br/>
          <Link to='user/robert'>Robert</Link>
        </ul>
    </div>
  )
}

function DetailView({match}) {
  return <h2>ini Halaman {match.params.name} </h2>
}

function NoMatch() {
  return <h2>404, Halaman tidak ditemukan</h2>
}
class App extends Component {

  // //inputan 
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     todoItem: '',
  //     items: []
  //   }
  // }
  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   // console.log('terpanggil')
  //   this.setState({
  //     items : [...this.state.items, this.state.todoItem],
  //     todoItem: ''
  //   })
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     todoItem: event.target.value
  //   })
  //   console.log(this.state.todoItem)
  // }

  // render() {
  // return (
  // <div className="App">
  //     {/* <Toggle /> */}
  //     <header className="App-header">
      
  //       <img src={logo} className="App-logo" alt="logo" />

  //       {/* <Timer state="0"/> */}
        
  //     </header>
      
  //       <div>
  //         <form onSubmit={this.handleSubmit}>
  //           <input value={this.state.todoItem} onChange={this.handleChange} />
  //           <button>Add</button>
  //         </form>

  //         <List items={this.state.items} />
  //       </div>
      
      
  //     {/* <Clicker/> */}
  //   </div>

//   constructor(props){
//     super(props)
//       this.state = {
//         items: [],
//         isLoading: true
//       }
//     }

//     componentDidMount() {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(data => this.setState({items: data, isLoading : false }))
//     }

//     render() {
//       const { items, isLoading } = this.state

//       if(isLoading) {
//         return<p>Loading....</p>
//       }

//       return(

//         <div>
//           <ul>
//             { items.map((item, index) =>
//               <li key={index}> {item.name} </li> ) }
//           </ul>
//         </div>
//   );
// }

render() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>User</Link></li>
        </nav>

        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={ListView} />
            <Route path='/user/:name' exact component={DetailView} />
            <Route component={NoMatch} />
          </Switch>
          
        </main>
      </div>
    </BrowserRouter>

  //   //FRAGMENT
  //  <div>
  //    <br/>
  //   <table border="solid">
  //     <tr>
  //       <Column/>
  //     </tr>
  //   </table>
  //  </div> 
  );  
  }
}

// //FRAGMENT
// class Column extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <td>data satu</td>
//         <td>data kedua</td>
//       </React.Fragment>
//     )
//   }
// }
//inputan 


// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hallo semuanya
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

export default App;
