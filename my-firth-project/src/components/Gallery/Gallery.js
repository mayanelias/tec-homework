import React from "react";
import ShowGallery from "./ShowGallery";
import * as styles from "./Images.module.css";
class Gallery extends React.Component {
  state = {
    gallery: [
    //   {
    //     img: "https://cdn.pixabay.com/photo/2020/09/01/06/10/lake-5534341__480.jpg",
    //   },
      {
        img: "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510__340.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956__340.jpg",
      },
    ],
    mainPic:
      "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956__340.jpg",
  };
  changeImage = (src) => this.setState({ mainPic: src });
  render() {
    return (
      <div>
        <div className={styles.card}>
          <img src={this.state.mainPic} />
        </div>
        <div className={styles.images}>
          {this.state.gallery.map((image, i) => {
            return <ShowGallery image={image} changeImage={this.changeImage} />;
          })}
        </div>
      </div>
    );
  }
}
export default Gallery;
