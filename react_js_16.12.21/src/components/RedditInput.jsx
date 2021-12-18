import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const RedditInput = ({ url }) => {
  const [titles, setTitels] = useState([]);
  const getTitels = () => {
    fetch(`https://www.reddit.com/r/${url}.json`)
      .then((response) => response.json())
      .then((json) => {
        setTitels(json.data.children);
      })
      .catch((error) => {
        console.log(error);
      });
  };
useEffect(getTitels, [url]);
return(
<div>
{titles.map((title,i) => {
return (
<p key={i}>{title.data.title}</p>
)
})}     
</div>
)
};
export default RedditInput;
