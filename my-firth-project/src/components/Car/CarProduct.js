import React from "react";
import * as styles from "./Cars.module.css";
class CarProduct extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <h1>{this.props.car.name}</h1>
        <img src={this.props.car.img} />
      </div>
    );
  }
}
export default CarProduct;
