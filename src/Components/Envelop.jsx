import React, { useState } from "react";
import "./Envelop.css";
import { motion, useDragControls , useAnimation } from "framer-motion";

const Envelop = ({ text }) => {
  const [active, setActive] = useState(false);
  const controls = useDragControls();
  const animationControls = useAnimation();

  const handleOnClick=()=>{
    setActive(!active)
    if (!active) {
      animationControls.start({ y: window.innerHeight ,transition: { delay:1.5, duration:0.8,ease:"easeIn" }  }); // Move to the bottom of the page
    } else {
      animationControls.start({ y: 0 }); 
    }
  }

  return (
    <div>
      <div className="container">
        <motion.div animate={animationControls} id="Card" className="outer">
          <div className="envelop" onClick={handleOnClick}>
            <div className={`card ${active ? "active" : ""}`}>
              <div className="text">{text}</div>
            </div>
            <div className="front"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Envelop;
