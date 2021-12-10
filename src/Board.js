import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  return (
      <div className="board-row">
        {
          props.squares.map((square, squareId) =>
            <Square key={squareId} value={square} onClick={() => props.onClick(squareId)} />
          )
        }
      </div>
  );
}

export default Board;
