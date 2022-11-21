import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);

    const fruit1 = 'mangga';
    const fruit2 = 'jeruk';
    const fruit3 = 'apel';
  }
  render(){
    // MAP
    const fruits = ['mangga','jeruk','apel'];
    const fruit = fruits.map( (f,index) => <li key ={index}>{f}</li> )

    // FILTER
    const numbers= [ 1,3,5,8,10,7,9,2];
    const number = numbers.filter( (n) => n > 5 );
    const num = number.map( ( n,index) => <li key ={index}> {n} </li>)

    const total = numbers.reduce( ( value,acc) => value + acc);
    console.log(total);

    return(
      <div>
        <h1>list and keys</h1>
        <ul>
          {fruit}
          {num}
        </ul>
      </div>
    )
  }
}

export default App;
