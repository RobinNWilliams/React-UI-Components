import React from 'react';
import './Button.css';


const NumberButton = param => {
  return (  <div className = "num"> 
  {param.number}
    </div> 
  );

};

export default NumberButton;


