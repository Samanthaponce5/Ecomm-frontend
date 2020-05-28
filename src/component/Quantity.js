import React from 'react'

export default class Quantity extends React.Component{

    state= {
        value: 0 
    }
   
    onDecrement = (e)=> {
        let{value}=this.state
      if (this.state.value <= 0) return;
      this.setState({value: --value});
    }
    onIncrement= (e)=> {
        let{value}=this.state

      this.setState({value: ++value});
    }  
    render(){
      return (
          
        <div className="qty-box">
          <span className="span dec" onClick={this.onDecrement} onTouchStart={this.onDecrement}>–</span>
          <span className="span qty">{this.state.value}</span>
          <span className="span inc" onClick={this.onIncrement} onTouchStart={this.onIncrement}>+</span>
        </div>
      );
    
    }
  };
  
