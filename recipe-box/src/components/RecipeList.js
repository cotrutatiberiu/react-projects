import React from "react";
import RenderRecipe from "./RenderRecipe";

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ingredients: ""
    };
    this.addElement = this.addElement.bind(this);
  }
  addElement(e) {
    e.preventDefault();
    this.setState({
      title: e.target.titleInput.value,
      ingredients: e.target.ingredientsInput.value
    });
    let myJson = JSON.parse(localStorage.recipeBook);
    myJson.push({
      title: e.target.titleInput.value,
      ingredients: e.target.ingredientsInput.value.split(" ")
    });
    let newJson = myJson;
    localStorage.setItem("recipeBook", JSON.stringify(newJson));
  }
  render() {
    let getMyJson = JSON.parse(localStorage.recipeBook);
    let fixMyJson = getMyJson;
    for (let i = 0; i < getMyJson.length; i++) {
      fixMyJson[i]._id = `${i}`;
    }
    localStorage.setItem("recipeBook", JSON.stringify(fixMyJson));
    return (
      <div>
        <RenderRecipe />
        <form onSubmit={this.addElement}>
          <h3>Title</h3>
          <input type="text" name="titleInput" />
          <h3>Ingredients</h3>
          <input type="text" name="ingredientsInput" />
          <input type="submit" value="Add Recipe" />
        </form>
      </div>
    );
  }
}
