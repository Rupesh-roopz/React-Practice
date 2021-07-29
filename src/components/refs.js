import React from "react";

class Refs extends React.Component{
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
            <button onClick={this.handleClick}>Click</button>
        </div>
        )
    }
}

export default Refs
