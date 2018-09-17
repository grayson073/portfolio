import React, { PureComponent } from 'react';
import nyc001 from '../images/nyc001.jpg';
import nyc002 from '../images/nyc002.jpg';
import nyc003 from '../images/nyc003.jpg';
import Form from './Form';
export default class Home extends PureComponent {

  render() {

    return (
      <main>
        <section className="landing-section">
          <img alt="View of New York City from hotel window" src={nyc001}/>
          <h1>Kevin Grayson</h1>
          <h2>Full Stack Developer</h2>
        </section>

        <section className="about-section">
          <img alt="View of New York City from hotel window" src={nyc002}/>
        </section>

        <section className="contact-section">
          <img alt="View of New York City from hotel window" src={nyc003}/>
          <Form/>
        </section>
      </main>
    );
  }
}
