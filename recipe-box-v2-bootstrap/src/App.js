import React, { Component } from "react";
import "./App.css";

import RecipeList from "./components/RecipeList";
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
      <div className="myApp">
        <RecipeList data={jsonParse} />
        <h3>Description:</h3>
        <p>
          Application made with React.js,add as many recipes you want,delete
          them or edit them freely.
        </p>
        <p>
          The items are stored in a JSON format in the the local storage of your
          browser(inspect page->application->local storage for chrome users).
        </p>
        <h3>Rules:</h3>
        <ol>
          <li>Add multiple elements with a space between them.</li>
        </ol>
        <ul>
          <li>Project remade from{" "}
          <a href="https://www.freecodecamp.org/challenges/build-a-recipe-box">
            this
          </a>{" "}
          challenge.</li>
          </ul>
      </div>
    );
  }
}

export default App;
