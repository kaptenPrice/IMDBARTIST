import React, { Component } from "react";
import "./imdbRandom.css"
import ButtonComponent from "./components/ButtonComponent";
import actorsData from "./data/imdb.json";
import CardComponent from "./components/Card";


const buttonTextList = ["Generate random actors", "Sort By Name", "Sort By popularity"];

class ImdbRandom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.actorsToShow(),
        }

        this.delete = this.delete.bind(this);
        this.generateRandomActors = this.generateRandomActors.bind(this);
        this.sortByName=this.sortByName.bind(this);

    }
    actorsToShow = () => {
        let result = [];
        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * actorsData.length);
            result.push(actorsData[random]);
          //  actorsData.splice(random, 1);
        } return result;
    }

    delete(actorName) {
        const toRemove = this.state.result.filter(elem =>
            elem.name !== actorName)

        this.setState({
            result: toRemove,

        })

    }
    generateRandomActors() {
        this.setState(() => {
            return {
                result: this.actorsToShow(),
            }
        })
    }

    sortByName(key) {
        this.result.sort((a,b)=>a<b);
        this.setState({
            return{
                
            }
        })
        alert("Sorting by Name")
    }





    sortByPop() {
        alert("Sorted by popularity")
    }
    
    render() {
        return (
            <div>
                <h1>Imdb App</h1>
                <div>
                    <ButtonComponent
                        key={buttonTextList[0]}
                        buttonText={buttonTextList[0]}
                        onClickFunction={this.generateRandomActors}
                    />
                    <ButtonComponent
                        key={buttonTextList[1]}
                        buttonText={buttonTextList[1]}
                        onClickFunction={this.sortByName}
                    />
                    <ButtonComponent
                        key={buttonTextList[2]}
                        buttonText={buttonTextList[2]}
                        onClickFunction={this.sortByPop}
                    />

                </div>
                <table id="actorsList">
                    <tbody>
                        {this.state.result.map((elem) =>
                            <CardComponent key={elem.name}
                                name={elem.name}
                                popularity={elem.popularity}
                                image={elem.pictureUrl}
                                buttonOnClickFunction={() => this.delete(elem.name)} />
                        )}
                    </tbody>
                </table>
            </div>
        )

    }
}


export default ImdbRandom;

// class ImdbRandom extends Component {

//     render() {

//         return (
//             <div className="ImdbRandom">

//                 <ImdbRandom content={generateRandomActors}
//                     buttonProps={buttonTextList} />

//             </div>
//         );
//     }

// }
/*  {this.props.buttonProps.map((elem) =>
                    <ButtonComponent
                    key={elem}
                    buttonText={elem}
                    onClickFunction={}
                    />
                    )}*/
                    // const generateRandomActors = () => {

//     let result = [];
//     for (let i = 0; i < 5; i++) {
//         let random = Math.floor(Math.random() * actorsData.length);
//         result.push(actorsData[random]);
//         /*  actorsData.splice(random, 1);*/
//     }
//     return result;
// }