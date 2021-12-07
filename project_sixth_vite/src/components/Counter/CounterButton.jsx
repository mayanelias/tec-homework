import React from "react";
class CounterButton extends React.Component {
    render() {
      return (
        <>
  <button style={{marginLeft:"42%",width:"200px",height:"50px",fontSize:"30px"}} onClick={this.props.clickButton}>Increment</button>
        </>
      );
    }
  }
  export default CounterButton;