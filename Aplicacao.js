import React from "react";
import Input from "./Input.js";
import Reddit from "./Reddit.js";

export default class Aplicacao extends React.Component{
    trataEnter(texto){
        
    }    
    render(){
        return (
            <div>
                <div><Input teclouEnter={(t) => {this.trataEnter(t);}}>
                    Nome do fórum:
                    </Input>
                </div>
                <div>
                    <Reddit forum="reactjs"></Reddit>
                </div>
            </div>
        )
    }
}