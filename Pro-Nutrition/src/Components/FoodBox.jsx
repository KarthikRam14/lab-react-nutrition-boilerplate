import "../App.css";
import React, { Component } from "react";
import TotalCal from "./TotalCal";

export default class Foodbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      id: 0,
      totalCalories: 0,
    };
  }

  handleChange = (e, id) => {
    this.setState({
      counter: e,
      id: id,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Food calories:", this.props.food.cal);
    console.log("Counter:", this.state.counter);

    this.setState(
      {
        totalCalories: this.props.food.cal * this.state.counter,
      },
      () => {
        console.log("inside", this.state.totalCalories);
      }
    );
  };

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      counter: 0,
      id: -1,
      totalCalories: 0,
    });
  };

  render() {
    return (
      <div className="content">
        <div className="box">
          <article className="media">
            <div className="bckColor">
              <div className="img">
                <figure className="imagePhoto">
                  <img className="image" src={this.props.food.img} alt="" />
                </figure>
              </div>
              <div className="flex">
                <div className="name">
                  <p>
                    <strong>{this.props.food.name}</strong> <br />
                    <small>{this.props.food.cal}</small>
                  </p>
                </div>
              </div>
              <div className="main-display">
                <div className="flex">
                  <div className="input-control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Enter a number here"
                      onChange={(e) =>
                        this.handleChange(e.target.value, this.props.food.id)
                      }
                    />
                    <div className="control">
                      <button onClick={this.handleSubmit} className="add">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div className="cals">
            <TotalCal
              name={this.props.food.name}
              totalCalories={this.state.totalCalories}
              count={this.state.counter}
            />
            <button className="reset" onClick={this.handleReset}>
              reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}
