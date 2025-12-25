import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
  const [isBurgerOpen, setBurgerOpen] = useState(false);

  const openBurg = () => {
    setBurgerOpen(!isBurgerOpen);
    document.querySelector('html').classList.toggle('ov');
  };

  return (
    <header>
      <div className={`burger-menu ${isBurgerOpen ? 'open' : ''}`}>
        <button onClick={openBurg} className="burger-close">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.121338" y="14.1421" width="20" height="3" rx="1.5" transform="rotate(-45 0.121338 14.1421)" fill="white" />
            <rect x="2.12134" y="0.142136" width="20" height="3" rx="1.5" transform="rotate(45 2.12134 0.142136)" fill="white" />
          </svg>
        </button>
        <div className="burger-nav">
          <a onClick={openBurg} href="/">Features</a>
          <a onClick={openBurg} href="/">Benefits</a>
          <a onClick={openBurg} href="/">Reviews</a>
          <a href="/">Telegram</a>
        </div>
        <div className="burger-btns">
          <Link to="/register" className="btn burger-btn">Start trading for free</Link>
          <a href="/auth/" className="btn burger-btn-t">Log In</a>
        </div>
      </div>
      <div className="container">
        <div className="header__inner">
          <a href="/" className="logo">
            <img src="../../../img/Logo.png" alt="Logo" />
            <span>Fynloren</span>
          </a>
          <div className="header__nav">
            <a href="/">Features</a>
            <a href="/">Benefits</a>
            <a href="/">Reviews</a>
            <a href="/">Telegram</a>
          </div>
          <div className="header__r">
            <a className="btn login-btn" href="/auth/">Log In</a>
         <Link to="/register" className="btn reg-btn">Start trading for free</Link>
          </div>
          <button onClick={openBurg} className={`mob burger-btn ${isBurgerOpen ? 'open' : ''}`}>
            <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="3" rx="1.5" fill="white" />
              <rect y="7" width="20" height="3" rx="1.5" fill="white" />
              <rect y="14" width="20" height="3" rx="1.5" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}