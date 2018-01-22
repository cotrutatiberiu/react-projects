import React from "react";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";

function RenderItems(props) {
  return props.alltimeData.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.username}</td>
        <td>{item.recent}</td>
        <td>{item.alltime}</td>
        <td>{item.lastUpdate}</td>
      </tr>
    );
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltimeData: []
    };
    this.updateShowRecent = this.updateShowRecent.bind(this);
    this.updateShowAllTime = this.updateShowAllTime.bind(this);
  }
  updateShowRecent(e) {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(response => response.json())
      .then(data => {
        this.setState({ alltimeData: data });
      });
  }
  updateShowAllTime(e) {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => response.json())
      .then(data => {
        this.setState({ alltimeData: data });
      });
  }
  componentWillMount() {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => response.json())
      .then(data => {
        this.setState({ alltimeData: data });
      });
  }
  render() {
    console.log(this.state.alltimeData);
    return (
      <div>
        <Title title="Leaderboard" />

        <div onClick={this.updateShowRecent}>
          <Button buttonName="Show Recent" />
        </div>
        <div onClick={this.updateShowAllTime}>
          <Button buttonName="Show Alltime" />
        </div>
        <div>
          <Button buttonName="Sort by Recent" />
        </div>
        <div>
          <Button buttonName="Sort by Alltime" />
        </div>
        <table>
          <tbody>
            <RenderItems alltimeData={this.state.alltimeData} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
