import { useState } from "react";
import dailySentences from "../dailySentences.json";
import styles from "./Main.module.css";

function Main() {
  const [number, setNumber] = useState([0]);
  const handleChangeSentence = () => {
    setNumber(Math.floor(Math.random() * dailySentences.length));
  };
  const srcByName = `./Photos/${
    dailySentences[number].author.charAt(0).toUpperCase() +
    dailySentences[number].author.substring(1).toLowerCase()
  }.png`;

  return (
    <div className={styles.Main}>
      <div className={styles.Speech}>
        <p className={styles.Sentence}>{dailySentences[number].sentence}</p>
        <div className={styles.Credit}>
          <author>{dailySentences[number].author}</author>
          <date>{dailySentences[number].date}</date>
        </div>
      </div>
      <div className={styles.Triangle}></div>
      <img className={styles.Avatar} src={srcByName} alt="avatar" />
      <button className={styles.LaughButton} onClick={handleChangeSentence}>
        Moquerie & Malveillance
      </button>
      <footer className={styles.Copyright}>
        Copyright L&L (Laugh & Loose)
      </footer>
    </div>
  );
}

export default Main;
