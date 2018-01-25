import React from "react";
import "./App.css";
import Title from "./components/Title";
import Button from "./components/Button";
import RenderItems from "./components/RenderItems";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltimeData: [],
      recentData: [],
      toRender: [],
      ascending: false
    };
    this.toSort = this.toSort.bind(this);
  }
  componentWillMount() {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => response.json())
      .then(data => {
        this.setState({ alltimeData: data, toRender: data });
      });
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(response => response.json())
      .then(data => {
        this.setState({ recentData: data });
      });
  }
  toSort(sortBy) {
    if (this.state.toRender === this.state.alltimeData) {
      switch (sortBy) {
        case "recent":
          if (this.state.ascending === false) {
            this.setState({
              toRender: this.state.toRender.sort(function(a, b) {
                return a.recent - b.recent;
              }),
              ascending: true
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascending: false
            });
          }
          break;
        case "alltime":
          if (this.state.ascending === false) {
            this.setState({
              toRender: this.state.toRender.sort(function(a, b) {
                return a.alltime - b.alltime;
              }),
              ascending: true
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascending: false
            });
          }
          break;
        default:
          break;
      }
    } else if (this.state.toRender === this.state.recentData) {
      switch (sortBy) {
        case "recent":
          if (this.state.ascending === false) {
            this.setState({
              toRender: this.state.toRender.sort(function(a, b) {
                return a.recent - b.recent;
              }),
              ascending: true
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascending: false
            });
          }
          break;
        case "alltime":
          if (this.state.ascending === false) {
            this.setState({
              toRender: this.state.toRender.sort(function(a, b) {
                return a.alltime - b.alltime;
              }),
              ascending: true
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascending: false
            });
          }
          break;
        default:
          break;
      }
    }
  }
  render() {
    return (
      <div>
        <Title title="Leaderboard" />
        <div
          onClick={() =>
            this.setState({ toRender: this.state.recentData, sorted: false })
          }
        >
          <Button buttonName="Show Recent" />
        </div>
        <div
          onClick={() =>
            this.setState({ toRender: this.state.alltimeData, sorted: false })
          }
        >
          <Button buttonName="Show Alltime" />
        </div>
        <div onClick={() => this.toSort("recent")}>
          <Button buttonName="Sort by Recent" />
        </div>
        <div onClick={() => this.toSort("alltime")}>
          <Button buttonName="Sort by Alltime" />
        </div>
        <table>
          <tbody>
          <tr>
            <td></td>
    <td>Username</td>
    <td>Recent</td>
    <td>Alltime</td>
    <td>Last Activity</td>
  </tr>
            <RenderItems dataToRender={this.state.toRender} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
