import React from "react";
import NewsItem from "./NewsItem";

const NewsContainer = ({ info }) => {
  const list = info.map((item) => <NewsItem key={item.id} item={item} />);

  return <div className="container">{list}</div>;
};

export default NewsContainer;
