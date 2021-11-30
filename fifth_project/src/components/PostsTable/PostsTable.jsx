import React from "react";
import ShowPostsTable from "./ShowPostsTable";
import * as styles from "./Posts.module.css";
class PostsTable extends React.Component {
  state = {
    posts: [],
    postToEdit: { title: "", body: "" },
    inputTitle: "",
    inputBody: "",
  };
  componentDidMount() {
    this.getPosts();
    console.log("mounted");
  }
  getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          posts: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  removePost = (index) => {
    const deletePost = [...this.state.posts];
    deletePost.splice(index, 1);

    this.setState((state) => ({
      posts: deletePost,
    }));
  };
  edit = (obj, i) => {
    this.setState({
      index: i,
      inputBody:obj.body,
      inputTitle:obj.title,
      postToEdit: obj,
    });
  };
  render() {
    const { posts, postToEdit, inputTitle, inputBody } = this.state;
    return (
      <div>
        <div>
          <input
            onChange={(evt) => {
              this.setState({ inputTitle: evt.target.value });
              console.log(evt.target.value);
            }}
            defaultValue={postToEdit.title}
            type="text"
            placeholder="Title"
          />
          <br />
          <br />
          <input
            onChange={(evt) => {
              this.setState({ inputBody: evt.target.value });
              console.log(evt.target.value);
            }}
            defaultValue={postToEdit.body}
            type="text"
            placeholder="Body"
          />
          <br />
          <br />
          <button className={styles.uptade}
            onClick={() => {
                let tempPost = [...posts];
                let index=tempPost.findIndex(post=>post.id===postToEdit.id)
                tempPost[index].title = inputTitle;
                tempPost[index].body = inputBody;
                this.setState({ posts:tempPost });
                console.log(index);
            }}
          >
            Update
          </button>
          <br />
          <br />
          <table>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
            <tbody>
              {this.state.posts.map((post, i) => {
                return (
                  <ShowPostsTable
                    post={post}
                    i={i}
                    edit={this.edit}
                    removePost={this.removePost}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default PostsTable;
