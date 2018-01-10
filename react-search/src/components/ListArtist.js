import React from "react";
import RenderArtist from "./RenderArtist";
// import { fleet } from "./../data/data";

export default class ListArtist extends React.Component {
    render() {
        return (
            <div>
                <RenderArtist data={this.props.data} toSearch={this.props.toSearch}/>
            </div>
        )
    }
}