import React from "react";

export default class Button extends React.Component{
    render(){
        return <div><span  className="buttonSwitch">{this.props.buttonName}</span></div>
    }
}