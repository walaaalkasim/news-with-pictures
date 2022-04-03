import React from "react";

const NewsItem = ({ item }) => {
  const { title, publishedAt, urlToImage, description, url } = item;

  return (
    <>
      <div className="title">
        <div className="image">
          <img src={urlToImage} alt=" not found" />
        </div>
        {title}
        {description}
        <div className="localDate">
          {new Date(publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          })}
          <a href={url} target="_blank" rel="noreferrer">
            read more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
