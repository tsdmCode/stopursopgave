import './App.scss';
import { useState, useEffect } from 'react';
import { Button } from './assets/Button/Button';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor(time / 1000) % 60;

  useEffect(() => {
    let timerInterval = null;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setTime((time) => time + 1000);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning]);

  return (
    <>
      <h2>test</h2>
      <div className="clockFace">
        <p>
          {hours.toString().padStart(2, '0') +
            ':' +
            minutes.toString().padStart(2, '0') +
            ':' +
            seconds.toString().padStart(2, '0')}
        </p>
        <Button onClick={() => setIsRunning(true)} text={'Start'} />
        <Button onClick={() => setIsRunning(false)} text={'Stop'} />
        <Button
          onClick={() => {
            console.log('Yes');
            setIsRunning(false);
            setTime(0);
          }}
          text={'Reset'}
        />
      </div>
    </>
  );
}

export default App;
