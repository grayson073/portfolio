import React, { PureComponent } from 'react';
import styles from '../scss/Sidebar.scss';

export default class Sidebar extends PureComponent {

handleScroll = (query) => {
  document.querySelector(query).scrollIntoView({ 
    behavior: 'smooth' 
  });
};

render() {

  return (
    <header className={styles.sidebar}>
      <div className="area"></div>
      <nav className="main-menu">
        <ul>
          <li>
            <a href="/">
              <i className="fas fa-home fa-2x"></i>
              <span className="nav-text">
                            Home
              </span>
            </a>
          </li>
          <li onClick={() => (this.handleScroll('.about-section'))} className="has-subnav">
            <a>
              <i className="fas fa-info-circle fa-2x"></i>
              <span className="nav-text">
                            About
              </span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/photography">
              <i className="fas fa-camera-retro fa-2x"></i>
              <span className="nav-text">
                            Photography
              </span>
            </a>      
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fas fa-boxes fa-2x"></i>
              <span className="nav-text">
                            Projects
              </span>
            </a>      
          </li>
          <li className="has-subnav">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/grayson073">
              <i className="fab fa-github fa-2x"></i>
              <span className="nav-text">
                            GitHub
              </span>
            </a>      
          </li>
          <li className="has-subnav">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kevingrayson/">
              <i className="fab fa-linkedin fa-2x"></i>
              <span className="nav-text">
                            LinkedIn
              </span>
            </a>      
          </li>
          <li onClick={() => (this.handleScroll('.contact-section'))} className="has-subnav">
            <a>
              <i className="fas fa-envelope fa-2x"></i>
              <span className="nav-text">
                            Contact
              </span>
            </a>      
          </li>
        </ul>

        <ul className="logout">
          <li onClick={() => (this.handleScroll('.landing-section'))} >
            <a>
              <i className="fas fa-arrow-up fa-2x"></i>
              <span className="nav-text">
                            Top Of Page
              </span>
            </a>
          </li>  
        </ul>
      </nav>
    </header>
  );
}
}
