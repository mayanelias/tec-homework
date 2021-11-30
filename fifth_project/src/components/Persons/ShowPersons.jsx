import React from "react";
import * as styles from "./Persons.module.css"
class ShowPersons extends React.Component {
  render() {
    return (
      <div className={styles.persons}>
          <ul>
        <li>{this.props.persons.firstName}</li>
        <li>{this.props.persons.lastName}</li>
        </ul>
      </div>
    );
  }
}
export default ShowPersons;