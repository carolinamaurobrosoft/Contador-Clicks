import './App.css';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.png';
import Button from './components/Button';
import Counter from './components/Counter';


function App() {

  const clickHandle = () => {
    console.log('Click');
  }

  const restartButton = () => {
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='main-container'>
        <Counter numClicks='5' />
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
