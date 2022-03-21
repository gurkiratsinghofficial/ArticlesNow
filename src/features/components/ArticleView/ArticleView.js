import React, { useEffect } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setViewArticle } from "../../articleSlice";

function ArticleView() {
  const { articles, viewArticle } = useSelector((state) => state.article);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const redirectToHome = () => {
    navigate("/");
  };
  useEffect(() => {
    if (params.id) {
      const articleFound = articles.find(
        (article) => String(article.id) === params.id
      );
      console.log(articleFound);
      if (articleFound) dispatch(setViewArticle(articleFound));
    } else redirectToHome();
  }, [articles, dispatch, params.id]);

  return (
    <div className="article-view-container">
      <img src="/ArticleCover.jpeg" alt="main" />
      <span onClick={redirectToHome}>
        <RiArrowGoBackFill />
      </span>
      <div>
        <h1>{viewArticle?.title}</h1>
        <p>{viewArticle?.description}</p>
      </div>
    </div>
  );
}

export default ArticleView;
