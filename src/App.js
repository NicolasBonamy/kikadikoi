import './App.css';
import dailySentences from './dailySentences.json';

function App() {
  const nb = Math.floor(Math.random()*dailySentences.length);
  return (
    <div className="App">
      {nb}
      <h1>{dailySentences[nb].author}</h1>
      <h2>« {dailySentences[nb].sentence} »</h2>
      <h3>{dailySentences[nb].date}</h3>
    </div>
  );
}

export default App;
