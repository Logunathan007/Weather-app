import React, { useEffect } from 'react'
import './Screen.css'
import response from '../Response'

const Screen = ({inputCity,setInputCity,requestData,setRequestData}) => {
    useEffect(() => {
        const fetchData = async () => {
            setRequestData(await response("Tamil Nadu"));
            console.log(requestData);
        };
        fetchData();
    }, []);
    console.log(requestData);
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
        {
            (requestData?.cod == 404)?

            <div className='Display'>
                <div className='row1'>
                    <h1>{requestData?.message}</h1>
                </div>
            </div>

            :
            
            <div className='Display'>
                <div className='row1'>
                    <h1>{requestData?.name}  {Math.floor(requestData?.main.temp)}&deg;F </h1>
                    <h1>Description : {requestData?.weather[0].description}</h1>
                </div>
                <div className='row2'>
                    <h2>Wind Speed : {requestData?.wind.speed} km/h</h2>
                </div>
            </div>
            
        }

        
    </div>
  )
}

export default Screen