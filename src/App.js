import './App.css';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.png';
import './components/Button'
import Button from './components/Button';

function App() {

  const clickHandling = () => {
    console.log('Click');
  }

  const restartButton = () => {
    console.log('Reiniciar')
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
      <div className='contenedor-principal'>
        <Button
          text='Click'
          isClickButton={true}
          clickHandling={clickHandling}
        />
        <Button
        text='Restart'
        isClickButton={false}
        clickHandling={restartButton}
        
        />
      </div>
    </div>
  );
}

export default App;
