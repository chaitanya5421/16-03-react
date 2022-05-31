import {Component} from 'react';

class ClassComp extends Component{

  constructor(props){
      super(props)
    this.state={
      count:0
    }
  }


  Increment(){
      this.setState({
          count:this.state.count+1
      })
  }

  Decrement(){
    this.setState({
        count:this.state.count-1
    })
}

  render(){
    return(
      <div>
        <h2>Counter App</h2>
        <p>{this.state.count}</p>
        <button onClick={()=>{this.Increment()}}>Increment</button>
        <button onClick={()=>{this.Decrement()}}>Decrement</button>
        <p>Duration :{this.props.courseName} and duration is {this.props.Duration}</p>
      </div>
    )
  }

}

export default ClassComp