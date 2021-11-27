import React from "react";
import CarProduct from "./CarProduct";
class Car extends React.Component {
  state = {
    cars: [
      {
        name: "kia",
        img: "https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521__340.jpg",
      },
      {
        name: "mazda",
        img: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930__340.jpg",
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.cars.map((car, i) => (
          <CarProduct car={car} />
        ))}
      </div>
    );
  }
}
export default Car;
