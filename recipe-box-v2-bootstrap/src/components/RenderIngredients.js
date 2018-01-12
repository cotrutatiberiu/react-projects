import React from "react";

import { Panel } from "react-bootstrap";

export default class RenderIngredients extends React.Component{
    call(){
      return this.props.items.map(item=>{
        let i=this.props.items.indexOf(item);
        return (
        <Panel key={i}>
        <p>{item}</p>
        </Panel>
        )
      })
    }
    render(){
      return(
        <div>
        {this.call()}
        </div>
      )
    }
  }