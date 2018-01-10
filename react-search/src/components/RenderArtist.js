import React from "react";

export default class RenderArtist extends React.Component {
  renderStuff() {
    return this.props.data.map(item => {
      // return <p key={item._id}>{item.name}</p>;
      let myVar=new RegExp(this.props.toSearch ,"i");
      if (item.name.match(myVar)) {
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
