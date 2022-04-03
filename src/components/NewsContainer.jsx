import React from "react";
import NewsItem from "./NewsItem";
import Footer from "./Footer";
const NewsContainer = ({ info }) => {
  const list = info.map((item) => <NewsItem key={item.id} item={item} />);

  return (
    <div>
      <div className="container">{list}</div>
    </div>
  );
};

export default NewsContainer;
