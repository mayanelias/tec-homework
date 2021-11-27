import React from "react";
import * as styles from "./Movie.module.css";
class Movie extends React.Component {
  render() {
    return (
      <div className={styles.card}>
        <h1>{this.props.movie.name}</h1>
        <h1>{this.props.movie.date}</h1>
        <h1>{this.props.movie.actor}</h1>
      </div>
    );
  }
}
export default Movie;