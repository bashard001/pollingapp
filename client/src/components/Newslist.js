import React, { useState, useEffect } from 'react';


const Newslistitem = ({ news }) => {

  useEffect(() => {
    setProfileState(news);
  }, [news]);

  const [profileState, setProfileState] = useState(news);

  return (
  <div className="news" className="container-fluid">

    <div className="card " >
      <img src={news.urlToImage} className="card-img-top" alt="image" size=""></img>
      <div className="card-title">
      </div>
      <div className="card-body">
        <h5 className="card-title">{news.title}</h5>
        <p className="card-text">{news.content }</p>
        <a  className="card-text"  href={news.url} target="_blank">Read More</a>
      </div>
    </div>
  </div>
  )
}


const NewsList = (props) => {

  useEffect(() => {
    setProfileState(props);
  }, [props]);

  const [profileState, setProfileState] = useState(props);

  return (
    <div>

      <div className="container">
      <div className="card-columns">
        {profileState.list.news.map(function (name, index) {
          return <Newslistitem news={name} />
        })}
      </div>
      </div>

    </div>
  )
}

export default NewsList;


