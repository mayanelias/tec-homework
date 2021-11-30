import React from "react";
class ShowPosts extends React.Component {
  state={posts:[]}
  componentDidMount() {
    this.getPosts();
    console.log("mounted");
  }
  componentDidUpdate(prevState) {
    if (prevState.id !== this.props.id) {
      this.getPosts();
    }
  }
  getPosts= () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
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
  render() {
    return (
      <div>
        <p> 
        id:     {this.state.posts.id}
        userId: {this.state.posts.userId}
        title:  {this.state.posts.title}
        </p>
      </div>
    )
  }
}
export default ShowPosts;