import React from "react";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";

function RenderItems(props) {
  let i = 0;
  return props.alltime.map(item => {
    i++;
    return <p key={i}>{item.username}</p>;
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltime: []
    };
    this.updateShowRecent = this.updateShowRecent.bind(this);
    this.updateShowAllTime=this.updateShowAllTime.bind(this);
  }
  updateShowRecent(e) {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(response => response.json())
      .then(data => {
        this.setState({ alltime: data });
      });
  }
  updateShowAllTime(e) {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => response.json())
      .then(data => {
        this.setState({ alltime: data });
      });
  }
  componentWillMount() {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => response.json())
      .then(data => {
        this.setState({ alltime: data });
      });
  }
  render() {
    return (
      <div>
        <Title title="Leaderboard" />
        <table>
          <th onClick={this.updateShowRecent}><Button buttonName="Show Recent" /></th>
          <th onClick={this.updateShowAllTime}><Button buttonName="Show Alltime" /></th>
          <th><Button buttonName="Sort by Recent" /></th>
          <th><Button buttonName="Sort by Alltime" /></th>
        </table>
        <RenderItems alltime={this.state.alltime} />
      </div>
    );
  }
}

export default App;
