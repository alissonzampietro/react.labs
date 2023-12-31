import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: props.squares ? props.squares :  Array(9).fill(null),
            xIsNext: true,
            readOnly: !!props.readOnly,
        }
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
        this.props.onTurnEnd(currentGame);
        this.setState({squares: currentGame, xIsNext: !this.state.xIsNext})
    }
    
    renderSquare(i) {
        return <Square value={this.props.currentGame[i]} onClick={() => this.handleClick(i)}/>;
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