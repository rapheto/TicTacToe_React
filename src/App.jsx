import { useState } from 'react';
import style from './App.module.css';
import { Square } from './Square.jsx';

function App() {
  const [board1, setBoard1] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const [board2, setBoard2] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const handleClickBoard1 = (index) => {
    const newSquares = [...board1];
    if (newSquares[index] !== 'X') {
      newSquares[index] = 'X';
      setBoard1(newSquares);
    }
  };

  const handleClickBoard2 = (index) => {
    const newSquares = [...board2];
    if (newSquares[index] !== 'X') {
      newSquares[index] = 'X';
      setBoard2(newSquares);
    }
  };

  const renderBoard = (board, handleClick) => (
    <div>
      <div className={style.boardRow}>
        <Square value={board[0]} onClick={() => handleClick(0)} />
        <Square value={board[1]} onClick={() => handleClick(1)} />
        <Square value={board[2]} onClick={() => handleClick(2)} />
      </div>
      <div className={style.boardRow}>
        <Square value={board[3]} onClick={() => handleClick(3)} />
        <Square value={board[4]} onClick={() => handleClick(4)} />
        <Square value={board[5]} onClick={() => handleClick(5)} />
      </div>
      <div className={style.boardRow}>
        <Square value={board[6]} onClick={() => handleClick(6)} />
        <Square value={board[7]} onClick={() => handleClick(7)} />
        <Square value={board[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );

  return (
    <div className={style.game}>
      {renderBoard(board1, handleClickBoard1)}

      {renderBoard(board2, handleClickBoard2)}
    </div>
  );
}

export default App;
