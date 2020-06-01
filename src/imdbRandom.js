import React, { Component } from "react";
import ButtonComponent from"./components/ButtonComponent";
import actors from "./data/imdb.json";

const title="IMDB APP"

const actorsArray=actors;
//const button=<ButtonComponent/>;
const buttonTextList=["Generate random actor","Sort By Name","Sort By popularity"]
class ImdbRandom extends Component {

    render(){

        return(
            <div className="ImdbRandom">
            
            <Body title={title}/>
            <ButtonBuilder buttonProps={buttonTextList}/>
            <List content={actorsArray}/>

            </div>
        );
    }
    
}
class Body extends Component{
    render(){
        return(
            <div>
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class List extends Component{
    render(){
        return(
            <div>
            
            {this.props.content.map((elem)=><p key={elem}>{elem.name}</p>)}

            {this.props.content.map((elem)=><p key={elem}>{elem.popularity}</p>)}
            
            </div>
        )

    }
}
class ButtonBuilder extends Component{
    render(){
        return(
            <div>
            {this.props.buttonProps.map((elem)=>(ButtonComponent))}
            </div>
        )
    }
}

export default ImdbRandom;