import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingPage from './LoadingPage';
import HomePage from './HomePage';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
});

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
    let Page = this.state.loading? LoadingPage : HomePage;

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Page/>
        </div>
      </ApolloProvider>
  );}
}

export default App;
