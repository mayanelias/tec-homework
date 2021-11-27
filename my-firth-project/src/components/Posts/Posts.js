import React from "react";
import GetPosts from "./GetPosts";
class Posts extends React.Component {
state={
posts: []
};
GetPosts=()=>{
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>response.json())
.then(data=>this.setState({posts:data}))
.catch(error=>console.log(error))
}
  render() {
    return (
        <div>
          <button onClick={this.GetPosts}>Get Posts</button>
          <div>
          <p>{this.state.posts.map((post, i) => 
            <GetPosts key={i} posts={post}/>
          )}</p>
        </div>
        </div>
      );
    }
  }
export default Posts;