import React from 'react';
import './index.css';
import Board from './Board';
  
export default class GameV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      currentGame: Array(9).fill(null),
      xIsNext: true,
      rootSquareSchema: null,
    }
  }

  onTurnEnd(params) {
    const history = this.state.history.slice();
    history.push(params);
    this.setState({
      history: history,
      currentGame: params
    })
  }

  setNewSquareSchema(square) {
    this.setState({currentGame: square})
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            xIsNext={this.state.xIsNext}
            squares={this.state.rootSquareSchema} 
            currentGame={this.state.currentGame} 
            onTurnEnd={(params) => this.onTurnEnd(params)}  
          />
        </div>
        <div className="game-info">
          {
            this.state.history.map(
              (square, cur) => {
                return (
                  <div onClick={() => this.setNewSquareSchema(square)}>
                    {cur > 0 &&  <button>
                      {cur === 1 ? 'First attempt'   : `Move ${cur-1}`}
                    </button>}
                  </div>
                )
                  
              }
            )
          }
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

