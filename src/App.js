import React, { useState } from 'react';
import './App.css';
import Page from './page';

function FigmaComponent() {
  const [isButton, setIsButton] = useState(true);
  
  return (
    <div className='container'>
      {isButton ? <p>button component</p> : <p>div component</p>}
      {isButton ? (
        <button onClick={() => setIsButton(!isButton)}>
          <Page />
        </button>
      ) : (
        <div className='container__div' onClick={() => setIsButton(!isButton)}>
          <Page />
        </div>
      )}
    </div>
  );
}

export default FigmaComponent
