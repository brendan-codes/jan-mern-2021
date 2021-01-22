import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';
import io from 'socket.io-client';

function App() {

  const [socket] = useState(() => io(':8008'));
  const [number, setNumber] = useState(0);

  useEffect(() => {

    socket.on("server-sends-number", data => {
      console.log("server-sends-number");
      setNumber(number + data.number);
    });


    return () => socket.disconnect(true);
  }, []);

  const clickHandler = (e) => {
    setNumber(number + 1);
    socket.emit("user-clicked-button", {"message": "hello world!", "number": number + 1});
  }

  return (
    <div className="App">
      <p>{number}</p>
      <p><button onClick={clickHandler}>Click!</button></p>
    </div>
  );
}

export default App;
