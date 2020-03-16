import React from "react"

function Pollcard (props){

    return(
        <div className="container">
            <div className="row">
        <div className="col" >
            <div id={props.id} className={props.classn}>
            <h3>{props.name}</h3>
            <h4 id="voteone" onClick={props.handleChoice}>{props.optionOne}</h4>
            <h4 id="votetwo" onClick={props.handleChoice}>{props.optionTwo}</h4></div>
        </div>
</div>
</div>
    )



}

export default Pollcard