import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src="/001.png" alt="로고" className="logo" />
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">
              <div className="icon-container">
                <img src="/home1.png" alt="홈 아이콘" className="icon home-icon" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/market-overview">
              <div className="icon-container">
                <img src="/map (2).png" alt="지도 아이콘" className="icon map-icon" />
              </div>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <div className="icon-container">
                <img src="/white.png" alt="문의 아이콘" className="icon contact-icon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
