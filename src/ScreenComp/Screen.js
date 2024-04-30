import React from 'react'
import './Screen.css'
import response from '../Response'

const Screen = ({inputCity,setInputCity,requestData,setRequestData}) => {
    
    let img_name = `../pictures/${requestData?.weather[0].icon}.svg`
    console.log(img_name)
  return (
    <div className='Screen'>
        <form onSubmit={(event)=>{event.preventDefault()}}>
            <input 
                className = "input" 
                placeholder='Enter a City name' 
                autoFocus
                onChange={(eve)=>{
                    setInputCity(eve.target.value)
                }}
            />
            <button className='sbtn'
                onClick={async ()=>{
                    setRequestData(await response(inputCity));
                }}
            > 
            </button>
        </form>
        <div className='Display'>
            <div className='row1'>
                <div className='col1'>
                <img
                    src={
                    requestData
                        ? require(`./pictures/${requestData.weather[0].icon}.svg`)
                        : require('./pictures/01d.svg')
                    }
                    alt='sun'
                    
                /> 
                </div>
                <div className='col2'>
                    <div className='cname'>

                    </div>
                    <div className='degree'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Screen