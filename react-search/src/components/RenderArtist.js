import React from "react";

export default class RenderArtist extends React.Component {
  renderStuff() {
    return this.props.data.map(item => {
      // return <p key={item._id}>{item.name}</p>;
      if (item.name.includes(this.props.toSearch)) {
        return <p key={item._id}>{item.name}</p>;
      }else{
          return null;
      }
    });
  }
  render() {
    return <div>{this.renderStuff()}</div>;
  }
}
