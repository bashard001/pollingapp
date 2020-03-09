import React, { useState, useEffect } from 'react';


const Newslistitem = ({ news }) => {

  useEffect(() => {
    setProfileState(news);
  }, [news]);

  const [profileState, setProfileState] = useState(news);


  return (<div className="news" className="container-fluid">

    <div className="card " >
      <img src={news.urlToImage} className="card-img-top" alt="image" size=""></img>
      <div className="card-title">
      </div>
      <div className="card-body">
        <h5 className="card-title">{news.name}</h5>
        <p className="card-text">{news.description}</p>
        <p className="card-text">{news.url}</p>
      </div>
    </div>
  </div>
  )
}


const NewsList = (props) => {
  //console.log('newslist from component===', JSON.stringify(props))


  useEffect(() => {
    setProfileState(props);
  }, [props]);

  const [profileState, setProfileState] = useState(props);
  console.log("-------------------------->" + JSON.stringify(profileState));

  return (
    <div>

      <div className="container">



        {profileState.list.news.map(function (name, index) {
          return <Newslistitem news={name} />
        })}

      </div>
    </div>
  )
}

export default NewsList;