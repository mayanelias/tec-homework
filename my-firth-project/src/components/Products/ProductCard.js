import React from "react";
class ProductCard extends React.Component {
  render() {
    return (
<div>
<h1>{this.props.product.name}</h1>
<img src ={this.props.product.img}/>
</div>
);
}
}
export default ProductCard;

