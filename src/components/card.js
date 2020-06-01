import React from "react";
import ButtonComponent from "./ButtonComponent"
const CardComponent = ({ name, popularity,image,buttonOnClickFunction }) => {
    return (
      
                <tr >
                    <td ><img src={image} alt={name}/></td>
                    <td>{name}</td>
                    <td>{popularity}</td>
                    <td ><ButtonComponent buttonText={"delete"} onClickFunction={buttonOnClickFunction}/></td>

                </tr>
 
    );
}
export default CardComponent;