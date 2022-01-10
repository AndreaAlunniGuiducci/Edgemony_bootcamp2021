import './App.css';
import { Card } from './components/Card';
import { useFetch } from 'use-http';

function App() {
  const options = {};
  const { loading, error, data = [] } = useFetch('https://fakestoreapi.com/products', options, [])
  return (
    <div className="App">
      {error && 'Error!'}
      {loading && 'Loading...'}
      {data.map((product, index) => (
        <Card key={index} data={product} />))}
    </div>
  );
}

export default App;
