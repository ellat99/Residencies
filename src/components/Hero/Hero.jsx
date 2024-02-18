import React from 'react';
import imageHero from '../../../src/image/hero-image.png';
import CountUp from 'react-countup';

import herostyle from './Hero.module.css';

const customSpanStyles = {
  color: '#8c8b8b',
  fontSize: '0.9rem',
};

const premiumProduct = {
  styles: {
    stats: {
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: '20px',
    },
    'stat > :nth-child(1)': {
      fontSize: '2rem',
    },
    'stat > :nth-child(1) > :last-child': {
      color: 'orange',
    },
  },
};
const flexColCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: ' center',
  flexDirection: 'column',
};

const Hero = () => {
  return (
    <section className={herostyle['hero-wrapper']}>
      <div
        className={`${herostyle.paddings} ${herostyle.innerWidth} ${herostyle.flexCenter} ${herostyle['hero-container']}`}
      >
        <div className={herostyle['hero-left']}>
          <div className={herostyle['hero-title']}>
            <div className={herostyle['orange-circle']}></div>
            <h1>
              Discover
              <br /> Most Suitable <br />
              Property
            </h1>
          </div>
          <div className={`${herostyle.flexColStart} ${herostyle['hero-des']}`}>
            <span style={customSpanStyles}>
              Find a variety of properties that suit you very easily. <br />
              Forget all difficulties in finding a residence for you.
            </span>
          </div>
          <div className={`${herostyle.flexCenter} ${herostyle['search-bar']}`}>
            <input type="text" />
            <button className={herostyle['button']}>Search</button>
          </div>
          <div
            style={{ ...premiumProduct.styles.stats, ...flexColCenter }}
            className="flexCenter stats"
          >
            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText ">Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText ">Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText ">Award Winning</span>
            </div>
          </div>
        </div>
        <div className={`${herostyle.flexCenter} ${herostyle['hero-right']}`}>
          <div className={herostyle['image-container']}>
            <img className={herostyle['image']} src={imageHero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
