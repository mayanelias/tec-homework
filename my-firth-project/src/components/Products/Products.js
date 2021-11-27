import React from "react";
import ProductCard from "./ProductCard";
class Products extends React.Component {
  state = {
    products: [
      {
        name: "mayan",
        img: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg",
      },
      {
        name: "mayan",
        img: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg",
      },
    ],
  };
  render() {
    return (
      <div>
{this.state.products.map((product,i)=>
<ProductCard product={product}/>
)}
</div>
);
}
}
export default Products;
