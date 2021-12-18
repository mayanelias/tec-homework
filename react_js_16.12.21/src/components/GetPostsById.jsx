import React, { useState, useEffect } from "react";
const GetPostsById = ({ id }) => {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(getPosts, [id]);
  return (
    <div>
      <p>
        Id:{posts.id} UserId:{posts.userId} Title:{posts.title}
      </p>
    </div>
  );
};
export default GetPostsById;
