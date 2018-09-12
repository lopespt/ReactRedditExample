import React from "react";
import Post from "./Post.js"
export default class Reddit extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            conteudo: {}   
        }

        this.atualizaReddit(this.props.forum);
        
    }
    componentWillReceiveProps(nextProps) {
        this.setState({conteudo: {}});
        this.atualizaReddit(nextProps.forum);        
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
        ).catch( err => console.log("forum não encontrado"));
        
    }
    render(){
        if(!this.state.conteudo.data){
            return "Sem informações";
        }
       else
        return (
            <div>
            {this.state.conteudo.data.children.map( (child, num)=>{
                        return <Post post={child.data} key={num}></Post>
                    }
                 )
            }
            </div>
        )
    }

}
