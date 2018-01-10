
import React from "react";

export default class RenderArtist extends React.Component {
    renderStuff() {
        return this.props.data.map(item => { return <p key={item._id}>{item.name}</p> })
    }
    render() {
        return (
            <div>
                {this.renderStuff()}
            </div>
        )
    }
}