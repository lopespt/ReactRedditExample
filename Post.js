import React from "react";

export default class Post extends React.Component{
    constructor(props){
        super(props)

        this.estilos={
            post: {
                "backgroundColor": "#efefef",
                "margin": "16px",
                "border": "1px solid black",
                "boxShadow": "black 2px 2px 8px",
                "padding": "2px"
            },
            date:{
                "float": "right"
            },
            author: {
                "fontWeight": "bold",
                "display": "inline-block"
            },
            text:{
                "backgroundColor": "white"
            }
        }

    }

    render(){
        return(
            <div style={this.estilos.post}>
                De: <div style={this.estilos.author}>{this.props.post.author}</div>  
                <div style={this.estilos.date}>{new Date(parseInt(this.props.post.created_utc)*1000).toString()}</div>  
                <div style={this.estilos.text}>{this.props.post.selftext}</div>
            </div>
        );
    }
}

