import React from "react";
import axios from "axios"
class GetPostById extends React.Component{
state={post:[]};
getPostById=()=>{
const {post}=this.state
const url=`https://jsonplaceholder.typicode.com/posts/${this.props.id}`;
axios.get(url).then(res=>{
this.setStateׂׂ({post:res.data})
}).catch(err=>console.error(err))
}
componentDidMount(){
this.getPostById();
}
componentDidUpdate(prevProps,prevState,snapshot){
if(prevProps.id!==this.props.id){
this.getPostById();
}
}
render(){
const {post}=this.state
return(
<div>
<p>
Id:{post.id} UserId:{post.userId} Title:{post.title} 
</p>
</div>
)
}
}
export default GetPostById
