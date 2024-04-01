import { useState } from 'react'
import './App.css'

function Board() {
  const [board, setBoard] = useState(Array(9).fill("e"))

  return (
    <>
    {board.map(cell => <h1>this is{cell}</h1>)} 
    </>
  )
}

export default Board
