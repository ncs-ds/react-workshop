import { Button } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import ColourNarrative from './ColourNarrative';

function App() {
  const [myColour, setMyColour] = useState('red')
  return (
    <>
      <Button variant="outlined" onClick={() => setMyColour('red')}>Red</Button>
      <Button variant="contained" onClick={() => setMyColour('blue')}>Blue</Button>

      <div className={`myBox ${myColour}`}></div>

      <ColourNarrative colour={myColour}></ColourNarrative>
    </>
  );
}

export default App;