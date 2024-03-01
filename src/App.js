import React, { useState } from 'react';
import './App.css';
import Envelop from './Components/Envelop';
import { motion } from 'framer-motion';

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
        <motion.div
         initial={{ x: "100px" }}
  animate={{ x: "0" }}
  loop={true}
        >
        <Envelop text = {text} />
        </motion.div>
      ))
    }
    </div>
    </div>
  );
}

export default App;
