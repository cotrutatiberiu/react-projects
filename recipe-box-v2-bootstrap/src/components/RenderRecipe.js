import React from "react";

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
          <h3>{item.title}</h3>
          <p>{item.ingredients.join(" , ")}</p>

          <button type="button" onClick={this.deleteItem.bind(this, item._id)}>
            Delete
          </button>

          <form onSubmit={this.editItem.bind(this, item._id)}>
            <input type="text" name="titleInputEdit" />
            <input type="text" name="ingredientsInputEdit" />
            <input type="submit" value="Submit Edit" />
          </form>
        </div>
      );
    });
  }
}
