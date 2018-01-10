import React, { Component } from "react";
import "./App.css";

import RecipeList from "./components/RecipeList";
// import AddButton from "./components/AddButton";
import {fleet} from "./data/data-file";

class App extends Component {
  componentWillMount(){
    localStorage.setItem('recipeBook', JSON.stringify(fleet));
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
