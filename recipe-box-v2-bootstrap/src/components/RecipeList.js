import React from "react";
import RenderRecipe from "./RenderRecipe";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Panel } from "react-bootstrap";

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      ingredients: "",
      myJson: this.props.data,
      showModal: false
    };
    this.addElement = this.addElement.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    this.setState({ showModal: false });
  }
  handleShow() {
    this.setState({ showModal: true });
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
        <Panel>
        <RenderRecipe
          data={this.state.myJson}
          title={this.state.title}
          ingredients={this.state.ingredients}
        />
        </Panel>
        <Button bsStyle="primary" onClick={this.handleShow}>
          Add Recipe
        </Button>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <form onSubmit={this.addElement}>
            <Modal.Header closeButton>
              <Modal.Title>Add a recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <h4>Recipe:</h4>
                <FormControl
                  type="text"
                  name="titleInput"
                  placeholder="Recipe Name"
                />
                <h4>Ingredients:</h4>
                <FormControl
                  type="text"
                  name="ingredientsInput"
                  placeholder="Enter ingredients separated by space"
                />
              </FormGroup>
            </Modal.Body>
            <hr />
            <Modal.Footer>
              <Button type="submit" bsStyle="primary">
                Add a Recipe
              </Button>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}
