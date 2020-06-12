import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingPage from './LoadingPage';
import HomePage from './HomePage';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount(){
    this.timer = setTimeout(
      () => this.setState(prevState => ({ loading: false })),
      3000,
    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render(){
    //let Page = this.state.loading? LoadingPage : PokedexPage;

    return (
    <div className="App">
      <HomePage/>
    </div>
  );}
}

export default App;
