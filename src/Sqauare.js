import React from 'react'
import './App.css';

const Sqauare = ({ val, onSquareClicked }) => {
    return (
        <div className='square' onClick={onSquareClicked}>
            {val}
        </div>
    )
}

export default Sqauare
