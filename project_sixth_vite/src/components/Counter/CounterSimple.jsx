import React from "react";
import CounterUp from "./CounterUp";
import CounterButton from "./CounterButton";
class CounterSimple extends React.Component {
  state = { count: 0 };
clickButton=()=>{
this.setState({ count: this.state.count + 1 })
}
  render() {
    return (
      <>
  <h1 style={{textAlign:"center",fontWeight:"bolder"}}>Counter Simple</h1>
<CounterButton clickButton={this.clickButton}/>
<CounterUp count={this.state.count}/>
  </>
    );
  }
}
export default CounterSimple;
