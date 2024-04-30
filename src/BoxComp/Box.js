import React from 'react'
import './Box.css'
import Screen from '../ScreenComp/Screen'

const Box = ({inputCity,setInputCity,requestData,setRequestData}) => {
  
  return (
    <div className='Box'>
      <Screen 
       inputCity = {inputCity}
       setInputCity = {setInputCity}
       requestData = {requestData}
       setRequestData = {setRequestData}
      />
    </div>
  )
}

export default Box