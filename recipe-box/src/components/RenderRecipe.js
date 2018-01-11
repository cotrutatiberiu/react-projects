import React from "react";

export default class RenderRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myJson: this.props.data
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
  render() {
    return this.state.myJson.map(item => {
      return (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.ingredients.join(" , ")}</p>

          <button type="button" onClick={this.deleteItem.bind(this, item._id)}>
            Delete
          </button>

          <button type="button">Edit</button>

          <form onSubmit={this.addElement}>
            <input type="text" name="titleInput" />
            <input type="text" name="ingredientsInput" />
            <input type="submit" value="Submit Edit" />
          </form>
        </div>
      );
    });
  }
}
