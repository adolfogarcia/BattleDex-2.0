import React from 'react';
import '../App.css';
import LoadingPage from './LoadingPage';

class App extends React.Component {
  constructor(){
    super();
  }


  
  render(){
    return (
    <div className="App">
      <LoadingPage/>
    </div>
  );}
}

export default App;
