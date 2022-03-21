import React from "react";
import articles from "../../../utils/dummy";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function ArticleListing(props) {
  const minLength = 40;
  const renderSeeMore = (item) => {
    if (item?.description?.length > minLength)
      return <Link to={`/view/${item.id}`}>See more...</Link>;
  };
  return (
    <>
      <div className="article-listing-header">
        <span>Serial no.</span>
        <span>Title</span>
        <span>Description</span>
        <span>Actions</span>
      </div>
      <div className="article-listing-container">
        {articles?.map((item) => (
          <div>
            <span> {item.id}.</span>
            <span> {item.title}</span>
            <span>
              {item.description.slice(0, minLength)} {renderSeeMore(item)}
            </span>
            <span>
              <AiTwotoneDelete />
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default ArticleListing;
