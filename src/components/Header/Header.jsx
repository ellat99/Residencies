import React from 'react';
import logo from '../../../src/image/logo.png';
import style from './Header.module.css';

const Header = () => {
  return (
    <section className={style['h-wrapper']}>
      {' '}
      {/* Utilizați clasele definite în modulul CSS */}
      <div
        className={`${style.flexCenter} ${style.paddings} ${style.innerWidth} ${style['h-container']}`}
      >
        {' '}
        {/* Utilizați clasele definite în modulul CSS */}
        <img src={logo} alt="logo" width={100} />
        <div className={`${style.flexCenter} ${style['h-menu']}`}>
          {' '}
          {/* Utilizați clasele definite în modulul CSS */}
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className={style.button}>
            {' '}
            {/* Utilizați clasa definită în modulul CSS */}{' '}
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
