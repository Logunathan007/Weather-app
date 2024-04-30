
import { useState } from 'react';
import './App.css';
import Box from './BoxComp/Box';

function App() {
  let [inputCity,setInputCity] = useState("");
  let [requestData,setRequestData] = useState(null);

  return (
    <div className="App">
      <Box
        inputCity = {inputCity}
        setInputCity = {setInputCity}
        requestData = {requestData}
        setRequestData = {setRequestData}
      />
    </div>
  );
}

export default App;
