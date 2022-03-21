import "./App.css";
import { Route, Routes } from "react-router-dom";
import ArticleListing from "./features/components/ArticleListing/ArticleListing";
import ArticleView from "./features/components/ArticleView/ArticleView";
import { MdArticle } from "react-icons/md";
import { BsFillPlusCircleFill } from "react-icons/bs";
function App() {
  return (
    <div className="App">
      <div className="header">
        <div>
          <MdArticle />
          <span>ArticleNow</span>
        </div>
        <div>
          <BsFillPlusCircleFill />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<ArticleListing />} />
        <Route path="view/:id" element={<ArticleView />} />
      </Routes>
    </div>
  );
}

export default App;
