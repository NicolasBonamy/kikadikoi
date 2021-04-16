import { useState } from "react";
import "./App.css";
import dailySentences from "./dailySentences.json";

function App() {
  const [number, setNumber] = useState([0]);
  const handleChangeSentence = () => {
    setNumber(Math.floor(Math.random() * dailySentences.length));
  };
  const srcByName = `./Photos/${dailySentences[number].author.charAt(0).toUpperCase() + dailySentences[number].author.substring(1).toLowerCase()}.jpeg`;

  return (
    <div className="App">
      <h1>{dailySentences[number].author}</h1>
      <img src={srcByName} alt='avatar' />
      <h2>« {dailySentences[number].sentence} »</h2>
      <h3>{dailySentences[number].date}</h3>
      <button onClick={handleChangeSentence}>nouvelle phrase</button>
    </div>
  );
}

export default App;
