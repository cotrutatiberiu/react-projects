import React from "react";

export default function RenderItems(props) {
  return props.dataToRender.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.username}</td>
        <td>{item.recent}</td>
        <td>{item.alltime}</td>
        <td>{item.lastUpdate}</td>
      </tr>
    );
  });
}
