import React, { Component } from "react";
import "./App.css";

import RecipeList from "./components/RecipeList";
// import AddButton from "./components/AddButton";
import { fleet } from "./data/data-file";

class App extends Component {
  componentWillMount() {
<<<<<<< HEAD
<<<<<<< HEAD
    if (localStorage.recipeBook === undefined) {
      localStorage.setItem("recipeBook", JSON.stringify(fleet));
    }
=======
=======
>>>>>>> parent of 728bee5... up
    let fleetFix = fleet;
    for (let i = 0; i < fleet.length; i++) {
      fleetFix[i]._id = `${i}`;
    }
    localStorage.setItem("recipeBook", JSON.stringify(fleetFix));
<<<<<<< HEAD
>>>>>>> parent of 728bee5... up
=======
>>>>>>> parent of 728bee5... up
  }
  render() {
    return (
      <div>
        <RecipeList />
      </div>
    );
  }
}

export default App;
