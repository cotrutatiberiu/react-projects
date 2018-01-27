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
      ascending: false,
      sortByRecentClass: "buttonSwitch",
      sortByAllClass: "buttonSwitch"
    };
    this.toSort = this.toSort.bind(this);
  }
  componentWillMount() {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Link is wrong");
        }
      })
      .then(data => {
        this.setState({ alltimeData: data, toRender: data });
      });
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Link is wrong");
        }
      })
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
              ascending: true,
              sortByRecentClass: "buttonSwitch sorted",
              sortByAllClass: "buttonSwitch"
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascending: false,
              sortByRecentClass: "buttonSwitch resorted",
              sortByAllClass: "buttonSwitch"
            });
          }
          break;
        case "alltime":
          if (this.state.ascending === false) {
            this.setState({
              toRender: this.state.toRender.sort(function(a, b) {
                return a.alltime - b.alltime;
              }),
              ascending: true,
              sortByAllClass: "buttonSwitch sorted",
              sortByRecentClass: "buttonSwitch"
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascending: false,
              sortByAllClass: "buttonSwitch resorted",
              sortByRecentClass: "buttonSwitch"
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
          <li>
            <div
              onClick={() =>
                this.setState({
                  toRender: this.state.recentData,
                  sorted: false
                })
              }
            >
              <Button buttonName="Show Recent" sendClass="buttonSwitch" />
            </div>
          </li>
          <li>
            <div
              onClick={() =>
                this.setState({
                  toRender: this.state.alltimeData,
                  sorted: false
                })
              }
            >
              <Button buttonName="Show Alltime" sendClass="buttonSwitch" />
            </div>
          </li>
          <li>
            <div onClick={() => this.toSort("recent")}>
              <Button
                buttonName="Sort by Recent"
                sendClass={this.state.sortByRecentClass}
              />
            </div>
          </li>
          <li>
            <div onClick={() => this.toSort("alltime")}>
              <Button
                buttonName="Sort by Alltime"
                sendClass={this.state.sortByAllClass}
              />
            </div>
          </li>
        </ul>
        <table className="test">
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
