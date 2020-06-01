import React, { Component } from "react";
import ButtonComponent from "./components/ButtonComponent";
import actorsData from "./data/imdb.json";
import CardComponent from "./components/Card";
const title = "IMDB APP"

const buttonTextList = ["Add random actor", "Sort By Name", "Sort By popularity"];


const generateRandomActor = () => {
    let result = [];
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * actorsData.length);
        result.push(actorsData[random]);
        actorsData.splice(random, 1);

    }
    return result;
}

class ImdbRandom extends Component {

    render() {

        return (
            <div className="ImdbRandom">

                <Body title={title} />
                <ButtonBuilder buttonProps={buttonTextList} />
                <List content={generateRandomActor()} />

            </div>
        );
    }

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
        console.log("Name borta " + actorName);

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
                {this.props.buttonProps.map((elem) => <ButtonComponent key={elem} buttonText={elem} />)}
            </div>
        )
    }
}

export default ImdbRandom;