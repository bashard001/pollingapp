import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import API from "./utils/API"
import img1 from "./assets/images/linkedin.jpeg";
import img2 from "./assets/images/politics.jpg";
import img3 from "./assets/images/coronav.jpg";
import Footer from "./components/Footer"
import Card from "./components/Card";
import Pollscard from "./components/Pollscard"

import NewsList from "./components/Newslist";

const App = function () {

    const [category, setCategory] = useState("politics")
    const [catPoll, setCatPoll] = useState([])
    const [newsList, setNewsList] = useState({ newsList: [] })
    const [news, setNews] = useState({ news: [] })
    const [queId, setQueId] = useState({body: []})

    const handleChoice = (evt) => {

        var identi = [{voteid: evt.target.id}, {queid: evt.target.parentNode.id}]
         setQueId({body: identi }) 
        console.log(queId)
        
    
        
    }

    useEffect(() => {
        upDate(queId)

    },[queId])

    const upDate = (param) => {

    
        API.pollVote(param).then(data => {
            console.log("hello" + data)
        })
    }
    const handleCategoryChange = evt => {
        setCategory(evt.target.value)
    }


    const getPolls = (param) => {

       return API.getPolls(param || 'science').then(
           (data) => {
               console.log("data" + data)
               setCatPoll(data.data.polls)
               
           }
       )
    }
    const getNews = (param) => {
        API.getNews(param || '').then(data => {
            console.log(data)
            setNews({ news: data.data.articles })
            console.log(news)
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
        setCategory(e.target.id)

    };
    useEffect(() => {
        
        getPolls(category)
        getNews()
        console.log("catagodskg" + category)
        

    }, [category])

    return (
        <div className="App">
            <Navbar handleClick={handleClick} />
            <br />
            <br />
            { console.log("!!! " + catPoll)}
            {catPoll && catPoll.length > 0 && catPoll.map(poll => (
                <Pollscard 
                    id={poll._id}
                    key={poll._id}
                    name={poll.title}
                    optionOne={poll.optionone.option}
                    optionTwo={poll.optiontwo.option}
                    handleChoice={handleChoice} />
            ))
            }


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




