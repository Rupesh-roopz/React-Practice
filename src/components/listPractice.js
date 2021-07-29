import React from "react";

export class ListPractice extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:["Rupesh","roopzz"]
        }
    }
    render(){
        const numbers = [12,21,33,33];
        const listItems = this.state.list.map((number) =><li>values : {number}</li>);
        return (
            <ul>{listItems}</ul>
        )
}
}