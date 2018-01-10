import React from 'react';
import './App.css';

import {fleet} from "./data/data";
import Title from "./components/TitleBar";
import SearchBar from "./components/SearchBar";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <SearchBar data={fleet}/>
      </div>
    );
  }
}
