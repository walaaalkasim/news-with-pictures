import React from "react";

/* <li>{res.results.map((el) => el.sectionName)}</li> */
// {res.results.map((el) => (<li>{el.webTitle} </li>))}

const NewsItem = ({ item }) => {
  const { title, publishedAt, urlToImage, description, url } = item;

  return (
    <>
      <div className="title">
        <div className="image">
          <img src={urlToImage} alt="" />
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
