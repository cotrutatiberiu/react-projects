import React from "react";

export default class RenderRecipe extends React.Component {
  render() {
    let myJson = JSON.parse(localStorage.recipeBook);
    return myJson.map(item => {
      return (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.ingredients}</p>
        </div>
      );
    });
  }
}
