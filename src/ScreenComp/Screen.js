import React from 'react'
import './Screen.css'

const Screen = () => {
  return (
    <div className='Screen'>
        <form onSubmit={(event)=>{event.preventDefault()}}>
            <input className = "input" placeholder='Enter a City name' autoFocus/>
            <button className='sbtn'> </button>
        </form>
    </div>
  )
}

export default Screen