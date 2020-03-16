import React from 'react';
import './card-style.css';
//import Navbar from "./Navbar.js";

import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
    let desc = '';
    let items = '';
    try{
       // console.log("propppppppppppppppppppppppppppppps..."+JSON.stringify(props.mycards[0].desc));
        desc = props.mycards[0].desc;
        let count=0;
        items = props.mycards.slice(0,5).map((item, key) =>
            <li key={item.id}>{item.desc}</li>
        );
    }catch(e){}


    /*getHeadlines = (props)=>{
        const categories = this.state.categories;
        API.getHeadlines().then(data=>{
           data.data.sources.map(article=>{
              let cat = article.category;
              categories[cat].push({desc:article.description, url:article.url})
           })
           this.setState({categories:categories})
        }) 
     } */

    return (
        <div className="card text-center">

            <div className="overflow">
                <img src= {props.imgsrc} alt="image 1" className="card-img-top"/>
            </div>
            <div className= "card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                {/* <p className="card-text text-secondary"> {desc}  </p> */}
                {/* <button type="button" className="btn btn-link">Read More</button> */}
                <ul>{items}</ul>

            </div>

        </div>
    )
}

export default Card;