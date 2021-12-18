import React from 'react';
import { useState } from 'react';
const Reddit = () => {
const[titles,setTitels]=useState([]);
fetch(`https://www.reddit.com/r/reactjs.json`)
.then(response => response.json())
.then((json) => {
setTitels(json.data.children.map(title=>{
return <li>{title.data.title}</li>
}))
.catch(error => {
console.log(error);
});
});
return (
        <div>
<ul>{titles}</ul>           
        </div>
);
};
export default Reddit;