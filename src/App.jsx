import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import styles from './App.module.css';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residences/Residences';

function App() {
  return (
    <div className={styles.App}>
      <div>
        <div className={`${styles['white-gradient']}`} />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
