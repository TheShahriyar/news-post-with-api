import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    const { urlToImage, title, description, url } = this.props.posts;
    return (
      <>
        <a href={url} target="_blank" className="news-item" rel="noreferrer">
          <img src={urlToImage} alt="" />
          <h5>{title.split(" ").slice(0, 7).join(" ")}</h5>
          <p>{description.split(" ").slice(0, 15).join(" ")}</p>
        </a>
      </>
    )
  }
}
