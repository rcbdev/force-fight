import React, { Component } from 'react';
import { HeroesList, VillainsList, ScoreContainer } from './containers';

class App extends Component {
  render() {
    return (
      <div>
        <ScoreContainer />
        <HeroesList />
        <VillainsList />
      </div>
    );
  }
}

export default App;
