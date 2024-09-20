import './App.css';
import React, { useState } from 'react';
import Navebar from './Commponents/Navebar';
import Formtext from './Formtext';
import Alert from './Commponents/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const showMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled", "success");
    }
  };

  return (
    <>
      <Navebar 
        tittle="Text_Editor" 
        aboutText='About' 
        homeText='Home' 
        mode={mode} 
        showMode={showMode} 
      />
      <Alert alert={alert} showAlert={showAlert} />
      <Formtext 
        placetext='Write here' 
        heading='This is a text box' 
        mode={mode}   
        showAlert={showAlert}
      />
    </>
  );
}

export default App;
