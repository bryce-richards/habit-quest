import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ModalForm from "./scenes/NewChallenge/components/ModalForm"
import ChallengeHeader from "./scenes/UserChallenge/components/ChallengeHeader/ChallengeHeader"

class App extends Component {
  render() {
    return (
        // <Header/>
        <ChallengeHeader/>,
        <ModalForm/>
    );
  }
}

export default App;