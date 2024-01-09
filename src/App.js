import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function PrintDeseo(props){
  return(
    <li>{props.wish}</li>
  )
}

class DesireList extends Component{
  render(){
    return(
      <ul>
        {this.props.wishes.map(d => {
          return(
            <PrintDeseo wish={d} />
          );
        })}
      </ul>
    );
  }
}

class Desire extends Component{
  render(){
    return(
      <form onSubmit={this.props.onAddWish}>
        <input type="text" placeholder='Write your wish' name='wish'></input>
      </form>
    );
  }
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      wishes: ["boat","rs5"],
    };
  }

  handleAddWishes(e){
    e.preventDefault();
    var aux = [];
    if (this.state.wishes && this.state.wishes !== "null" && this.state.wishes!== "undefined"){
      aux = this.state.wishes.slice();
    }
    aux.push(e.target.wish.value);
    this.setState({
      wishes:aux
    });
  }

  

  render(){
    return (
      <div className="App">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Wishing List</h2>
        </div>
        <div>
          <p><strong>Add your favourite present</strong></p>
          <DesireList wishes={this.state.wishes} />
          <Desire onAddWish={this.handleAddWishes.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
