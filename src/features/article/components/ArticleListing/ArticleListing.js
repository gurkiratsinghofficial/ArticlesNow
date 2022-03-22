import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeArticle } from "../../articleSlice";
import { FcCancel } from "react-icons/fc";
import MemoizedArticleListingItem from "../ArticleListingItem/ArticleListingItem";

function ArticleListing(props) {
  const articles = useSelector((state) => state.article.articles);
  const dispatch = useDispatch();
  const minDescLength = 40;
  const minTitleLength = 28;

  const renderSeeMore = useCallback(
    (item) => <Link to={`/view/${item.id}`}>See more...</Link>,
    []
  );

  const renderEllipses = useCallback(
    (item) => item.title.length > minTitleLength && "...",
    [minTitleLength]
  );

  const deleteArticle = useCallback(
    (id) => dispatch(removeArticle(id)),
    [dispatch]
  );

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
          {articles
            ?.slice()
            .reverse()
            .map((item, ind) => (
              <MemoizedArticleListingItem
                key={item.id}
                item={item}
                ind={ind}
                minTitleLength={minTitleLength}
                minDescLength={minDescLength}
                renderEllipses={renderEllipses}
                renderSeeMore={renderSeeMore}
                deleteArticle={deleteArticle}
              />
            ))}
        </div>
      </>
    );

  return (
    <>
      <div className="article-listing-empty">
        <FcCancel />
        Nothing to show here!
      </div>
    </>
  );
}

export default ArticleListing;
