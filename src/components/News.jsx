import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  state = {
    newsPosts: [],
    url: `https://newsapi.org/v2/everything?q=bitcoin&from=2020-12-21&sortBy=publishedAt&apiKey=${process.env.POST_API_KEY}`
  }

  async getNews() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        newsPosts: jsonData.articles,
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getNews();
  }


  render() {
    return (
      <>
        <div className="feature-section">
          <div className="container">
            <div className="section-title">
              <h2>Experience is the key to customer lifetime value.</h2>
            </div>
            <div className="news-container">
              {this.state.newsPosts.slice(0, 4).map(newspost => (<NewsItem key={newspost} posts={ newspost}/>))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

