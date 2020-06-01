import React, { Component } from "react";
import "./imdbRandom.css"
import ButtonComponent from "./components/ButtonComponent";
import actorsData from "./data/imdb.json";
import CardComponent from "./components/Card";
const title = "IMDB APP";

const buttonTextList = ["Add random actor", "Sort By Name", "Sort By popularity"];



class ImdbRandom extends Component {
    constructor (props){
        super(props)
        this.state={
            newObjcetIsGenerate :new Set(),
            result:generateRandomActors(),

        };
        
    }
   

    render() {

        return (
            <div className="ImdbRandom">

                <Body title={title} />
                <ButtonBuilder buttonProps={buttonTextList} />
                <List content={generateRandomActors()} />

            </div>
        );
    }

}

const generateRandomActors = () => {
    let result = [];
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * actorsData.length);
        result.push(actorsData[random]);
        actorsData.splice(random, 1);
    }
    return result;
}

class Body extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class List extends Component {
    delete(actorName) {
        const copyArr=Object.assign([], this.props.content);       
        console.log("Name deleted " + actorName);
        copyArr.splice(actorName,1);
        
    }

    render() {
        return (
            <table>
                <tbody>
                    {this.props.content.map((elem) =>
                        <CardComponent key={elem.name}
                         name={elem.name}
                            popularity={elem.popularity}
                            image={elem.pictureUrl}
                            buttonOnClickFunction={()=>this.delete(elem.name)} />
                            )}
                </tbody>
            </table>)

    }
}
class ButtonBuilder extends Component {
    render() {
        return (
            <div>
                {this.props.buttonProps.map((elem) => <ButtonComponent key={elem} buttonText={elem} onClickFunction={generateRandomActors} />)}
            </div>
        )
    }
}

export default ImdbRandom;