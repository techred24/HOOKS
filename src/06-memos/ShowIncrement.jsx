import React from 'react'

// 'increment' is always the same function because it is memorized and is not removed from memory nor created over and over.
// 'increment' is a generator function to javascript
export const ShowIncrement = React.memo(({ increment }) => {
    console.log('It generates agains');
  return (
    <button 
    className='btn btn-primary'
    onClick={() => {
        increment( 5 );
    }}
    >
        Incrementar
    </button>
  )
})
