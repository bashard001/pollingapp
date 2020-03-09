import React from 'react';
import './card-style.css';

import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
    return (
        <div className="card text-center">

            <div className="overflow">
                <img src= {props.imgsrc} alt="image 1" className="card-img-top"/>
            </div>
            <div className= "card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary"> lorem201 asfsfasfhskasdfn asjhfjs hasjdfh asjhhjds fjh askdfh aksjhjkasd ashdas jk asdjhfaskjdh asjhs gjb 
                </p>
                <button type="button" class="btn btn-link">Read More</button>
                

            </div>

        </div>
    )
}

export default Card;