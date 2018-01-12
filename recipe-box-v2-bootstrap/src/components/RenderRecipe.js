import React from "react";
import { Panel } from "react-bootstrap";
import { PanelGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

import RenderIngredients from "./RenderIngredients";

export default class RenderRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myJson: this.props.data,
      title: this.props.title,
      ingredients: this.props.ingredients,
      showModal: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    this.setState({ showModal: false });
  }
  handleShow() {
    this.setState({ showModal: true });
  }
  deleteItem(id) {
    for (let i = 0; i < this.state.myJson.length; i++) {
      if (this.state.myJson[i]._id === id) {
        this.state.myJson.splice([i], 1);
      }
    }
    this.setState({ myJson: this.state.myJson });
    localStorage.setItem("recipeBook", JSON.stringify(this.state.myJson));
  }
  editItem(id, e) {
    e.preventDefault();
    for (let i = 0; i < this.state.myJson.length; i++) {
      if (this.state.myJson[i]._id === id) {
        this.state.myJson.splice(i, 1, {
          title: e.target.titleInputEdit.value,
          ingredients: e.target.ingredientsInputEdit.value.split(" ")
        });
      }
    }
    this.setState({ myJson: this.state.myJson });
    console.log(this.state.myJson);
    localStorage.setItem("recipeBook", JSON.stringify(this.state.myJson));
  }
  render() {
    let fixMyJson = this.state.myJson;
    for (let i = 0; i < this.state.myJson.length; i++) {
      fixMyJson[i]._id = `${i}`;
    }
    localStorage.setItem("recipeBook", JSON.stringify(fixMyJson));
    return this.state.myJson.map(item => {
      return (
        <div key={item._id} className="listItem">
          <PanelGroup
            accordion
            id="accordion-uncontrolled-example"
            defaultActiveKey="2"
          >
            <Panel eventKey="1">
              <Panel.Heading>
                <Panel.Title toggle>
                  <h5>{item.title}</h5>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body collapsible>
                <h4>Ingredients</h4>
                {/* <p>{item.ingredients.join(" ")}</p> */}
                <RenderIngredients items={item.ingredients}/>
                <Button
                  bsStyle="danger"
                  type="button"
                  onClick={this.deleteItem.bind(this, item._id)}
                >
                  Delete
                </Button>
                <Button bsStyle="success" onClick={this.handleShow}>
                  Edit
                </Button>
              </Panel.Body>
            </Panel>
          </PanelGroup>

          <Modal show={this.state.showModal} onHide={this.handleClose}>
            <form onSubmit={this.editItem.bind(this, item._id)}>
              <Modal.Header closeButton>
                <Modal.Title>Edit recipe</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="formBasicText">
                  <h4>Recipe:</h4>
                  <FormControl
                    type="text"
                    name="titleInputEdit"
                    placeholder="Recipe Name"
                  />
                  <h4>Ingredients:</h4>
                  <FormControl
                    type="text"
                    name="ingredientsInputEdit"
                    placeholder="Enter ingredients separated by space"
                  />
                </FormGroup>
              </Modal.Body>
              <hr />
              <Modal.Footer>
                <Button type="submit" bsStyle="primary">
                  Submit edit
                </Button>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </form>
          </Modal>
        </div>
      );
    });
  }
}