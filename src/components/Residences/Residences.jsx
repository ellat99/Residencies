import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from './Residences.module.css';
import data from '../../utils/slider.json';

const Residencies = () => {
  return (
    <section className={styles['r-wrapper']}>
      <div
        className={`${styles.paddings} ${styles.innerWidth} ${styles['r-container']}`}
      >
        <div className={`${styles['r-head']} ${styles.flexColStart}`}>
          <span className={styles.orangeText}>Best Choices</span>
          <span className={styles.primaryText}>Popular Residencies</span>
        </div>
      </div>
    </section>
  );
};

export default Residencies;
