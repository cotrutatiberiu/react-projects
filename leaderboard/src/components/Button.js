import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <div>
        <span className={this.props.sendClass}>{this.props.buttonName}</span>
      </div>
    );
  }
}
