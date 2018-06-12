import React from 'react';
import './Button.css';


const NumberButton = param => {
  return (  
  <div className = {param.num}> 
  {param.number}
    </div> 
  );

};

export default NumberButton;
NumberButton.defaultProps ={
    number:'you forgot to put a value in, you idiot',
    num:'default'
};


