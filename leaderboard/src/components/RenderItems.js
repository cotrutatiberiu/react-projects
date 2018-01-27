import React from "react";

export default function RenderItems(props) {
  return props.dataToRender.map((item, i) => {
    return (
      <tr key={i}>
        <td className="tableCase tesc">
          <div className="p1">
            <img src={item.img} alt="user avatar" className="userImg" />
          </div>
          <div className="p2">{item.username}</div>
        </td>
        <td className="tableCase">{item.recent}</td>
        <td className="tableCase">{item.alltime}</td>
        <td className="tableCase">{item.lastUpdate}</td>
      </tr>
    );
  });
}
