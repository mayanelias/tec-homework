import React from "react";
class ChooseEven extends React.Component {
  state = {
    arrayNumbers: [],
    message: "",
    counter: 0,
    time: null,
    results: "",
  };
  componentDidMount() {
    let arrayTemp = [];
    for (let i = 0; i < 10; i++) {
      arrayTemp.push({
        num: Math.floor(Math.random() * 20),
        clicked: false,
      });
      this.setState({ arrayNumbers: arrayTemp });
    }
    this.setState({
      time: setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 1000),
    });
  }
  handleCounter = () => {
    const arr = JSON.parse(localStorage.getItem("counter"));
    let messages = arr.map((item,i) => {
       return <p key={i}>{item}</p>;
    });

    this.setState({ results: messages });
  };

  isGameOver = () => {
    for (let i = 0; i < this.state.arrayNumbers.length; i++) {
      const item = this.state.arrayNumbers[i];
      if (item.num % 2 === 0 && !item.clicked) {
        return false;
      }
    }

    return true;
  };
  
  handleLocalStorage = ()=>{
let arrLocal = [];
    if(localStorage.getItem("counter")){
      arrLocal = JSON.parse(localStorage.getItem("counter"));
    }
    const { counter} = this.state;
    arrLocal.push(counter);
  

    localStorage.setItem("counter", JSON.stringify(arrLocal))
  
  
  }


  render() {
    const numbers = this.state.arrayNumbers.map((number, i) => (
      <button
        disabled={this.state.arrayNumbers[i].clicked}
        onClick={() => {
          this.state.arrayNumbers[i].clicked = true;
          if (this.isGameOver()) {
            this.setState({ message: "Game Over!!!" });
            this.handleLocalStorage()
            clearInterval(this.state.time)
            setTimeout(()=>{
              this.setState({counter:0})
            },3000)
          }
          this.setState({ arrayNumbers: this.state.arrayNumbers });
        }}
        key={i}
      >
        {number.num}
      </button>
    ));
    return (
      <div style={{ marginLeft: "40%" }}>
        <h1>Choose Even</h1>
        {numbers}
        <h1>{this.state.message}</h1>
        <h1>Counter:{this.state.counter}</h1>
        <button onClick={this.handleCounter}>Results</button>
        <br />
        <h1>{this.state.results}</h1>
      </div>
    );
  }
}
export default ChooseEven;
