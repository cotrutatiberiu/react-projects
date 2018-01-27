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
      ascendingRecent: false,
      ascendingAll: false,
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
    this.setState({ ascendingAll: false, ascendingRecent: false });
    if (this.state.toRender === this.state.alltimeData) {
      switch (sortBy) {
        case "recent":
          if (this.state.ascendingRecent === false) {
            this.setState({
              toRender: this.state.toRender.sort(function(a, b) {
                return a.recent - b.recent;
              }),
              ascendingRecent: true,
              sortByRecentClass: "buttonSwitch sorted",
              sortByAllClass: "buttonSwitch"
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascendingRecent: false,
              sortByRecentClass: "buttonSwitch resorted",
              sortByAllClass: "buttonSwitch"
            });
          }
          break;
        case "alltime":
          if (this.state.ascendingAll === false) {
            this.setState({
              toRender: this.state.toRender.sort(function(a, b) {
                return a.alltime - b.alltime;
              }),
              ascendingAll: true,
              sortByAllClass: "buttonSwitch sorted",
              sortByRecentClass: "buttonSwitch"
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascendingAll: false,
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
          if (this.state.ascendingRecent === false) {
            this.setState({
              toRender: this.state.toRender.sort(function(a, b) {
                return a.recent - b.recent;
              }),
              ascendingRecent: true,
              sortByRecentClass: "buttonSwitch sorted",
              sortByAllClass: "buttonSwitch"
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascendingRecent: false,
              sortByRecentClass: "buttonSwitch sorted",
              sortByAllClass: "buttonSwitch"
            });
          }
          break;
        case "alltime":
          if (this.state.ascendingAll === false) {
            this.setState({
              toRender: this.state.toRender.sort(function(a, b) {
                return a.alltime - b.alltime;
              }),
              ascendingAll: true,
              sortByAllClass: "buttonSwitch sorted",
              sortByRecentClass: "buttonSwitch"
            });
          } else {
            this.setState({
              toRender: this.state.toRender.reverse(),
              ascendingAll: false,
              sortByAllClass: "buttonSwitch resorted",
              sortByRecentClass: "buttonSwitch"
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
                  sorted: false,
                  sortByRecentClass: "buttonSwitch",
                  sortByAllClass: "buttonSwitch"
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
                  sorted: false,
                  sortByRecentClass: "buttonSwitch",
                  sortByAllClass: "buttonSwitch"
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
