import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getNews: function (query) {
    return axios.get(`
      http://newsapi.org/v2/top-headlines?country=us${query}&pageSize=100&apiKey=9d292aa6de19468c902a5695b2d3a89e
     `);
  },
  getHeadlines: function(){
    return axios.get(`http://newsapi.org/v2/sources?apiKey=9d292aa6de19468c902a5695b2d3a89e`)
  },
  getPolls: function(category){
    return axios.get(`/api/polls/` + category)
  },
  pollVote: function(params){
    return axios.post(`/api/vote` , {...params})
  },
  logIn: function(params){
    return axios.post('/api/login', {...params})
  },
  signUp: function(params){
    return axios.post('/api/signup', {...params})
  },
  logOut: function(){
    return axios.get('/api/logout')
    
  }
};