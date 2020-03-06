import React from 'react';


const Newslistitem = ({ news }) => {

  return (<div className="news" class="container-fluid">
    {/* <div class="col-sm-12 col-md-4 col-lg-3"> */}
    <div class="card " >
      <img src={news.urlToImage} class="card-img-top" alt="image" size=""></img>
      <div class="card-title">
      </div>
      <div class="card-body">
        <h5 class="card-title">{news.name}</h5>
        <p class="card-text">{news.description}</p>
        <p class="card-text">{news.url}</p>
      </div>
    </div>
  </div>
  )
}


const NewsList = (props) => {
  console.log('newslist', props)
  return (
    <div>
      {/* <div className="container-fluid d-flex justify-content-center">
      <div className="row"> */}
      <div className="container">
    <div className="card-columns">
        {/* <ul className='news-list'> */}
          {
            props.list.map(news => (
              <Newslistitem news={news} key={news.id} />
            ))
          }
        {/* </ul> */}
      </div>
      </div>
    </div>
  )
}
export default NewsList;


