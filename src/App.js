import "./reset.css";
import styles from "./App.module.scss";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div className={styles.container}>
      <Stopwatch />
    </div>
  );
}

export default App;
