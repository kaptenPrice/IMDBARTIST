import React from "react";
const cardComponent=({thText,columnText})=>{
    return(
        <table>
        <tr>
        <th>{thText}</th>
        </tr>
        <tr>
        <td>{columnText}</td>
        </tr>
        </table>
    );
}
export default cardComponent;