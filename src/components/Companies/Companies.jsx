import React from 'react';
import styles from './Companies.module.css';

import firstImage from '../../../src/image/prologis.png';
import tower from '../../../src/image/tower.png';
import equinix from '../../../src/image/equinix.png';
import realty from '../../../src/image/realty.png';

const Companies = () => {
  return (
    <section className={styles['c-wrapper']}>
      <div
        className={`${styles.paddings} ${styles.innerWidth} ${styles.flexCenter} ${styles['c-container']}`}
      >
        <img src={firstImage} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
      </div>
    </section>
  );
};

export default Companies;
