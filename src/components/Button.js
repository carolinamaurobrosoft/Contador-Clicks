import React from 'react';

function Button({ text, isClickButton, clickHandling}){
  return (
    <button
      className={isClickButton ? 'click-button' : 'restart-button'}>
      onClick={clickHandling}
      {text}
    </button>
  )
}

export default Button;