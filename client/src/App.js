import React from 'react';
import Footer from './components/Footer.js';
import Cards from './components/Cards.js';
import API from './utils/API'
import NewsList from './components/Newslist'

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         header: "Header from state...",
         content: "Content from state...",
         news:[],
         categories: {
            business:[],
            general: [],
            entertainment: [],
           sports: [],
            health: [],
            science: [],
       technology: [],
         }
      }
   }

   componentDidMount =()=>{
    this.getNews()
    this.getHeadlines()
   }

   getNews = (param)=>{
        API.getNews(param || '').then(data=>{
         console.log(data)
         this.setState({news: data.data.articles})})
   }

   getHeadlines = ()=>{
      const categories = this.state.categories;
      API.getHeadlines().then(data=>{
         data.data.sources.map(article=>{
            let cat = article.category;
            categories[cat].push({desc:article.description, url:article.url})
         })
         this.setState({categories:categories})
      })
   }
   

    handleClick = (e) => {
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


   render() {
      return (
         <div>
            <div class="text-center sticky-top" style={{color: "black", fontSize: "30px"}}><a className="page-top" href="#">THE WORLD NETWORK  </a></div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" >
                  <ul className="navbar-nav mr-auto" id="navigationItems">

                     <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.handleClick(e)} id="technology" href="#">Technology</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.handleClick(e)} id="sports" href="#">Sports</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.handleClick(e)} id="science" href="#">Science</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.handleClick(e)} id="finance" href="#">Finance</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.handleClick(e)} id="health" href="#">Health</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.handleClick(e)} id="business" href="#">Business</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" onClick={(e) => this.handleClick(e)} id="entertainment" href="#">Entertainment</a>
                     </li>
                  </ul>

                  <form class="form-inline">
                     <button class="btn btn-primary my-2 my-sm-0 ml-auto ">Sign in</button>
                     <button class="btn btn-outline-warning mr-auto" type="submit">Continue as guest</button>
                  </form>


               </div>
            </nav>
            
            <div id="newslist">
                  <NewsList list={this.state.news}/>
                  </div>

           
            <Cards headlines={this.state.categories}/>

            <Footer></Footer>

         </div>);
   }
}
export default App;




