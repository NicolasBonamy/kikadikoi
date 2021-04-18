import styles from "./App.module.css";
import Header from "../src/components/Header";
import Main from "../src/components/Main";

function App() {
  return (
    <div className={styles.MainApp}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
