import React from "react";
import ListArtist from "./ListArtist";

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:""
        };
        this.addToSearch=this.addToSearch.bind(this);
    }
    addToSearch(e){
        this.setState({value:e.target.value});
    }
    render(){
        return(
            <div className="searchContainer">
            <h1>{this.props.searchTitle}</h1>
            <input type="text" placeholder={this.props.searchPlaceholder} value={this.state.value} onChange={this.addToSearch}/>
            <ListArtist data={this.props.data} toSearch={this.state.value}/>
            </div>
        )
    }
}

SearchBar.defaultProps={
    searchTitle: "Search: ",
    searchPlaceholder: "Search the list with React"
}