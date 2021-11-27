import React from "react";
class ShowGallery extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.image.img}
          onClick={(e) => this.props.changeImage(e.target.src)}
        />
      </div>
    );
  }
}
export default ShowGallery;
