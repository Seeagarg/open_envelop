import React, { useState } from 'react'
import './Envelop.css';
import { motion } from "framer-motion";

const Envelop = ({text}) => {
  const [active,setActive] = useState(false);

  return (
    <div>
      <div className="container">
        <div id='Card' className="outer" >
            <div className="envelop" onClick={()=>setActive(!active)}>
            <div className={`card ${active?"active":""}`} >
                <div className="text">
                    {text}
                </div>
            </div>
                <div className="front">

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Envelop
