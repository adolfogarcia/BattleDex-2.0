import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import HomeSearchBar from './HomeSearchBar';

export default class HomePage extends React.Component {
  constructor(){
    super();
  }
  
  render(){
    return (
        <Jumbotron fluid style={{ height: "40vh", margin: "10px", border: "1px solid black",position: "relative"}}>
            <Container fluid>
                <h1 style={{textAlign:"left", padding: "10px"}}>BattleDex</h1>
            </Container>
            <HomeSearchBar/>
        </Jumbotron>
  );}
}
