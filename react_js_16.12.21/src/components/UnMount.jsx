import React from 'react';
import { useEffect } from 'react';
const UnMount = () => {
useEffect(() =>()=>
console.log("mounted"),
[]
);
return (
<div>
    <h1>Mayan Elias</h1>
</div>
    );
};
export default UnMount;