import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Square = (props) => (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
);
  
  class Board extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        squares: props.squares ? props.squares :  Array(9).fill(null),
        xIsNext: true,
        readOnly: !!props.readOnly,
      }
    }

    componentDidUpdate(props) {
      console.log(props);
    }

    handleClick(position) {
      if(this.state.readOnly) {
        return;
      }
      const currentGame = this.state.squares.slice();
      if (calculateWinner(currentGame) || currentGame[position]) {
        return;
      }
      currentGame[position] = this.state.xIsNext ? 'X' : 'O';
      this.props.onTurn(currentGame);
      this.setState({squares: currentGame, xIsNext: !this.state.xIsNext})
    }

    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status = '';

      if(!this.state.readOnly) {
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }
      }
  
      return (
        <div className="board">
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        xIsNext: true,
        rootSquareSchema: null,
      }
      this.onTurn.bind(this);
    }

    onTurn(params) {
      const history = this.state.history.slice();
      history.push(params);
      this.setState({
        history: history
      })
    }

    setNewSquareSchema(square) {
      this.setState({rootSquareSchema: square})
    }

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board 
              xIsNext={this.state.xIsNext}
              squares={this.state.rootSquareSchema} 
              onTurn={(params) => this.onTurn(params)}
            />
          </div>
          <div className="game-info">
            {
              this.state.history.map(
                (square) => {
                  return (
                    <div onClick={() => this.setNewSquareSchema(square)}>
                      <Board 
                        squares={square} 
                        key={square} 
                        readOnly={true} 
                      />
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

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  