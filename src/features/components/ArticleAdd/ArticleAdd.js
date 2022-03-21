import React from "react";

function ArticleAdd(props) {
  return (
    <>
      <div className="article-add-container">
        <input type="text" placeholder="Title" />
        <textarea type="text" placeholder="Description" rows="7" />
        <button>Submit</button>
      </div>
    </>
  );
}

export default ArticleAdd;
