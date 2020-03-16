import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import API from "./utils/API"
import img1 from "./assets/images/linkedin.jpeg";
import img2 from "./assets/images/politics.jpg";
import tech from "./assets/tech.json";
import Footer from "./components/Footer"
import Card from "./components/Card";
import Pollscard from "./components/Pollscard"
import Form from './components/Form';
import NewsList from "./components/Newslist";
import Cards from "./components/Cards";

const App = function () {
    const [currentUser, setCurrentUser] = useState({username:null,id:null})
    const [category, setCategory] = useState("politics")
    const [catPoll, setCatPoll] = useState([])
    const [newsList, setNewsList] = useState({ newsList: [] })
    const [news, setNews] = useState({ news: [] })
    const [queId, setQueId] = useState({body: []})
    const [categories, setCategories] = useState({
        categories: {
            business: [],
            general: [],
            entertainment: [],
            sports: [],
            health: [],
            science: [],
            technology: []
        }
    });

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
    const changeCurrentUser =(user)=>{
        console.log(user)
        setCurrentUser(user)
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

    const getCategories = () => {
        let categories_ = {
            business: [],
            general: [],
            entertainment: [],
            sports: [],
            health: [],
            science: [],
            technology: []
        };
        API.getHeadlines().then(data => {
            data.data.sources.map(article => {
                let cat = article.category;
                categories_[cat].push({ desc: article.description, url: article.url });
            })
            setCategories({ categories: categories_ });
        })
    }


    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target.id);
        getNews(`&category=${e.target.id}`)
        setCategory(e.target.id)
        console.log(e.target.id);
        

    };
    useEffect(() => {
        
        getPolls(category)
        getNews()
        console.log("catagodskg" + category)
        

    }, [category])

    useEffect(() => {
        getNews();
        getCategories();
    }, [newsList])

    return (
        <div className="App">

            <div className="text-center sticky-top" style={{ color: "black", fontSize: "30px" }}><a className="page-top" href="#">WELCOME TO THE WORLD NETWORK {currentUser.username || ''}!</a> </div>


            {/* signin authentication goes here */}
            <Form changeCurrentUser={changeCurrentUser}/>
            {/* <Form /> */}
            

            <Navbar handleClick={handleClick} />
            <br />
            <br />


            {catPoll && catPoll.length > 0 && catPoll.map(poll => (
                <Pollscard id={poll.id}
                    key={poll.id}
                    name={poll.title}
                    optionOne={poll.optionone.option}
                    optionTwo={poll.optiontwo.option}
                    handleChoice={handleChoice} />
            ))}


            <NewsList list={news} />

            <Cards list={categories} />

            <Footer></Footer>

        </div>
    );
}
export default App;




