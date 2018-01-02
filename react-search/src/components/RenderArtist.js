
import React from "react";

// export default function RenderArtist(props) {
//     var a=props.data.map(items =>{
//         return <p key={items._id}>{items.name}</p>
//     })
//     return (
//         <div>{a}</div>
//     )
// }

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