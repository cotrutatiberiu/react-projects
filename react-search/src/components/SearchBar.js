import React from "react";

export default class SearchBar extends React.Component{
    render(){
        return(
            <div>
            <h1>{this.props.searchTitle}</h1>
            <input type="text" placeholder={this.props.searchPlaceholder}/>
            </div>
        )
    }
}

SearchBar.defaultProps={
    searchTitle: "Search: ",
    searchPlaceholder: "Search the list with React"
}