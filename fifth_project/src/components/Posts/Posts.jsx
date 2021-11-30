import React from "react";
import ShowPosts from "./ShowPosts";
class Posts extends React.Component {
  defaultNumber = 1;
  state = { posts: [], id: this.defaultNumber };
  render() {
    return (
      <div>
        <div>
          <input
            type="number"
            defaultNumber={this.defaultNumber}
            onChange={(evt) => this.setState({ id: evt.target.value })}
          />
              <div>
                <ShowPosts id={this.state.id}/>
              </div>
        </div>
      </div>
            );
    
  }
}
export default Posts;
