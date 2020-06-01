import React, { Component } from "react";
import "./imdbRandom.css"
import ButtonComponent from "./components/ButtonComponent";
import actorsData from "./data/imdb.json";
import CardComponent from "./components/Card";

const buttonTextList = ["Generate random actors", "Sort By Name", "Sort By popularity"];



class ImdbRandom extends Component {

   

    render() {

        return (
            <div className="ImdbRandom">

                <List content={generateRandomActors()} buttonProps={buttonTextList} />

            </div>
        );
    }

}

 const generateRandomActors =()=> {
    
    let result = [];
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * actorsData.length);
        result.push(actorsData[random]);
      /*  actorsData.splice(random, 1);*/
    }
    return result;
}





class List extends Component {
    delete(actorName) {
        const copyArr=Object.assign([], this.props.content);       
        console.log("Name deleted " + actorName);
        copyArr.splice(actorName,1);  
    }
    sortByName(){
        alert("Sorting by Name")
    }
    sortByPop(){
        alert("Sorted by popularity")
    }

    render() {
        return (
           <div> 
           <h1>Imdb App</h1>
            <div>
            <ButtonComponent 
            key={this.props.buttonProps[0]}
            buttonText={this.props.buttonProps[0]}
            onClickFunction={console.log("Generate new list")}
            />
            <ButtonComponent 
            key={this.props.buttonProps[1]}
            buttonText={this.props.buttonProps[1]}
            onClickFunction={this.sortByName}
            /> 
            <ButtonComponent 
            key={this.props.buttonProps[2]}
            buttonText={this.props.buttonProps[2]}
            onClickFunction={this.sortByPop}
            />
                          
            </div>
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
            </table>
            </div>
            )

    }
}


export default ImdbRandom;
/*  {this.props.buttonProps.map((elem) => 
                    <ButtonComponent 
                    key={elem}
                    buttonText={elem}
                    onClickFunction={} 
                    />
                    )}*/