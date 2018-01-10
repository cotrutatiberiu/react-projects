import React from "react";

export default class Title extends React.Component {
  render() {
    return (
      <div className="titleContainer">
        <span>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </span>
      </div>
    );
  }
}

Title.defaultProps = {
  title: " React Search",
  subtitle: "Here is a list of Reggae artists rendered from a JSON object"
};
