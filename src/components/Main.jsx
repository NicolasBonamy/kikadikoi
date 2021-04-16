import { useState } from "react";
import dailySentences from "../dailySentences.json";
import styles from './Main.module.css';

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
      <p>« {dailySentences[number].sentence} »</p>
      <div>
        <author>{dailySentences[number].author}</author>
        <date>{dailySentences[number].date}</date>
      </div>
      <img src={srcByName} alt="avatar" />
      <button onClick={handleChangeSentence}>rire & bienveillance</button>
      <footer className={styles.Copyright}>Copyright L&L (Laugh & Loose)</footer>
    </div>
  );
}

export default Main;
