import "./App.css";
import { Route, Routes } from "react-router-dom";
import ArticleListing from "./features/components/ArticleListing/ArticleListing";
import ArticleView from "./features/components/ArticleView/ArticleView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleListing />} />
        <Route path="view" element={<ArticleView />} />
      </Routes>
    </div>
  );
}

export default App;
