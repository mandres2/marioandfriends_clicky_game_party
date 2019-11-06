// import React Dependencies and application files.
import React, { Component } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import cards from './cards.json';

class App extends Component {
// Setting this state.cards to the cards json array
state = {
  cards,
  score: 0,
  highscore: 0
};


  // Establish the gameOver function.
  gameOver = () => {
    if(this.state.score > this.state.highscore) {
      this.setState({highscore : this.state.highscore},
        function() {
          console.log(this.state.highscore);
        });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over... \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }


  // Set-up function for clickCount
  clickCount = id =>  {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0) {
          cards[i].count = cards[i].count+1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }


  // Map over this.state.cards and render a cardCard component for each card object.

  render () {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore =
        {this.state.highscore}>Mario and Friends Clicky Game Party</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
            />
        ))}
      </Wrapper>
    );
  }
} // Closing curly bracket for class App extends Component


// Export App.
export default App;
