import React from "react";
class CounterUp extends React.Component {
  render() {
    return (
      <>
<h1 style={{textAlign:"center"}}> count: {this.props.count}</h1>
      </>
    );
  }
}
export default CounterUp;