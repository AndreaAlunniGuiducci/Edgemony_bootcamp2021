
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="App-head">
          <img className="App-img" src='https://suonalancorasam.files.wordpress.com/2014/06/repubblica-it.jpg?w=748'></img>
          <p className="App-Name">Paolino Paperino</p>
          <h2 className="App-Subtitle">Descrizione</h2>
          <p className="App-Description">lorem ipsum dolor sit amet, consectetur</p>
        </div>
        <div className="App-center">
          <div className="App-experience">
            <h2 className="App-Subtitle">Esperienze Lavorative</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ULorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="App-Lenguage">
            <h2 className="App-Subtitle">Lingue</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ULorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="App-Hobby">
            <h2 className="App-Subtitle">Hobby</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. ULorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="App-Contacts">
          <h2 className="App-Subtitle">Contattami</h2>
          <label htmlFor='object'>Oggetto</label>
          <input type="text" name="object" id="object"></input>
          <label htmlFor='message'>Messaggio</label>
          <textarea name="message" id="message" rows="10"></textarea>
          Paolino Paperino E-mail: <a href="mailto:Paolino.Paperino@papersera.com">Paolino.Paperino@papersera.com</a>
        </div>
      </div>
    </div>
  );
}

export default App;
