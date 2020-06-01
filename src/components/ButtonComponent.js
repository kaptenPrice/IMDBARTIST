import React from "react";
const buttonComponent =({onClickFunction, buttonText})=>{
    return(
        <button onClick={onClickFunction}>{buttonText}</button>
    );
};
export default buttonComponent;
