import './App.css';
import carolina from './images/Carolina.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);

  const clickHandle = () => {
    setNumClicks(numClicks + 1); 
  }

  const restartButton = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='carolina-logo-container'>
        <img 
          className='carolina-logo'
          src={carolina}
          alt='Logo de Carolina'
        />
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button
          text='Click'
          isClickButton={true}
          clickHandling={clickHandle} />
        <Button
          text='Restart'
          isClickButton={false}
          clickHandling={restartButton} />
      </div>
    </div>
  );
}

export default App;
