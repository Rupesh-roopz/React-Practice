import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }
    handleClick=()=>{
        this.inputRef.current.style.color="Red"
    }
    render(){

        return (
        <div>
            <input type="text" ref={this.inputRef}/>
        </div>
        )
    }
}

export default Child
