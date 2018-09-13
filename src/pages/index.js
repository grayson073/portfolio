import React, { PureComponent } from 'react';
import nyc001 from '../images/nyc001.jpg';
import nyc002 from '../images/nyc002.jpg';
import nyc003 from '../images/nyc003.jpg';
import styles from '../scss/index.scss';

export default class index extends PureComponent {

  render() {
    return (
      <main className={styles}>
        <a name="about">
          <section className="topSection">
            <img alt="View of New York City from hotel window" src={nyc001}/>
            <h1>Kevin Grayson</h1>
            <h2>Full Stack Developer</h2>
          </section>
        </a>

        <section className="middleSection">
          <img alt="View of New York City from hotel window" src={nyc002}/>
          <ul>
            <li>
                    theStack
              <ul>
                <li>
                            MongoDB
                </li>
                <li>
                            Express
                </li>
                <li>
                            React ( + Redux )
                </li>
                <li>
                            Node.js
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
                    theRest
              <ul>
                <li>
                            VueJS
                </li>
                <li>
                            Firebase
                </li>
                <li>
                            postgreSQL
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <a name="contact">
          <section className="bottomSection">
            <img alt="View of New York City from hotel window" src={nyc003}/>
            <form>
              <fieldset className="labelsAndInputs">
                <legend>Contact:</legend>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input id="name" type="text"/>
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input id="email" type="text"/>
                </div>
                <div>
                  <label htmlFor="phone">Phone:</label>
                  <input id="phone" type="text"/>
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" cols="50" rows="10"></textarea>
                </div>
                <div>
                  <button>Send</button>
                </div>
              </fieldset>
            </form>
          </section>
        </a>
      </main>
    );
  }
}
