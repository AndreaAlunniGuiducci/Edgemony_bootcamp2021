import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [state, setState] = useState(false); //funzione decostruita

  return (
    <div className="App">
      <header className="App-header">
        {state && 'codice per renderizzare tutto'}
        <button onClick={() => setState(!state)}>Show products</button>
      </header>
    </div>
  );
}

export default App;
