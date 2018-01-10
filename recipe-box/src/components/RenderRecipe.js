import React from "react";

export default class RenderRecipe extends React.Component {
  render() {

    let myJson = JSON.parse(localStorage.recipeBook);
    return myJson.map(item => {
      return <p key={item._id}>{item.title}</p>;
    });
  }
}
