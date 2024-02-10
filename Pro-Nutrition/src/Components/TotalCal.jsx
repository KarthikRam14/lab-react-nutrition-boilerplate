import React, { Component } from "react";

export default class TotalCal extends Component{
  render(){
    return(
      <div className="flex2">
        <h3>{`${this.props.count}  ${this.props.name} = ${this.props.totalCalories} calories`}</h3>
      </div>
    )
  }
}