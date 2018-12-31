import React, { Component } from 'react';
import NewComponent from './NewComponent';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hope you liked the Quiz</h1>
        </header>
        <NewComponent text={"This is a quiz app for movies and sports :) Enjoy !!!"}/>
      </div>
    );
  }
}

export default Home;
