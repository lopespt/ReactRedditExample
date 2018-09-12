import React from "react";
import Input from "./Input.js";
import Reddit from "./Reddit.js";

export default class Aplicacao extends React.Component{
    constructor(props){
        super(props)
        this.state={
            forum: ""
        }

    }
    trataEnter(texto){
        this.setState({forum: texto});
    }    
    render(){
        return (
            <div>
                <div><Input teclouEnter={(t) => {this.trataEnter(t);}}>
                    Nome do fórum:
                    </Input>
                </div>
                <div>
                    <Reddit forum={this.state.forum}></Reddit>
                </div>
            </div>
        )
    }
}