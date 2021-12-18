import React, { useState, useEffect } from "react";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoasding] = useState(false);
  //   useEffect(() => getPosts(), []);
  const getPosts = () => {
    setIsLoasding(true);
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setIsLoasding(false);
          setPosts(data);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(getPosts, []);
  return (
    <div>
      <h1 className={isLoading ? "loader" : " "}></h1>
      <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Posts;
