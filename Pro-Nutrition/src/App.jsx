import "./App.css";
import React, { Component } from "react";
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import FoodData from "./components/FoodData";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
    };
  }

  search = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Search handleSearch={this.search} />

        {FoodData.filter((value) => {
          if (this.state.searchTerm === "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ) {
            return value;
          }
        }).map((footItem) => {
          return (
            <div key={footItem.id} className="elements">
              <FoodBox food={footItem} totalCost={this.totalCost} />
            </div>
          );
        })}
      </div>
    );
  }
}
