import React, { PureComponent } from 'react';
import styles from '../scss/Form.scss';

export default class Form extends PureComponent {

  render() {
    return (
      <div className={styles.form}>
        <form>
          <ul className="form-style-1">
            <li><label>Name</label><input type="text" name="field1" className="field-divided" placeholder="First" />&nbsp;<input type="text" name="field2" className="field-divided" placeholder="Last" /></li>
            <li>
              <label>Email</label>
              <input type="email" name="field3" className="field-long" />
            </li>
            <li>
              <label>Subject</label>
              <select name="field4" className="field-select">
                <option value="Advertise">Advertise</option>
                <option value="Partnership">Partnership</option>
                <option value="General Question">General</option>
              </select>
            </li>
            <li>
              <label>Your Message</label>
              <textarea name="field5" id="field5" className="field-long field-textarea"></textarea>
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
