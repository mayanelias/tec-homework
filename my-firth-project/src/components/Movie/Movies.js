import React from "react";
import Movie from "./Movie";
class Movies extends React.Component {
state={
    movies: [
        {
          name: "big mama 2",
          date: "22.01.2005",
          actor:"martin lorens"
        },
        {
          name: "cuando me enamoro",
          date: "10.09.2010",
         actor:"silvia navarro"
        },
      ],
};
  render() {
    return (
        <div>
          {this.state.movies.map((movie, i) => (
            <Movie movie={movie} />
          ))}
        </div>
      );
    }
  }
export default Movies;