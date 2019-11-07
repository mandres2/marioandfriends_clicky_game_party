// import React Dependencies and application files.
import React, { Component } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import cards from './cards.json';
import './App.css';

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
      this.setState({highscore: this.state.score}, function() {
          console.log(this.state.highscore);
        });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over (╥_╥) \nscore: ${this.state.score}`);
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
          // This line of code is used to randomize the cards once the user clicks on one.
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
        <Header score={this.state.score} highscore={this.state.highscore}><img class='headerTitle' src={'https://fontmeme.com/permalink/191107/b3f40eb52d1ae848ed93ed4da5f14c18.png'} /></Header>
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
