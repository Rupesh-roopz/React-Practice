import React from "react";
import Child from "./components/refs"

class Parent extends React.Component{
    constructor(props){
        super(props);
        this.componentRef = React.createRef();
    }

    handleClick=()=>{
        this.componentRef.current.handleClick();
    }
    
    render(){

        return (
        <div>
            <Child ref={this.componentRef}/>
            <button onClick={this.handleClick}>Click</button>
        </div>
        )
    }
}

export default Parent
