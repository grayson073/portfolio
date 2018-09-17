import React, { PureComponent } from 'react';
import styles from '../scss/Form.scss';


export default class Form extends PureComponent {

  render() {

    return (
      <div className={styles.form}>
        <form action="https://formspree.io/INPUTREALEMAILADDRESS@HERE.COM" method="POST">
          <ul className="form-style-1">
            <li>
              <label>Name</label>
              <input type="text" name="First Name" className="field-divided" placeholder="First"/>&nbsp;
              <input type="text" name="Last Name" className="field-divided" placeholder="Last"/>
            </li>
            <li>
              <label>Email</label>
              <input type="email" name="_replyto" className="field-long"/>
            </li>
            <li>
              <label>Subject</label>
              <select name="Subject" className="field-select">
                <option value="General Message">General Message</option>
                <option value="Job Opportunity">Job Opportunity</option>
              </select>
            </li>
            <li>
              <label>Your Message</label>
              <textarea name="Message" id="field5" className="field-long field-textarea"/>
            </li>
            <li>
              <input type="submit" value="Submit" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
