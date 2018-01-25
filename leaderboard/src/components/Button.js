import React from "react";

export default class Button extends React.Component{
    render(){
        return <div className="buttonSwitch">{this.props.buttonName}</div>
    }
}