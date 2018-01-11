import React from "react";
import RenderRecipe from "./RenderRecipe";

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ingredients: "",
      myJson: this.props.data
    };
    this.addElement = this.addElement.bind(this);
  }
  addElement(e) {
    e.preventDefault();
    this.setState({
      title: e.target.titleInput.value,
      ingredients: e.target.ingredientsInput.value
    });
    this.state.myJson.push({
      title: e.target.titleInput.value,
      ingredients: e.target.ingredientsInput.value.split(" ")
    });
    localStorage.setItem("recipeBook", this.state.myJson);
  }
  render() {
    let fixMyJson = this.state.myJson;
    for (let i = 0; i < this.state.myJson.length; i++) {
      fixMyJson[i]._id = `${i}`;
    }
    localStorage.setItem("recipeBook", JSON.stringify(fixMyJson));
    return (
      <div>
        <RenderRecipe data={this.state.myJson} />
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
