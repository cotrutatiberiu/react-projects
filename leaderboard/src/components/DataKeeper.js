import React from "react";

export default class DataKeeper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            alltime:[]
        }
    }
    componentWillMount(){
        fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime").then(results=>{
            return results.json();
        }).then(data=>{
            let username =data.results.map((user)=>{
                return <p>{user.alltime}</p>
            })
            this.setState({alltime:username});
        })
    }
    render(){
        console.log(this.state.alltime);
        return <h1>{this.state.alltime}</h1>
    }
}