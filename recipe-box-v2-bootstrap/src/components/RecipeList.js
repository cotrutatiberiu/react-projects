import React from "react";
import RenderRecipe from "./RenderRecipe";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

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

    localStorage.setItem("recipeBook", JSON.stringify(this.state.myJson));
  }
  render() {
    return (
      <div>
        <RenderRecipe
          data={this.state.myJson}
          title={this.state.title}
          ingredients={this.state.ingredients}
        />
        
        <form onSubmit={this.addElement}>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              name="titleInput"
              placeholder="Enter text"
            />
            <FormControl
              type="text"
              name="ingredientsInput"              
              placeholder="Enter text"
            />
            <Button type="submit" bsStyle="primary">Add Recipe</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}
