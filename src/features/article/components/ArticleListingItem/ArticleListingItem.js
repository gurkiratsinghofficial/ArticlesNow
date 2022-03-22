import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

function ArticleListingItem({
  item,
  ind,
  minTitleLength,
  minDescLength,
  renderEllipses,
  renderSeeMore,
  deleteArticle,
}) {
  return (
    <div>
      <span> {ind + 1}.</span>
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
  );
}
const MemoizedArticleListingItem = React.memo(ArticleListingItem);
export default MemoizedArticleListingItem;
