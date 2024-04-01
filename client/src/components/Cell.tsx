import React from 'react'

interface PropType {
    val: string
    index:number
    handleClick: (index:number)=>void
}


const Cell = ({val,index,handleClick}:PropType) =>{
  return (
    <div className='cell' onClick={()=>handleClick(index)}>{val}</div>
  )
}



export default Cell