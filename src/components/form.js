import React from "react";
import { List } from "./list"
class Form extends React.Component{
    handleOnclick=(event)=>{
        <List/>
    }
    render(){
        return (
            <div>
                
                <button onClick={this.handleOnclick}>Click</button>
            </div>
            
        )
    }
}
export { Form }