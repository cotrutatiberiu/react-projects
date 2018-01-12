import React from "react";
import { Panel } from "react-bootstrap";
import { PanelGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class RenderRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myJson: this.props.data,
      title: this.props.title,
      ingredients: this.props.ingredients
    };
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
        <div key={item._id}>
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
                <p>{item.ingredients.join(" , ")}</p>

                <Button
                  bsStyle="danger"
                  type="button"
                  onClick={this.deleteItem.bind(this, item._id)}
                >
                  Delete
                </Button>

                <form onSubmit={this.editItem.bind(this, item._id)}>
                  <input type="text" name="titleInputEdit" />
                  <input type="text" name="ingredientsInputEdit" />
                  <input type="submit" value="Submit Edit" />
                </form>
              </Panel.Body>
            </Panel>
          </PanelGroup>
        </div>
      );
    });
  }
}
