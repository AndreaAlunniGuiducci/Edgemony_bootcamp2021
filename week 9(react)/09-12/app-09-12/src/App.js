import './App.css';
import Card from './components/card';
import Image from './components/image';
import AddVAT from './components/AddVAT';

function App() {
  return (
    <div className="App">
      <Image image="https://res.cloudinary.com/db46klhlo/image/upload/v1639056543/jakob-owens-O_bhy3TnSYU-unsplash.jpg" />
      <Card title="Backpack" content='Whit a concept designed to be easy to understand, RAINS bidge the gap between geography and lifestyle' price='34$' titleColors='Colors' titleSize='Size' size1='S' size2='M' size3='L' btnContent='Add to Cart' />
      <AddVAT price={34} vat={22} />
    </div>
  );
}

export default App;
