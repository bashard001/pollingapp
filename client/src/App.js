import React, { useState } from "react";

// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import API from "./utils/API"
import img1 from "./assets/images/linkedin.jpeg";
import img2 from "./assets/images/politics.jpg";
import img3 from "./assets/images/coronav.jpg";
import Footer from "./components/Footer"

import Card from "./components/Card";
import Pollscard from "./components/Pollscard"
import politics from "./assets/politics.json"
import NewsList from "./components/Newslist.js";

const App = function () {

    const [category, setCategory] = useState("politics")
    const [header, setHeader] = useState("Header from state...")
    const [content, setContent] = useState("Content from state...")
    const [news, setNews] = useState("news from state...")


    const handleCategoryChange = evt => {
        setCategory(evt.target.value)
    }

    const handleChoice = evt => {
        console.log(evt.target.innerHTML)
        console.log(evt.target.parentNode)

    }



    // componentDidMount = () => {
    //     this.getNews()
    //     // this.getHeadlines()
    // }

    const getNews = (param) => {
        API.getNews(param || '').then(data => {
            console.log(data)
            setNews(data.data.articles) 
        })
    }

    // getHeadlines = () => {
    //     const categories = this.state.categories;
    //     API.getHeadlines().then(data => {
    //         data.data.sources.map(article => {
    //             let cat = article.category;
    //             categories[cat].push({ desc: article.description, url: article.url })
    //         })
    //         this.setState({ categories: categories })
    //     })
    // }


    const handleClick = (e) => {
        console.log(e.target.id);
        this.getNews(`&category=${e.target.id}`)
        //ajax(id)
        //   {
        //    var url='http://newsapi.org/v2/top-headlines?country=us&category='+newsId+'&sortBy=publishedAt&apiKey=9d292aa6de19468c902a5695b2d3a89e';
        //   console.log(url)
        //    var req=new Request(url);
        //          fetch(req)
        //         .then(response => response.json())
        //         .then(json => this.setState({news : json.articles}));
        //  }

    };


    return (
        <div className="App">
            <Navbar onClick={handleClick}/>
            <br />
            <br />
            {politics.map(politic => (
                <Pollscard id={politic.id}
                    key={politic.id}
                    name={politic.name}
                    optionOne={politic.optionOne}
                    optionTwo={politic.optionTwo}
                    handleChoice={handleChoice} />
            ))}

            
            
            <NewsList list={news}/>
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title="Tech" />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title="Politics" />
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} title="Science" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;




