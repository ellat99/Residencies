import Header from './Header/Header';
import Hero from './Hero/Hero';
import styles from './App.module.css';
import Companies from './Companies/Companies';
import Residencies from './Residences/Residences';

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
