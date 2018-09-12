import React from "react";

export default class Input extends React.Component{
    constructor(props){
        super(props);

        this.trataKeyUp = this.trataKeyUp.bind(this);
    }
    trataKeyUp(e){
        if(e.key == "Enter" && this.props.teclouEnter){
            this.props.teclouEnter(e.target.value);
            e.target.value="";
        }  
    }
    render(){
        return (
            <div>
                {this.props.children}<input type="text" 
                onKeyUp={this.trataKeyUp}/>
            </div>
        )
    }
}