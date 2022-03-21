import "./App.css";
import { Route, Routes } from "react-router-dom";
import ArticleListing from "./features/components/ArticleListing/ArticleListing";
import ArticleView from "./features/components/ArticleView/ArticleView";
import Header from "./shared/Header";
import { setAddArticleModal } from "./features/articleSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import ArticleAdd from "./features/components/ArticleAdd/ArticleAdd";
import "react-responsive-modal/styles.css";

function App() {
  const addArticleModal = useSelector((state) => state.article.addArticleModal);

  const dispatch = useDispatch();
  const customStyles = {};

  const toggleAddModal = (payload) => dispatch(setAddArticleModal(payload));
  const closeAddModal = () => toggleAddModal(false);
  return (
    <div className="App">
      <Modal classNames={{
          modal: 'article-add-container',
        }} open={addArticleModal} onClose={closeAddModal}>
        <ArticleAdd />
      </Modal>
      <Header toggleAddModal={toggleAddModal} />
      <Routes>
        <Route path="/" element={<ArticleListing />} />
        <Route path="view/:id" element={<ArticleView />} />
      </Routes>
    </div>
  );
}

export default App;
