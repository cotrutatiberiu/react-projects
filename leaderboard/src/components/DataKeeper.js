import React from "react";

export default class DataKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltime: []
    };
  }
  componentDidMount() {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => response.json())
      .then(data => {
        this.setState({ alltime: data });
      });
  }
  render() {
    console.log(this.state.alltime);
    return <h1>a</h1>;
  }
}
