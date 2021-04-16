import { useState } from "react";
import dailySentences from "../dailySentences.json";

function Main() {
  const [number, setNumber] = useState([0]);
  const handleChangeSentence = () => {
    setNumber(Math.floor(Math.random() * dailySentences.length));
  };
  const srcByName = `./Photos/${
    dailySentences[number].author.charAt(0).toUpperCase() +
    dailySentences[number].author.substring(1).toLowerCase()
  }.jpeg`;

  return (
    <div>
      <author>{dailySentences[number].author}</author>
      <img src={srcByName} alt="avatar" />
      <p>« {dailySentences[number].sentence} »</p>
      <date>{dailySentences[number].date}</date>
      <button onClick={handleChangeSentence}>rire & bienveillance</button>
    </div>
  );
}

export default Main;
