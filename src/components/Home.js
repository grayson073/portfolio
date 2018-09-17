import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import nyc001 from '../images/nyc001.jpg';
import nyc002 from '../images/nyc002.jpg';
import nyc003 from '../images/nyc003.jpg';
import Form from './Form';
export default class Home extends PureComponent {

  static propTypes = {
    biography: PropTypes.string,
  };

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
          <p>For the better part of the last decade {'I\'ve'} been fortunate to grow into roles that were responsible for the overall financial and customer success of $20M-$100M+ assets in four different states. {'I\'ve'} since taken those skills and experiences and decided to pair them with my love of software development. Instead of the business side of things, {'I\'ve'} found that I prefer to be part of the hands-on design.</p>
          <p>So now {'I\'m'} a full stack developer who works with Javascript, React/Redux, Vue, and a handful of other modern tools to get where I want to go. I love travel, food, snowboarding, animals, motorcycles, photography, technology, video games, and the outdoors. If {'you\'re'} interested in any of that, well, {'we\'re'} off to a good start {'don\'t'} you think?</p>
          <p>How can we help each other?</p>
          <p>TL;DR: I left my “successful career” in business to pursue a love of problem-solving with technology. I enjoy working with those that hope to do the same while having some fun along the way. Sound a bit like your shop? {'Let\'s'} talk.</p>
        </section>

        <section className="contact-section">
          <img alt="View of New York City from hotel window" src={nyc003}/>
          <Form/>
        </section>
      </main>
    );
  }
}