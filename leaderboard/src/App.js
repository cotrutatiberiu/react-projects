import React from "react";
import "./App.css";
import { fleet } from "./components/fleet";
import Title from "./components/Title";
import ButtonTable from "./components/ButtonTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alltime: []
    };
  }
  componentWillMount() {
    // fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ alltime: data });
    //   });
    this.setState({ alltime: fleet });
  }
  render() {
    // console.log(this.state.alltime);
    // let i = 0;
    // return this.state.alltime.map(item => {
    //   i++;
    //   return <p key={i}>{item.username}</p>;
    // });
    return (
      <div>
        <Title title="Leaderboard" />
        <ButtonTable/>
      </div>
    );
  }
}

export default App;
