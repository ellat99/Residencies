import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slide.json';
import h1 from '../../../src/image/r1.png';

const Residencies = () => {
  const styles = {
    rHead: {
      marginBottom: '2rem',
    },
    paddings: {
      padding: '1.5rem',
    },
    innerWidth: {
      width: '100%',
    },
    flexColStart: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginBottom: '20px',
    },
    orangeText: {
      color: 'orange',
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    primaryText: {
      color: '#1f3e72',
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    rCardPrice: {
      fontSize: '1.2rem',
      fontWeight: '600',
    },
    rCardDetail: {
      fontSize: '1.5rem',
    },
    rCardSpan: {
      fontSize: '0.7rem',
      width: '15rem',
    },
  };

  return (
    <section className="r-wrapper" style={styles.innerWidth}>
      <div className="paddings innerWidth r-container" style={styles.paddings}>
        <div className="r-head flexColStart" style={styles.rHead}>
          <span style={styles.orangeText}>Best Choices</span>
          <span style={styles.primaryText}>Popular Residencies</span>
        </div>
        <Swiper>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="r-card"
                style={{ ...styles.rCard, ...styles.paddings }}
              >
                <img src={h1} style={{ maxWidth: '15rem' }} alt="home" />
                <span
                  className="secondaryText r-price"
                  style={styles.rCardPrice}
                >
                  <span style={{ color: 'orange' }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="secondaryText" style={styles.rCardDetail}>
                  {card.detail}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
