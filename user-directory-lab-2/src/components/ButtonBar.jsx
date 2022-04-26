import React from 'react'

function ButtonBar({incrementCurrent, decrementCurrent}) {

  return (
      <div className='allButtons'>
          <button className='changeBtn' onClick={decrementCurrent}>Previous</button>
          <div className='modifyBtn'>
            <button>Edit</button>
            <button>Delete</button>
            <button>New</button>
          </div>
          <button className='changeBtn' onClick={incrementCurrent}>Next</button>
      </div>
  )
}

export default ButtonBar