import React from "react";
class GetPosts extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.posts.title}</h1>
        <h1>{this.props.posts.id}</h1>
        <h1>{this.props.posts.body}</h1>
      </div>
    );
  }
}
export default GetPosts;