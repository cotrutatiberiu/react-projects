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
        <ul>
        <li><div
          onClick={() =>
            this.setState({ toRender: this.state.recentData, sorted: false })
          }
        >
          <Button buttonName="Show Recent" />
        </div></li>
        <li><div
          onClick={() =>
            this.setState({ toRender: this.state.alltimeData, sorted: false })
          }
        >
          <Button buttonName="Show Alltime" />
        </div></li>
        <li><div onClick={() => this.toSort("recent")}>
          <Button buttonName="Sort by Recent" />
        </div></li>
        <li><div onClick={() => this.toSort("alltime")}>
          <Button buttonName="Sort by Alltime" />
        </div></li>
        </ul>
        <table>
          <tbody>
          <tr>
    <td className="category">Username</td>
    <td className="category">Recent</td>
    <td className="category">Alltime</td>
    <td className="category">Last Activity</td>
  </tr>
            <RenderItems dataToRender={this.state.toRender} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
