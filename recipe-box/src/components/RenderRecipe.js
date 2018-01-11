import React from "react";

export default class RenderRecipe extends React.Component {
  deleteStuff(){
    
  }
  render() {
    let myJson = JSON.parse(localStorage.recipeBook);
    return myJson.map(item => {
      return (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.ingredients.join(" , ")}</p>
          <button type="submit" onSubmit={this.deleteStuff}>Delete</button>
          <button type="button>">Edit</button>

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
