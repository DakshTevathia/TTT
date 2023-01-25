import { useState, useEffect } from 'react'
import { Patterns } from './Pattern';
import './App.css';
import Sqauare from './Sqauare';
const Board = () => {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [playerMarker, setPlayerMarker] = useState('X');
    const [result, setResult] = useState({ winner: 'none', status: 'none' });

    useEffect(() => { checkWin(); checkTie(); }, [board])
    useEffect(() => { if (result.status !== 'none') { alert(`Winner:${result.winner}`); refreshGame() } }, [result])
    const onSquareClicked = (markerPosition) => {
        //set marker position on Board
        setBoard(board.map((val, idx) => {
            if (markerPosition == idx && val == '') { return playerMarker; }
            return val;
        }))
        //change playerMarker
        if (playerMarker == 'X') { setPlayerMarker('O'); }
        else { setPlayerMarker('X'); }
    }
    const checkWin = () => {
        Patterns.forEach((currPattern) => {
            console.log(currPattern[0]);
            let firstPlayer = board[currPattern[0]];
            if (firstPlayer == '') { return; }
            let winningPatternFound = true;
            currPattern.forEach((patternEle) => {
                if (board[patternEle] != firstPlayer) { winningPatternFound = false; }
            })
            if (winningPatternFound) {
                setResult({ winner: firstPlayer, status: 'won' });
            }
        })
    }
    const checkTie = () => {
        let tied = true;
        //check if board is fully filld.. that means no match that means tie
        board.forEach(boardVal => { if (boardVal == '') { tied = false; } })
        if (tied) { setResult({ winner: 'No One', statu: 'tie' }); }
    }
    const refreshGame = () => { setBoard(["", "", "", "", "", "", "", "", ""]); setPlayerMarker('X'); }


    return (

        <div className='board'>
            <div className='row'>
                <div className='item'><Sqauare val={board[0]} onSquareClicked={() => { onSquareClicked(0) }} /></div>
                <div className='item'><Sqauare val={board[1]} onSquareClicked={() => { onSquareClicked(1) }} /></div>
                <div className='item'><Sqauare val={board[2]} onSquareClicked={() => { onSquareClicked(2) }} /></div>
            </div>

            <div className='row'>
                <div className='item'><Sqauare val={board[3]} onSquareClicked={() => { onSquareClicked(3) }} /></div>
                <div className='item'><Sqauare val={board[4]} onSquareClicked={() => { onSquareClicked(4) }} /></div>
                <div className='item'><Sqauare val={board[5]} onSquareClicked={() => { onSquareClicked(5) }} /></div>
            </div>

            <div className='row'>
                <div className='item'><Sqauare val={board[6]} onSquareClicked={() => { onSquareClicked(6) }} /></div>
                <div className='item'><Sqauare val={board[7]} onSquareClicked={() => { onSquareClicked(7) }} /></div>
                <div className='item'><Sqauare val={board[8]} onSquareClicked={() => { onSquareClicked(8) }} /></div>
            </div>

        </div>

    )
}

export default Board
