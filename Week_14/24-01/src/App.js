import { useState, useCallback } from 'react';
import ListItem from './components/ListItem';
import './App.css';

const immagini = [
  { img: 'https://picsum.photos/200/300' },
  { img: 'https://picsum.photos/202/300' },
  { img: 'https://picsum.photos/201/300' },
  { img: 'https://picsum.photos/200/301' },
]
function App() {
  // const showName = () => console.log('Ciao nome');
  const showName = useCallback(() => console.log('Ciao nome'));

  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}> aggiungi 1</button>
      <button onClick={showName}> Ciao</button>
      <ListItem data={immagini} />
    </div>
  );
}

export default App;
