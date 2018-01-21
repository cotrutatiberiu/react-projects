import React from 'react';
import './App.css';

import {fleet} from "./data/data";
import Title from "./components/TitleBar";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  render() {
    var AppStyle={
      backgroundColor:"#023436",
      height:"100vh",
      width:"100%"
    }
    return (
      <div className="App" style={AppStyle}>
        <Title/>
        <SearchBar data={fleet}/>
      </div>
    );
  }
}
