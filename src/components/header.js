import React, { PureComponent } from 'react';

export default class Header extends PureComponent {

openNav = () => {
  document.getElementById('sideNav').style.display = 'flex';
};
        
closeNav = () => {
  document.getElementById('sideNav').style.display = 'none';
};

render() {

  return (
    <header>
      <span>
        <a onClick={() => this.openNav()}><i className="fas fa-bars openNavButton"></i></a>
      </span>
      <nav id="sideNav">
        <a href="javascript:void(0)" onClick={() => this.closeNav()}><i className="fas fa-times closeNavButton"></i></a>
        <a href="#about" onClick={() => this.closeNav()}>About</a>
        <a href="/photography.html">Photography</a>
        <a href="/projects.html">Projects</a>
        <a href="#contact" onClick={() => this.closeNav()}>Contact</a>
      </nav>
    </header>
  );
}
}
