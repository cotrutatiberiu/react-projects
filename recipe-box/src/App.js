import React, { Component } from "react";
import "./App.css";

import RecipeList from "./components/RecipeList";
// import AddButton from "./components/AddButton";
import { fleet } from "./data/data-file";

class App extends Component {
  componentWillMount() {
    if (localStorage.recipeBook === undefined) {
      localStorage.setItem("recipeBook", JSON.stringify(fleet));
    }
  }
  render() {
    let jsonParse = JSON.parse(localStorage.recipeBook);
    return (
      <div>
        <RecipeList data={jsonParse} />
      </div>
    );
  }
}

export default App;
