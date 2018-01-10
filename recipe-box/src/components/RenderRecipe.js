import React from "react";

export default class RenderRecipe extends React.Component {
  render() {
    let myJson = JSON.parse(localStorage.recipeBook);
    return myJson.map(item => {
      return <p>item.title</p>;
    });
  }
}
