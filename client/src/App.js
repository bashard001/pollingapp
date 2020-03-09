import React, { useState, useEffect } from "react";

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
import NewsList from "./components/Newslist";

const App = function () {

    const [category, setCategory] = useState("politics")
    const [header, setHeader] = useState("Header from state...")
    const [newsList, setNewsList] = useState({ newsList: [] })
    const [news, setNews] = useState({ news: [] })


    const handleCategoryChange = evt => {
        setCategory(evt.target.value)
    }

    const handleChoice = evt => {
        console.log(evt.target.innerHTML)
        console.log(evt.target.parentNode)

    }


    const getNews = (param) => {
        API.getNews(param || '').then(data => {
            console.log(data)
            setNews({ news: data.data.articles })
        })
    }

    const getHeadlines = () => {
        const categories = this.state.categories;
        API.getHeadlines().then(data => {
            data.data.sources.map(article => {
                let cat = article.category;
                categories[cat].push({ desc: article.description, url: article.url })
            })
            this.setState({ categories: categories })
        })
    }


    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target.id);
        getNews(`&category=${e.target.id}`)
        setNewsList({ newsList: e.target.id })
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
    useEffect(() => {
        getNews()

    }, [newsList])

    return (
        <div className="App">
            <Navbar handleClick={handleClick} />
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


            <NewsList list={news} />
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




