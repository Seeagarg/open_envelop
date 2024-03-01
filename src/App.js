import React, { useState } from 'react';
import './App.css';
import Envelop from './Components/Envelop';

function App() {
 
  const arr=["Hello I am Seea","Hello Guys","Congratulations You won","You got 5 Rupee","Another Try","give you another Chance","Hello Guys",,"Hello Guys","Hello I am Seea","Hello Guys","Congratulations You won","You got 5 Rupee","Another Try"]

  return (
    <div className='main'>
    <div className="header">
      This is an Envelop Game. select any envelop
    </div>
    <div className='app'>
    {
      arr.map((text,index)=>(
        <Envelop text = {text} />
      ))
    }
    </div>
    </div>
  );
}

export default App;
