import logo from './logo.svg';
import './App.css';
import Persons from './components/Persons/Persons';
import Posts from './components/Posts/Posts';
import React from 'react';
import PostsTable from './components/PostsTable/PostsTable';

class App extends React.Component{
  render(){
    return (
<div>
  <div className="App">
{/* <Persons/> */}
{/* <Posts/> */}
<PostsTable/>
  </div>
</div>
);  
  }
}
export default App;
