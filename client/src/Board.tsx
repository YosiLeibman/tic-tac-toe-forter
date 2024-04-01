import { useRef, useState } from 'react'
import './App.css'
import Cell from './components/Cell'
import axios from 'axios'

function Board() {

  const [board, setBoard] = useState<string[]>(Array(9).fill(""))
  const turn = useRef('x')
  const [message, setMessage] = useState("x turn to play")
  const [gameOver, setGameOver] = useState(false)


  const handleClick = async (index: number) => {
    if (gameOver) return

    try {
      const res = await axios.post('http://localhost:749/move', {
        board,
        turn: turn.current,
        move: index
      })

      console.log(res.data)
      turn.current = turn.current === 'x' ? 'o' : 'x'
      setBoard(res.data.board)
      switch (res.data.status) {
        case "ok":
          setMessage(`${turn.current}'s turn to play`)
          break
        case 'win':
          setMessage(`${turn.current} won the game!`)
          break
        case 'tie':
          setMessage(`It's a tie =/`)
          break
        case 'error':
          setMessage(`Occupied territory! ${turn.current}'s turn`)
          break
      }
      if (['tie','win'].includes(res.data.status)) {
        setGameOver(true)
      }
    } catch (err) {
      console.log(err)
    }
    // set the response array to state
    // switch truns
    // update message
  }

  return (<div className='page'>
    <h1 className='msg'>{message}</h1>
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
