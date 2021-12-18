import React, { useEffect, useState } from 'react';
const MyComponent = () => {
const [flag,setFlag]=useState(true);
useEffect(()=>{
console.log("use effect is called");
})
    return (
        <div>
<button onClick={()=>setFlag(!flag)}>Toggle</button>            
        </div>
    );
};
export default MyComponent;