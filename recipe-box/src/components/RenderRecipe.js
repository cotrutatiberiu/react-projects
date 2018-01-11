import React from "react";

export default class RenderRecipe extends React.Component {
  deleteItem(id) {
    let myJson = JSON.parse(localStorage.recipeBook);
    for (let i = 0; i < myJson.length; i++) {
      if (myJson[i]._id === id) {
        myJson.splice([i], 1);
      }
    }
    console.log(myJson);
  }
  render() {
    let myJson = JSON.parse(localStorage.recipeBook);
    return myJson.map(item => {
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
