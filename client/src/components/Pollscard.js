import React from "react"

function Pollcard (props){

    return(
        <div id={props.id}>
            <h3>{props.name}</h3>
            <h4 onClick={props.handleChoice}>{props.optionOne}</h4>
            <h4 onClick={props.handleChoice}>{props.optionTwo}</h4>
        </div>


    )



}

export default Pollcard