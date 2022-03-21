import React from "react";

function ArticleAdd(props) {
  return (
    <>
      <div className="article-add">
        <div className="article-add-form">
          <input className="styledInput" type="text" placeholder="Title" />
          <span>some error</span>
          <textarea
            className="styledInput"
            type="text"
            placeholder="Description"
            rows="7"
          />
          <span>some error</span>
          <div className="article-buttons">
            <button className="button">Cancel</button>
            <button className="button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleAdd;
