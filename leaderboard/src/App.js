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
      toRender:[],
      sorted:false
    };
    this.toSort=this.toSort.bind(this);
  }
  componentWillMount() {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(response => response.json())
      .then(data => {
        this.setState({ alltimeData: data,toRender:data });
      });
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(response => response.json())
      .then(data => {
        this.setState({ recentData: data });
      });
  }
  toSort(){
    if(this.state.toRender===this.state.alltimeData){
      
    }else if(this.state.toRender===this.state.recentData){
      
    }
  }
  render() {
    return (
      <div>
        <Title title="Leaderboard" />

        <div onClick={ ()=>this.setState({toRender:this.state.recentData,sorted:false})} id="a">
          <Button buttonName="Show Recent" />
        </div>
        <div onClick={()=>this.setState({toRender:this.state.alltimeData,sorted:false})} name="all" id="b">
          <Button buttonName="Show Alltime" />
        </div>
        <div onClick={this.toSort}>
          <Button buttonName="Sort by Recent"/>
        </div>
        <div onClick={this.toSort}>
          <Button buttonName="Sort by Alltime" />
        </div>
        <table>
          <tbody>
            <RenderItems alltimeData={this.state.toRender} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
