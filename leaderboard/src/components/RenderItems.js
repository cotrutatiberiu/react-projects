import React from "react";

export default function RenderItems(props) {
    // return props.alltimeData.map((item, i) => {
    //   return (
    //     <tr key={i}>
    //       <td>{item.username}</td>
    //       <td>{item.recent}</td>
    //       <td>{item.alltime}</td>
    //       <td>{item.lastUpdate}</td>
    //     </tr>
    //   );
    // });
    return props.dataToRender.sort((a,b)=>{return a.item.username-b.item.username}).map((item,i)=>{
        return <p key={i}>{item.username}</p>
    })
  }