import React, { useState } from 'react';

const TicTacToe = (props) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        if (board[index] || winner) {
            // If the square is already filled or there's a winner, do nothing
            return;
        }

        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : '0';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => (
        <p
            className='text-5xl mx-1 h-20 w-28 text-white text-center cursor-pointer bg-red-600'
            onClick={() => handleClick(index)}
        >
            {board[index]}
        </p>
    );

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    const getStatus = () => {
        if (winner) {
            return `Winner: ${winner}`;
        } else {
            return `Next player: ${isXNext ? 'X' : '0'}`;
        }
    };

    return (
        <div>
            <h1 className='text-2xl bg-green-500 text-center mt-10'>
                Project{props.number}  Tic Tac Toe Game
            </h1>
            <div className='board mx-auto justify-center text-center'>
                <div className='status text-xl text-center font-bold'>{getStatus()}</div>
             
                <div className='board-row  flex my-3 justify-center text-center'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board-row  flex my-3 justify-center text-center'>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row  flex my-3 justify-center text-center'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            {/* <div className='reset-button'> */}
            <button className="text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={resetGame}>Reset Game</button>
            </div>
        // </div>
    );
};

// Function to calculate the winner
const calculateWinner = (squares) => {
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
};

export default TicTacToe;
