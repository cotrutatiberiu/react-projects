import React, { Component } from 'react';
import './App.css';

import {fleet} from "./data/data";
import Title from "./components/TitleBar";
import SearchBar from "./components/SearchBar";
import ListArtist from "./components/ListArtist";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <SearchBar/>
        <ListArtist data={fleet}/>
      </div>
    );
  }
}
