import React from "react";
import ReactDOM from "react-dom";

export default class Reddit extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            conteudo: {}   
        }

        this.atualizaReddit(this.props.forum);
        
    }

    atualizaReddit(nomeForum){
        fetch(`https://www.reddit.com/r/${nomeForum}.json`)
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw "Forum não existe!";
            }
            return res;
        })    
        .then(
            (res) =>{
                console.log(res);
                this.setState({conteudo: res});
            }
        ).catch( err => console.log(err));
    }


    render(){
        if(!this.state.conteudo.data){
            return "Sem informações";
        }
       else
        return (
            <div>
            {this.state.conteudo.data.children.forEach( (child, num)=>{
                        //console.log(child.data.author);
                        return <a key={num}>x</a>
                    }
                 )
            }
            </div>
        )
    }

}
