import { useState } from 'react'
import './App.css'
import Cell from './components/Cell'

function Board() {

  const [board, setBoard] = useState<string[]>(Array(9).fill("e"))
  const [turn, setTurn] = useState<string>("x")
  const [message, setMessage] = useState<string>("x turn to play")
  const handleClick = async (index) => {
    // go to server
    // set the response array to state
    // switch truns
    // update message
  }

  return (<div className='page'>
      <h1>{message}</h1>
    <div className='board'>
    {board.map((cell, i) => <Cell
        key={`cell-${i}`}
        index={i}
        val={cell}
        handleClick={handleClick}
      />)} 
    </div>
    </div>
  )
}

export default Board
