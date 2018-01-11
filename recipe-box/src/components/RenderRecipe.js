import React from "react";

export default class RenderRecipe extends React.Component {
  render() {
    console.log(this.props.myJson);
    return this.props.myJson.map(item => {
      return (
        <div>
          <h3>{item.title}</h3>
          <p>{item.ingredients}</p>
        </div>
      );
    });
  }
}
