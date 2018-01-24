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
  // return props.dataToRender.map((item,i)=>{
  //     return <p key={i}>{item.username}</p>
  // })
  console.log(props.dataToRender);
  let sortByRecent = [];
  for (var i in props.dataToRender) {
    //   console.log(props.dataToRender[i].username);
    // sortByRecent.push(props.dataToRender[i].alltime)
    sortByRecent.push({alltime:props.dataToRender[i].alltime,username:props.dataToRender[i].username});
  }
  sortByRecent.sort(function(a,b){
      return a.alltime-b.alltime
  });
  //   sortByRecent.reverse();
  console.log(sortByRecent);
  return <p>a</p>;
}
