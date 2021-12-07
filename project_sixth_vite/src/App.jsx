import React,{Component,Fragment} from "react"
import ChooseEven from "./components/ChooseEven/ChooseEven";
import CounterSimple from "./components/Counter/CounterSimple";
import GetPostById from "./components/GetPostById"
class App extends Component {
defaultId=1;
  state={id:this.defaultId}
  render(){
  return (
<Fragment>
 {/* id:{""}
<input
defaultValue={this.defaultId}
onChange={(evt)=>this.setState({id:evt.target.value})}
type="number"/>
<GetPostById id={this.state.id}/>  */}
{/* <CounterSimple/> */}
<ChooseEven/>
</Fragment>
  )    
  }
}
export default App
