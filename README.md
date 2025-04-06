TIC TAC TOE

**Este projeto pertence a equipe Quatro Cantos**
##Alunos:
-Alessandra Barbosa
-Raphael Miranda
-Rayane Cavalcanti
-Samuel Araujo

---------------------------------------------

Estrutura do projeto
'''
  projeto/
  ├── src/
  │   ├── Square.jsx 
  │   ├── Square.module.css         
  │   ├── App.jsx  
  │   ├── App.module.css 
  │   └── main.jsx         
  ├── public/
  │   └── index.html        
  └── README.md             
'''
---------------------------------------------
Square.jsx

Começa importanto o estilo que será usado no componente Square

import style from './Square.module.css';

Cria uma função que exporta um botão HTML que raltera de valor quando o usuário clicar nele

  function Square({ value, onClick }) {
    return (
      <button className={style.square} onClick={onClick}>
        {value}
      </button>
    );
  }

---------------------------------------------
App.jsx

Começamos importando uma variável de estado, os estilos css e o componente Square.
import { useState } from 'react';
import style from './App.module.css';
import { Square } from './Square.jsx';


Cria uma array de 9 posições e usa o indice como valor para os quadrados, que serão modificadas com o use state.
const [board1, setBoard1] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
const [board2, setBoard2] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);


Criamos uma função que faz uma cópia do array, verifica se o quadrado clicado já foi marcado e altera o valor.
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


Função que cria um tabuleiro completo, recebendo a lista de 0 a 9 quadrados e a função de clique.
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


Retorna no HTML os dois tabuleiros criados e finaliza o componente
return (
    <div className={style.game}>
      {renderBoard(board1, handleClickBoard1)}

      {renderBoard(board2, handleClickBoard2)}
    </div>
  );
}

export default App;
