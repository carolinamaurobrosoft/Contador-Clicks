import React from 'react';
import '../stylesheet/Button.css'

function Button({ text, isClickButton, clickHandling}){
  return (
    <button
      className={isClickButton ? 'click-button' : 'restart-button'}
      onClick={clickHandling}>
      {text}
    </button>
  );
}

export default Button;