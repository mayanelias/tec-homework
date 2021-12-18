import "./App.css";
import MyComponent from "./components/MyComponent";
import Posts from "./components/Posts";
// import TitleCounter from './components/TitleCounter'
import GetPostsById from "./components/GetPostsById";
import { useState } from "react";
import UnMount from "./components/UnMount";
import Reddit from "./components/Reddit";
import RedditInput from "./components/RedditInput";
function App() {
  // const [updateId, setUpdateId] = useState(1);
  const [btn, setBtn] = useState(true);
  const [updateInput, setUpdateInput] = useState("reactjs");
  return (
    <div className="App">
      {/* <Posts/> */}
      {/* <TitleCounter/> */}
      {/* <MyComponent/> */}
      {/* <input onChange={(evt) => setUpdateId(evt.target.value)} type="number" /> */}
      {/* <GetPostsById id={Number(updateId)} /> */}
      {/* <button onClick={() =>setBtn(!btn)}>
        UnMount
      </button>
      {btn?<UnMount/>:""}
      <Reddit/> */}
      <input onChange={(evt) => setUpdateInput(evt.target.value)} type="text" />
      <RedditInput url={updateInput} />
    </div>
  );
}

export default App;
