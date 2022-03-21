import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeArticle } from "../../articleSlice";

function ArticleListing(props) {
  const articles = useSelector((state) => state.article.articles);
  const dispatch = useDispatch();
  const minDescLength = 40;
  const minTitleLength = 28;

  const renderSeeMore = (item) => {
    return <Link to={`/view/${item.id}`}>See more...</Link>;
  };

  const renderEllipses = (item) => {
    console.log(item.title.length);
    if (item.title.length > minTitleLength) return "...";
  };
  const deleteArticle = (id) => {
    dispatch(removeArticle(id));
  };
  if (articles.length)
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
            <div key={item.id}>
              <span> {item.id}.</span>
              <span>
                {item.title.slice(0, minTitleLength)} {renderEllipses(item)}
              </span>
              <span>
                {item.description.slice(0, minDescLength)} {renderSeeMore(item)}
              </span>
              <span onClick={() => deleteArticle(item.id)}>
                <AiTwotoneDelete />
              </span>
            </div>
          ))}
        </div>
      </>
    );

  return <div className="article-listing-header">Nothing to show here</div>;
}

export default ArticleListing;
