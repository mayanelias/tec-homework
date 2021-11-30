import React from "react";
import * as styles from "./Posts.module.css";
class ShowPostsTable extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.post.userId}</td>
        <td>{this.props.post.id}</td>
        <td>{this.props.post.title}</td>
        <td>{this.props.post.body}</td>
        <td>
          <button onClick={this.props.removePost}>
            <img
              style={{ width: "100px", height: "100px"}}
              src="https://media.istockphoto.com/photos/recycle-bin-icon-picture-id468102462?b=1&k=20&m=468102462&s=170667a&w=0&h=m3kt_BK9fq6uyEXrEG2DOzL9MJaAebsTR6VteP8ILcs="
            />
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              this.props.edit(this.props.post, this.props.i);
            }}
          >
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://cdn.pixabay.com/photo/2018/10/03/23/04/write-3722611__340.png"
            />
          </button>
        </td>
      </tr>
    );
  }
}
export default ShowPostsTable;
