import React from "react";
import Button from "./Button";

function s(){
    alert("a");
}

export default class ButtonTable extends React.Component{
    render(){
        return (
            <table>
            <th><Button buttonName="Show Recent"/></th>
            <th><Button buttonName="Show Alltime"/></th>
            <th><Button buttonName="Sort by Recent"/></th>
            <th><Button buttonName="Sort by Alltime"/></th>
            </table>
        )
    }
}