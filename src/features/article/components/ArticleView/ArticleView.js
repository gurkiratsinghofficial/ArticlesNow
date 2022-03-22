import React, { useCallback, useEffect } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setViewArticle } from "../../articleSlice";

function ArticleView() {
  const { articles, viewArticle } = useSelector((state) => state.article);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const redirectToHome = useCallback(() => navigate("/"), [navigate]);

  useEffect(() => {
    if (params.id) {
      const articleFound = articles.find(
        (article) => String(article.id) === params.id
      );
      if (articleFound) {
        dispatch(setViewArticle(articleFound));
        return;
      }
      toast.error("Article Not Found");
      redirectToHome();
    }
  }, [articles, dispatch, params.id, redirectToHome]);

  return (
    <div className="article-view-container">
      <div>
        <img src="/ArticleCover.png" alt="main" />
      </div>
      <span onClick={redirectToHome}>
        <RiArrowGoBackFill />
      </span>
      <div>
        <h1>{viewArticle?.title}</h1>
        <i>{viewArticle?.description}</i>
      </div>
    </div>
  );
}

export default ArticleView;
